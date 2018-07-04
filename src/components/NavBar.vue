<template>
  <nav class="md-card">
    <router-link to="/"><img src="../assets/logo.png" alt="校园邦" class="logo"></router-link>
    <SearchBar :searched="searched" />
    <UserInfo />
  </nav>
</template>

<script>
import SearchBar from '@/components/UtilComponents/SearchBar'
import UserInfo from '@/components/UtilComponents/UserInfo'

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
  components: {UserInfo, SearchBar},
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
</style>
