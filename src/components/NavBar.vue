<template>
  <div>
    <img src="../assets/logo.png" alt="校园邦" class="logo">
    <SearchBar />
    <img :src="avatar" alt="头像" class="avatar">
  </div>
</template>

<script>
import SearchBar from '@/components/UtilComponents/SearchBar'

export default {
  name: 'NavBar',
  props: {
    avatar: String
  },
  components: {SearchBar},
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
