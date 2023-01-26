<template>
  <div>
    <div v-for="ask in this.getAskList" :key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getAskList"])
    // ...mapState({
    //   askList: (state) => state.askList,
    // }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK_LIST");
  },
};
</script>

<style></style>
