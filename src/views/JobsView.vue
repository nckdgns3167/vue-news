<template>
  <div>
    <div v-for="job in jobList" :key="job.id">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobList } from "../api/index.js";

export default {
  data() {
    return {
      jobList: [],
    };
  },
  created() {
    fetchJobList()
      .then((response) => (this.jobList = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
