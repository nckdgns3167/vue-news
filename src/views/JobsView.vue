<template>
  <div>
    <div v-for="job in this.getJobList" :key="job.id">{{ job.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getJobList"])
    // ...mapState({
    //   jobList: (state) => state.jobList,
    // }),
  },
  created() {
    this.$store.dispatch("FETCH_JOB_LIST");
  },
};
</script>

<style></style>
