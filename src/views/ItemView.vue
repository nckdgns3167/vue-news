<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div><i class="fa-solid fa-user fa-3x"></i></div>
        <div class="user-description">
          <router-link :to="`/user/${this.getItemInfo.user}`">{{ this.getItemInfo.user }}</router-link>
          <div class="time">{{ this.getItemInfo.time_ago }}</div>
        </div>
      </div>
      <h2>{{ this.getItemInfo.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="this.getItemInfo.content"></div>
    </section>
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

<style scoped>
.user-container {
  display: flex;
  align-content: center;
  padding: 0.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>
