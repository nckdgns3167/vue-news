<template>
  <div>
    <p v-for="job in this.getJobList" :key="job.id">
      <a :href="job.url">
        {{ job.title }}
      </a>
      <small>{{ job.time_ago }}{{ job.domain ? `, ${job.domain}` : "" }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getJobList"]),
  },
  created() {
    this.$store.dispatch("FETCH_JOB_LIST");
  },
};
</script>

<style></style>
