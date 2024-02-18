<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <Login></Login>
  </div>
</template>

<script>

import Login from '@/views/login/index.vue'

export default {
  name: "App",
  components: {Login}
}
</script>
