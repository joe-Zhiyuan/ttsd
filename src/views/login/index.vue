<template>
  <div class='login-container'>
    <Header></Header>
    <div class="loginCenter">
      <img src="../../assets/loginBG@2x.png" alt="LoginBG">
      <div class="loginBox">
        <el-form ref="loginForm" :model="loginForm" status-icon :rules="formRules" class="login-form" autocomplete="on" label-position="left">
          <h3>登录</h3>
          <el-tabs v-model="activeName" stretch @tab-click="handleClick">
            <el-tab-pane label="密码登录" name="first">
              <el-form-item prop="userPhone">
                <el-input v-model="loginForm.userPhone" type="text" placeholder="请输入手机号" class="formInput" max="11"
                  prefix-icon="el-icon-mobile-phone" clearable></el-input>
              </el-form-item>
              <el-form-item prop="passWord">
                <el-input v-model="loginForm.passWord" type="password" placeholder="请输入密码"  class="formInput"
                  prefix-icon="el-icon-unlock" clearable show-password></el-input>
              </el-form-item>
              <el-form-item>
                <div class="formCheck">
                  <el-checkbox v-model="loginForm.checked">记住账号</el-checkbox>
                  <router-link to="resetLogin" class="link">忘记密码</router-link>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button :loading="loading" type="primary" @click="onLogin">立即登录</el-button>
              </el-form-item>
              <el-form-item>
                <div class="formTip">
                  <div>登录即同意:
                    <a href="//nprivacy.tticar.com/ttsd/privacy.html" target="_blank">《用户服务协议》</a>
                    和
                    <a href="//nprivacy.tticar.com/ttsd/privacyPolicy.html" target="_blank">《隐私权政策》</a>
                  </div>
                </div>
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
  // 引入数据格式验证
  // import ValidateName from '@/utils/validate'

  export default {
    name: 'Login',
    components: { Header, Footer },
    data() {
      // 校验规则 用户名等
      const validateName = (rule, value, callback) => {
        if (value.length < 11) {
          callback(new Error('手机号长度必须等于11位！'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('密码长度必须大于6位！'))
        } else {
          callback()
        }
      }
      return {
        activeName: 'first',
        loading: false, // 请求锁
        loginForm: {
          userPhone: '',
          passWord: '',
          checked: false,
        },
        formRules: {
          userPhone: [{trigger: 'blur', validator: validateName}],
          passWord: [{trigger: 'blur', validator: validatePassword}]
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      onLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true;
            console.log(this)
            this.$store.dispatch('user/loginInPassWord', this.loginForm).then(() => {
              this.loading = false;
            }).catch(() => {
              this.loading = false;
            })
            // this.$store.commit('increment')
            // this.$store.commit('increment', {count: 10})
          } else {
            console.log('登录错误!');
            this.loading = false;
            return false
          }
        })
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
          // 穿透组件样式 修改子组件样式[scoped]
          .formInput ::v-deep .el-input__inner {
            border-radius: unset;
          }
          .formCheck {
            display: flex;
            justify-content: space-between;
            padding: 0 2px;
            .link {
              color: #999;
            }
          }
          .el-button--primary {
            width: 100%;
            background-color: #4173ff;
            border-color: #4173ff;
            padding: 14px 12px;
            font-size: 16px;
            border-radius: 2px;
          }
          .formTip {
            font-size: 10px;
            a {
              color: #999;
            }
          }
        }
      }
    }
  }
</style>