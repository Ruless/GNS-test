import Vue from 'vue'
import Vuex from 'vuex'

import Mock from './modules/Mock'


Vue.use(Vuex);

const store = new Vuex.Store({
  namespaced: true,
  modules: {
    Mock
  }
});
export default store