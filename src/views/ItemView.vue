<template>
  <div>
    {{ this.getItemInfo.title }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getItemInfo"]),
  },
  created() {
    const askId = this.$route.params.askId;
    this.$store.dispatch("FETCH_ITEM_INFO", askId);
  },
};
</script>

<style></style>
