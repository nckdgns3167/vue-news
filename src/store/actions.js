import { 
  fetchNewsList, 
  fetchAskList, 
  fetchJobList, 
  fetchUserInfo
} from "../api/index.js";

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
  FETCH_USER_INFO({ commit }, username) {
    fetchUserInfo(username)
      .then(({ data: userInfo }) => {
        commit("SET_USER_INFO", userInfo);
      })
      .catch((error) => console.log(error));
  },
};
