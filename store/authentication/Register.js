import Swal from "sweetalert2";
export const state = () => ({
  RegisterUser: null
});

export const getters = {
  register_user: state => {
    state.RegisterUser;
  }
};

export const mutations = {
  REGISTER_USER(state, data) {
    state.RegisterUser = data;
  }
};

export const actions = {
  async postRegisterUser({ commit }, data) {
    try {
      let response = await this.$axios.$post("users/register", data);
      commit("REGISTER_USER", response);
      console.log(response);
      if (response.code == 0) {

        // new this.$errToast(response.msg)
        new Swal({
          position: "top-end",
          icon: "error",
          text: response.msg,
          showConfirmButton: true,
        });
      } else {
        // new this.$succToast(response.msg)
        new Swal({
          position: "top-end",
          icon: "success",
          text: response.msg,
          showConfirmButton: true,
        });
        this.$store.dispatch('authentication/Login/Logout')
        this.$router.push('/auth/user/login')
      }
    } catch (error) {
      console.log(error);
    }
  }
};
