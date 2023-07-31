<template>
  <div class='login-container'>
    <Header></Header>
    <el-form ref="loginForm" class="login-form" autocomplete="on" label-position="left">
      
    </el-form>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from './header.vue';
  import Footer from './footer.vue';

  export default {
    name: 'Login',
    components: { Header, Footer },
    data() {
      return {

      };
    },
  }
</script>

<style scoped>
  
</style>