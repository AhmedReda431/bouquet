export const state = () => ({});

export const getters = {
  setUser: state => {
    return state.auth.user;
  }
};

export const mutations = {
  LOGIN(state, data) {
    state.auth.user = data;
  }
};

export const actions = {
  async LoginHandler({ commit }, data) {
    try {
      const response = await this.$auth.loginWith("local", { data: data });

      console.log(response);

      this.$auth.$storage.setCookie(
        "user",
        JSON.stringify(response.data.body),
        true
      );
      // await this.$auth.setUserToken(response.data.token , true);

      commit("LOGIN", response.data.body);
      commit("ERRORS", null, { root: true });
    } catch (error) {
      commit("ERRORS", error.response, { root: true });
    }
  },
  Logout({ state, commit }) {
    this.$axios.post(`users/logout`).then(() => {
      localStorage.removeItem("auth.userData");
      localStorage.removeItem("auth.logged_In");
      localStorage.removeItem("auth.user");
      localStorage.removeItem("auth.token");
      this.$cookiz.remove("auth.userData");
      this.$cookiz.remove("auth.logged_In");
      this.$cookiz.remove("auth.token");
      this.$cookiz.remove("auth.user");
      // this.$cookiz.remove("auth._token_expiration.local");
      if (state.Errors != null) {
        commit("ERRORS", null, { root: true });
      }
      location.reload();
      // this.$router.push("/");
    });
  }
};
