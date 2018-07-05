<template>
  <div class="index">
    <NavBar />
    <Contents v-bind="projects" type="project" />
    <ContentsWithFilter :contents="talents" type="talent"  />
  </div>
</template>

<script>
import NavBar from './NavBar'
import Contents from './Index/Contents'
import fetcher from '../request'
import UserInfo from '@/components/UtilComponents/UserInfo'
import ContentsWithFilter from '@/components/UtilComponents/ContentsWithFilter'

export default {
  name: 'Index',
  components: {ContentsWithFilter, UserInfo, NavBar, Contents},
  data () {
    // const data = fetcher.getAll(true).then()
    return {
      isMounted: false,
      msg: 'loading',
      talents: [],
      projects: {}
    }
  },
  mounted () {
    fetcher.getAll()
      .then(data => {
        this.talents = data.talents
        this.projects = data.projects
      })
      .catch(e => {
        console.error(e)
        this.msg = e.toString()
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index nav {
    width: 100%;
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    box-sizing: border-box;
  }
</style>
