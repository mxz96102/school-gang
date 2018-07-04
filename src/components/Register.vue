<template>
  <div class="register">
    <div class="banner">
      <img src="../assets/login-banner.jpg" alt="">
    </div>
    <div class="panel">
      <router-link to="/"><img src="../assets/logo.png" alt="校园邦" class="logo"></router-link>
      <h3>注册</h3>
      <form action="">
        <p v-if="msg">{{msg}}</p>
        <input v-model="username" type="text" placeholder="用户名"><br>
        <input v-model="password" type="password" placeholder="密码"><br>
        <p>已经有账号？去
          <router-link to="Login">登录</router-link>
        </p>
        <input @click="register" type="submit" value="注册">
      </form>
    </div>
  </div>
</template>

<script>
import request from '../request'

export default {
  name: 'register',
  methods: {
    register (e) {
      e.preventDefault()
      request.register(this.username, this.password).then(res => {
        this.msg = '获取状态...'
        request.getProfile().then(({data}) => {
          this.$root.user = data
          this.$router.push('/')
        }).catch(() => {
          this.msg = '获取失败，请尝试重新登录...'
        })
      }).catch(e => {
        console.error(e)
        this.msg = '登录失败，请检查用户名密码尝试重新登录...'
      })
    }
  },
  data () {
    return {
      msg: '',
      username: '',
      password: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register {
    width: 1000px;
    height: 500px;
    text-align: center;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .register .banner {
    width: 625px;
    height: 100%;
    float: left;
    background: white;
    overflow: hidden;
  }

  .register .banner img {
    width: 625px;
    height: auto;
  }

  .register .panel {
    width: 375px;
    height: 100%;
    float: left;
    background: white;
    text-align: center;
    padding: 1rem;
    box-sizing: border-box;
  }

  .register .panel input {
    width: 80%;
    border: 2px solid #726dd1;
    font-size: 1rem;
    text-align: center;
    margin: 1rem;
    line-height: 1.5rem;
  }

  .register .panel input[type='submit'] {
    background: #57d2f7;
    color: white;
    padding: 5px;
    font-weight: bolder;
    cursor: pointer;
  }

  .register .panel p {
    text-align: right;
    margin: 0;
    padding-right: 10%;
  }

  .register .panel p a {
    font-weight: bolder;
    text-decoration: none;
    color: #726dd1;
  }
</style>
