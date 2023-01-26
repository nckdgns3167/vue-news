import { fetchNewsList, fetchAskList, fetchJobList } from "../api/index.js";

export default {
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
};
