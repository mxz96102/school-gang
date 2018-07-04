<template>
  <md-menu v-if="$root.user.img" md-direction="bottom-start">
    <md-avatar md-menu-trigger>
      <img :src="$root.user.img" alt="头像" class="avatar">
    </md-avatar>
    <md-menu-content>
      <md-menu-item to="/profile/info">{{$root.user.name}}</md-menu-item>
      <md-menu-item to="/publish" class="md-primary">发布项目</md-menu-item>
      <md-menu-item @click="() => logout()">退出登录</md-menu-item>
    </md-menu-content>
  </md-menu>
  <div v-else class="info">
    <md-button>
      <router-link to="/login">登录</router-link>
    </md-button>
    <md-button>
      <router-link to="/register">注册</router-link>
    </md-button>
  </div>
</template>

<script>
import { removeData } from '@/request/localstorage'

export default {
  name: 'UserInfo',
  methods: {
    logout () {
      removeData()
      this.$root.user = {}
      this.$router.push('/')
    }
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
  .info {
    display: flex;
  }
</style>
