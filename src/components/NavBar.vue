<template>
  <nav class="md-card">
    <router-link to="/"><img src="../assets/logo.png" alt="校园邦" class="logo"></router-link>
    <SearchBar :searched="searched" />
    <div class="user-info">
      <md-menu v-if="$root.user.img" md-direction="bottom-start">
        <md-avatar md-menu-trigger>
          <img :src="$root.user.img" alt="头像" class="avatar">
        </md-avatar>
        <md-menu-content>
          <md-menu-item to="/profile/info">{{$root.user.name}}</md-menu-item>
          <md-menu-item to="/publish" class="md-primary">发布项目</md-menu-item>
          <md-menu-item>退出登录</md-menu-item>
        </md-menu-content>
      </md-menu>
      <div v-else class="info">
        <md-button><router-link to="/login">登陆</router-link>/<router-link to="/register">注册</router-link></md-button>
      </div>
    </div>
  </nav>
</template>

<script>
import SearchBar from '@/components/UtilComponents/SearchBar'

export default {
  name: 'NavBar',
  props: {
    avatar: String,
    name: String,
    searched: {
      type: String,
      default: ''
    }
  },
  components: {SearchBar},
  data () {
    return {}
  }
}
</script>

<style scoped>
  nav {
    width: 100%;
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    box-sizing: border-box;
  }

  .user-info {
    width: 120px;
    text-align: center;
  }
</style>
