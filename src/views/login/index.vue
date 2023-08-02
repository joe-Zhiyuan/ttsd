<template>
  <div class='login-container'>
    <Header></Header>
    <div class="loginCenter">
      <img src="../../assets/loginBG@2x.png" alt="LoginBG">
      <el-form ref="loginForm" class="login-form" autocomplete="on" label-position="left">
        <h3>登录</h3>
      </el-form>
    </div>
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

<style lang="scss" scoped>
  .login-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    .loginCenter {
      flex: 1;
      display: flex;
      justify-content: center;
      background: linear-gradient(180deg,#4b5de8,#2599e4);
      img {
        height: 600px;
      }
      .login-form {
        padding: 28px 40px;
        background: #fff;
      }
    }
  }
</style>