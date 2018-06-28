<template>
  <div>
    <NavBar></NavBar>
    <md-content>
      <MenuBar></MenuBar>
      <md-card class="content">
        <Project v-for="(project, i) in user.experience" :content="project" :key="i"/>
      </md-card>
    </md-content>
  </div>
</template>

<script>
import NavBar from '../NavBar'
import MenuBar from './MenuBar'
import Project from '../Index/Project'
import request from '../../request'

export default {
  name: 'ProfileProject',
  components: {MenuBar, NavBar, Project},
  data () {
    request.getUser(1111).then(
      res => {
        console.log(res)
        this.user = res
      }
    )

    return {
      user: {}
    }
  }
}
</script>

<style scoped>
  .md-content {
    width: 900px;
    margin: 1rem auto;
    display: flex;
  }

  .content {
    flex: 1;
    padding: 1rem;
  }
</style>
