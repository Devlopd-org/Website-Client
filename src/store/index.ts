import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    snackbar: {
      display: false,
      message: '',
    },
  },
  mutations: {
    displaySnackbar(state, payload) {
      if (typeof payload === 'string') {
        state.snackbar.message = payload;
        state.snackbar.display = true;
      } else {
        state.snackbar.message = payload.message;
        state.snackbar.display = payload.display;
      }
    },
  },
  actions: {},
  modules: {},
});
