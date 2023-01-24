<template>
  <div class="nav">
    <router-link to="/news">News</router-link> | <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<style scoped>
.nav {
  color: white;
  background-color: #42b883;
  display: flex;
  padding: 8px;
}

.nav .router-link-exact-active {
  color: #35495e;
}

.nav a {
  color: white;
}
</style>
