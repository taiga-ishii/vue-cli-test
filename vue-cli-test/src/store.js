// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import gallery from './assets/gallery.json';

Vue.use(Vuex);

/* eslint-disable no-new */
export default new Vuex.Store({
  state: {
    gallery,
  },
});
