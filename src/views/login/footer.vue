<template>
  <div class='footer'>
    <div>
      Copyright © 2013-2023 安徽天天爱车网络科技有限公司 All Rights Reserved · 
      <a target="_blank" href="https://beian.miit.gov.cn">皖B2-20170040-1</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px 10px;
    font-size: 14px;
    a {
      color: #999;
    }
  }
</style>