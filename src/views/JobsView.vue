<template>
  <div>
    <div v-for="job in this.jobList" :key="job.id">{{ job.title }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      jobList: (state) => state.jobList,
    }),
  },
  created() {
    this.$store.dispatch("FETCH_JOB_LIST");
  },
};
</script>

<style></style>
