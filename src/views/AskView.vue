<template>
  <div>
    <div v-for="ask in this.askList" :key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      askList: (state) => state.askList,
    }),
  },
  created() {
    this.$store.dispatch("FETCH_ASK_LIST");
  },
};
</script>

<style></style>
