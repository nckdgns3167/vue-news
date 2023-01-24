<template>
  <div>
    <div v-for="ask in this.$store.state.askList" :key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
// import { fetchAskList } from "../api/index.js";

export default {
  // data() {
  //   return {
  //     askList: [],
  //   };
  // },
  created() {
    this.$store.dispatch("FETCH_ASK_LIST");
    // fetchAskList()
    //   .then((response) => (this.askList = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
