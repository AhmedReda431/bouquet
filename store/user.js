export const state = () => ({
  user: {},
  token: null,
  isLoggedIn: false,
});

export const mutations = {
  storeUser(state, userObj) {
    state.user = userObj;
  },
  storeToken(state, token) {
    state.token = token;
  },
  switchUserStuts(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
  },
};

export const actions = {
  addUser({ commit }, event) {
    commit("storeUser", event);
    this.$auth.$storage.setUniversal("userData", event);
  },
  addToken({ commit }, event) {
    commit("storeToken", event);
    this.$auth.$storage.setUniversal("token", event);
  },
  switchStatus({ commit }, event) {
    commit("switchUserStuts", event);
    this.$auth.$storage.setUniversal("logged_In", event);
  },
};

export const getters = {
  getUser: (state) => {
    return state.user;
  },
  isAuthenticated(state) {
    return state.auth.loggedIn;
  },

  loggedInUser(state) {
    return state.auth.user;
  },
};
