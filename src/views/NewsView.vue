<template>
  <div>
    <div v-for="news in newsList" :key="news.id">{{ news.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from "../api/index.js";

export default {
  data() {
    return {
      newsList: [],
    };
  },
  created() {
    fetchNewsList()
      .then((response) => (this.newsList = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
