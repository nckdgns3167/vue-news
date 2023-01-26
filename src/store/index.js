import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newsList: [],
    askList: [],
    jobList: [],
  },
  getters: {
    getNewsList(state) {
      return state.newsList;
    },
    getAskList(state) {
      return state.askList;
    },
    getJobList(state) {
      return state.jobList;
    },
  },
  mutations,
  actions,
});
