<template>
  <div>
    <p v-for="news in this.getNewsList" :key="news.id">
      <a :href="news.url">
        {{ news.title }}
      </a>
      <small>{{ news.time_ago }}, {{ news.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getNewsList"]),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS_LIST");
  },
};
</script>

<style></style>
