export default function({ $auth, store, $axios , $cookiz  }, inject) {
  // Create a custom axios instance

  const api = $axios.create({
    headers: {
      Accept: "application/json",
      "Accept-Language":$cookiz.get('i18n_redirected'),
      "Content-Type": "application/json",
    }
  });

  $axios.interceptors.request.use(function (config) {
    // const token = store.getState().session.token;
    config.headers.lang =  $cookiz.get('i18n_redirected');
    config.headers.Authorization = $cookiz.get('auth.token') ? $cookiz.get('auth.token') : '';
    // config.headers.Authorization =  'Bearer' + $cookiz.get('auth.token') ? 'Bearer' + $cookiz.get('auth.token') : '';
  
    return config;
  });

  // Set baseURL
  api.setBaseURL("https://klm.cdy.mybluehost.me/bouquet/api/");
  api.setToken($auth?.$storage?.getUniversal("token"), "Bearer");

  // handle errors
  api.onError(error => {
    $nuxt.$loading.finish();
  });

  api.onRequest(config => {
    $nuxt.$loading.start();
  });

  api.onResponse(response => {
    $nuxt.$loading.finish();
  });

  inject("api", api);
}
