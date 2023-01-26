import Vue from "vue";
import Vuex from "vuex";
import { fetchNewsList, fetchAskList, fetchJobList } from "../api/index.js";

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
  mutations: {
    SET_NEWS_LIST(state, newsList) {
      state.newsList = newsList;
    },
    SET_ASK_LIST(state, askList) {
      state.askList = askList;
    },
    SET_JOB_LIST(state, jobList) {
      state.jobList = jobList;
    },
  },
  actions: {
    FETCH_NEWS_LIST({ commit }) {
      // context.commit
      fetchNewsList()
        .then(({ data: newsList }) => {
          // response.data => newsList
          commit("SET_NEWS_LIST", newsList);
        })
        .catch((error) => console.log(error));
    },
    FETCH_ASK_LIST({ commit }) {
      fetchAskList()
        .then(({ data: askList }) => {
          commit("SET_ASK_LIST", askList);
        })
        .catch((error) => console.log(error));
    },
    FETCH_JOB_LIST({ commit }) {
      fetchJobList()
        .then(({ data: jobList }) => {
          commit("SET_JOB_LIST", jobList);
        })
        .catch((error) => console.log(error));
    },
  },
});
