import axios from "axios";

// 1. HTTP Request & Response 관련 설정하는 구간
const config = {
    baseUrl: "https://api.hnpwa.com/v0/",
}

// 2. API 함수 작성 구간
function fetchNewsList() {
    return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList() {
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobList() {
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

export { fetchNewsList, fetchAskList, fetchJobList };