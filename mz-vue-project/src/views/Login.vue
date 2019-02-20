<template>
  <div>
    <div class="topLogin">
      <h1>
        <img src="../assets/images/logo.png" alt>
      </h1>
    </div>
    <div class="form">
      <form action>
        <div class="form-group">
          <input type="tel" maxlength="13" placeholder="手机号" v-model="username" class="tel">
          <!-- <span class="yzm">获取验证码</span> -->
        </div>
        <div class="form-group">
          <input type="password" maxlength="13" placeholder="密码" v-model="password" class="tel">
        </div>

        <div class="submit login-btn" @click="handleLogin">
          <span>登录</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      axios.post('http://localhost:3000/user/login', {
        userName: this.username,
        password: this.password
      }).then((response) => {
        var res = response.data;
        if (res.code === 0) {
          // 成功：
          sessionStorage.setItem('nickname', res.data.nickName);
          // 跳转页面 - 这里是固定的跳转
          // this.$router.push('/card');
          // 跳转到用户具体想去的页面
          this.$router.replace({
            path: this.$route.query.redirect
          })
        } else {
          alert(res.msg);
        }
        console.log(res);
      })
    }
  }
}
</script>

<style lang="less">
  .topLogin{
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    display: flex;
    justify-content: center;
    h1 img{
      display: block;
      height: 60px;
    }
  }
  .form {
    width: 100%;
    height: 224px;
    .form-group {
      line-height: 55px;
      margin: 0 25px;
      position: relative;
      /* background: pink; */
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ededed;
      .tel {
        height: 15px;
        line-height: 15px;
        padding: 20px 0;
        width: 100%;
        font-size: 15px;
        color: #2c3e50;
        border: 0;
      }
      .yzm {
        /* position: absolute;
          right: 0px;
          top: 13px; */
        color: #bdc0c5;
        line-height: 30px;
        width: 90px;
        float: right;
        font-size: 13px;
        border-radius: 3px;
        cursor: pointer;
      }
    }
    .submit {
      line-height: 45px;
      font-size: 16px;
      margin: 70px 25px 0;
      border-radius: 3px;
      text-align: center;
      background-color: #ff5f16;
      height: 44px;
      color: #fff;
      border: none;
      span {
        opacity: 0.3;
      }
    }
  }
</style>
