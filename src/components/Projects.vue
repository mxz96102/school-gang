<template>
  <div>
    <NavBar :search-project="true" :avatar="avatar" :name="name" :searched="$route.params.keyword"/>
    <ContentsWithFilter v-if="projects.length > 0" :contents="projects" type="project"
                        :prop-filter="$route.params.keyword ? $route.params.keyword : ''" />
    <router-link to="/" class="black">back</router-link>
  </div>
</template>

<script>
import fetcher from '../request'
import Contents from '@/components/Index/Contents'
import NavBar from '@/components/NavBar'
import ContentsWithFilter from '@/components/UtilComponents/ContentsWithFilter'

export default {
  name: 'Projects',
  components: {ContentsWithFilter, NavBar, Contents},
  mounted () {
    fetcher
      .getAll()
      .then(data => {
        // this.projects = data.projects.categories
        this.projects = data.projects.categories.reduce((ret, cate) => ret.concat(cate.subcategories), [])
      })
      .catch(e => {
      })
    fetcher.loginWithToken()
      .then(data => {
        this.avatar = data.img
        this.name = data.name
      })
      .catch(e => {
      })
  },
  data () {
    return {
      projects: [],
      avatar: null,
      name: null
    }
  }
}
</script>

<style scoped>

</style>
