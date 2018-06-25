<template>
  <div class="index">
    <nav>
      <img src="../assets/logo.png" alt="校园邦" class="logo">
      <div class="flex"></div>
      <div class="info">
        <router-link to="login">登陆</router-link>
        <router-link to="register">注册</router-link>
        <router-link to="" class="publish">发布项目</router-link>
      </div>
    </nav>
    <SearchBox :project-categories="projects" :talent-categories="talents" />
    <Contents :contents="talents" type="talent" />
    <Contents :contents="projects" type="project" />
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
        this.talents = data.talents
        this.projects = data.projects
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

  .index .info .publish {
    background: #726dd1;
    color: white;
    padding: 5px 8px;
    text-decoration: none;
  }
</style>
