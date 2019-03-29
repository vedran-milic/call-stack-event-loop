import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menuOpen: false
  },
  mutations: {
    TOGGLE_MENU(state, status) {
      state.menuOpen = status;
    }
  },
  actions: {
    toggleMenu({commit}, status) {
      commit('TOGGLE_MENU', status);
    }
  },
});
