<template>
  <div class='login-container'>
    <Header></Header>
    <div class="loginCenter">
      <img src="../../assets/loginBG@2x.png" alt="LoginBG">
      <div class="loginBox">
        <el-form ref="loginForm" class="login-form" autocomplete="on" label-position="left">
          <h3>登录</h3>
          <el-tabs v-model="activeName" stretch @tab-click="handleClick">
            <el-tab-pane label="密码登录" name="first">
              <el-form-item>
                <el-input v-model="form.userPhone" placeholder="请输入手机号" class="formInput" max="11"
                  prefix-icon="el-icon-mobile-phone" clearable></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.passWord" placeholder="请输入密码"  class="formInput"
                  prefix-icon="el-icon-unlock" clearable show-password></el-input>
              </el-form-item>
              <el-form-item>
                <div class="formCheck">
                  <el-checkbox v-model="form.checked">记住账号</el-checkbox>
                  <router-link to="resetLogin" class="link">忘记密码</router-link>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button class="" type="primary" @click="onSubmit">立即登录</el-button>
              </el-form-item>
            </el-tab-pane>
            <el-tab-pane label="验证码登录" name="second">
              验证码登录
            </el-tab-pane>
          </el-tabs>
        </el-form>
      </div>
      
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
        activeName: 'first',
        form: {
          userPhone: '',
          passWord: '',
          checked: false,
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>

<style lang="scss">
  .el-tabs__header {
    margin-bottom: 30px;
  }
  .el-tabs__item {
    height: 60px;
    line-height: 60px;
  }
  .el-tab-pane .el-form-item:nth-last-child(2) {
    margin-bottom: 12px;
  }
</style>

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
      .loginBox {
        display: flex;
        width: 350px;
        align-items: center;
        .login-form {
          flex: 1;
          padding: 28px 40px;
          background: #fff;
          border-radius: 6px;
          // 穿透组件样式
          .formInput ::v-deep .el-input__inner {
            border-radius: unset;
          }
          .formCheck {
            display: flex;
            justify-content: space-between;
            padding: 0 2px
          }
          .el-button--primary {
            width: 100%;
            background-color: #4173ff;
            border-color: #4173ff;
            padding: 14px 12px;
            font-size: 16px;
            border-radius: 2px;
          }
        }
      }
    }
  }
</style>