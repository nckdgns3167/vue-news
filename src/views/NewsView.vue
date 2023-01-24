<template>
  <div>
    <div v-for="news in this.$store.state.newsList" :key="news.id">{{ news.title }}</div>
  </div>
</template>

<script>
// import { fetchNewsList } from "../api/index.js";

export default {
  // data() {
  //   return {
  //     newsList: [],
  //   };
  // },
  created() {
    this.$store.dispatch('FETCH_NEWS_LIST');
    // fetchNewsList()
    //   .then((response) => (this.newsList = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
