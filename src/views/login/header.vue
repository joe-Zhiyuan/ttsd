<template>
  <div class='header'>
    <div class="logo">
      <img src="../../assets/tticar_logo.png" alt="logo">
      <div>物流站点端</div>
    </div>
    <div class="contact">
      <a href="tel:400-661-0551">服务热线: 400-661-0551</a>
      <span></span>
      <router-link to="login">首页</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header'
  }
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    padding: 20px 10px;
    .logo {
      display: flex;
      justify-content: space-between;
      width: 330px;
      img {
        width: 200px;
        height: 24px;
      }
      div {
        background-color: rgba(10, 187, 135, 0.1);
        color: #0abb87;
        cursor: text !important;
        height: 24px;
        line-height: 24px;
        padding: 0 15px;
        border-radius: 2rem;
      }
    }
    .contact {
      font-size: 14px;
      a {
        padding-right: 20px;
        border-right: 1px solid #ccc;
      }
      a:last-child {
        padding-left: 20px;
        padding-right: 10px;
        border-right: none;
      }
    }
  }
</style>