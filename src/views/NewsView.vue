<template>
  <div>
    <div v-for="news in this.getNewsList" :key="news.id">{{ news.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getNewsList"])
    // ...mapState({
    //   newsList: (state) => state.newsList,
    // }),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS_LIST");
  },
};
</script>

<style></style>
