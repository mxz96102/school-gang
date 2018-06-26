<template>
  <div class="index">
    <nav class="md-card">
      <img src="../assets/logo.png" alt="校园邦" class="logo">
      <div class="flex"></div>
      <div class="info">
        <md-button><router-link to="login">登陆</router-link></md-button>
        <md-button><router-link to="register">注册</router-link></md-button>
        <md-button class="md-primary"><router-link to="">发布项目</router-link></md-button>
      </div>
    </nav>
    <SearchBox :project-categories="projects" :talent-categories="talents" />
    <Contents v-bind="talents" type="talent" />
    <Contents v-bind="projects" type="project" />
  </div>
</template>

<script>
import SearchBox from './Index/SearchBox'
import Contents from './Index/Contents'
import fetcher from '../request'

export default {
  name: 'Index',
  components: {SearchBox, Contents},
  data () {
    // const data = fetcher.getAll(true).then()
    return {
      isMounted: false,
      msg: 'loading',
      talents: null,
      projects: null
    }
  },
  mounted () {
    fetcher.getAll()
      .then(data => {
        this.talents = {
          ...data.talents,
          more: '/talents/'
        }
        this.projects = {
          ...data.projects,
          more: '/projects/'
        }
      })
      .catch(e => {
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
