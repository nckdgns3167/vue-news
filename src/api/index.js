import axios from "axios";

// 1. HTTP Request & Response 관련 설정하는 구간
const config = {
    baseUrl: "https://api.hnpwa.com/v0/",
    // ...
}

/*
 * 2. axios 라이브러리를 이용한 HTTP 비동기 통신으로 데이터 받아오기.
 *    Promise 객체를 리턴한다. => then, catch문 활용하여 후 처리.
 */ 
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