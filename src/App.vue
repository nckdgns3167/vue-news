<template>
  <div id="app">
    <NavBar />
    <transition name="page">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

/* 라우터 트렌지션 */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
