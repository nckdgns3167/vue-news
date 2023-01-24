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
    FETCH_NEWS_LIST(context) {
      fetchNewsList()
        .then((response) => {
          context.commit("SET_NEWS_LIST", response.data);
        })
        .catch((error) => console.log(error));
    },
    FETCH_ASK_LIST(context) {
      fetchAskList()
        .then((response) => {
          context.commit("SET_ASK_LIST", response.data);
        })
        .catch((error) => console.log(error));
    },
    FETCH_JOB_LIST(context) {
      fetchJobList()
        .then((response) => {
          context.commit("SET_JOB_LIST", response.data);
        })
        .catch((error) => console.log(error));
    },
  },
});
