async function signIn(payload) {
  try {
    return await $nuxt.$api.post(`login`, payload).then((res) => {
      return res;
    });
  } catch (error) {
    return error
  }
}

const auth = {
  signIn,
};
export default auth;
