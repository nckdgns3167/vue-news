<template>
  <div>
    <p>name: {{ this.getUserInfo.id }}</p>
    <p>karma: {{ this.getUserInfo.karma }}</p>
    <p>created: {{ this.getUserInfo.created }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUserInfo"]),
  },
  created() {
    const username = this.$route.params.name;
    this.$store.dispatch("FETCH_USER_INFO", username);
  },
};
</script>

<style></style>
