<template>
  <div>
    <div v-for="ask in askList" :key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "../api/index.js";

export default {
  data() {
    return {
      askList: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => (this.askList = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style></style>
