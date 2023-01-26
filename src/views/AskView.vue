<template>
  <div>
    <p v-for="ask in this.getAskList" :key="ask.id">
      <a :href="ask.url">
        {{ ask.title }}
      </a>
      <small>{{ ask.time_ago }}, {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getAskList"]),
  },
  created() {
    this.$store.dispatch("FETCH_ASK_LIST");
  },
};
</script>

<style></style>
