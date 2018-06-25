<template>
  <div>
    <NavBar :search-project="true" :avatar="avatar" />
    <Contents :contents="projects" type="project" />
    <router-link to="/" class="black">back</router-link>
  </div>
</template>

<script>
import fetcher from '../request'
import Contents from '@/components/Index/Contents'
import NavBar from '@/components/NavBar'

export default {
  name: 'Projects',
  components: {NavBar, Contents},
  mounted () {
    fetcher
      .getAll()
      .then(data => {
        // this.projects = data.projects.categories
        this.projects = data.projects
      })
      .catch(e => {
      })
    fetcher.loginWithToken()
      .then(data => {
        this.avatar = data.img
      })
      .catch(e => {
      })
  },
  data () {
    return {
      projects: {},
      avatar: null
    }
  }
}
</script>

<style scoped>

</style>
