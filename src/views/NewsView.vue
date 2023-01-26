<template>
  <div>
    <div v-for="news in this.newsList" :key="news.id">{{ news.title }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      newsList: (state) => state.newsList,
    }),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS_LIST");
  },
};
</script>

<style></style>
