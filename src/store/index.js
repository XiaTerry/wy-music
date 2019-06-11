import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getters';
import state from './state';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
});
