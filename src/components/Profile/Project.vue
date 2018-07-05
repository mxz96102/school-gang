<template>
  <div>
    <NavBar></NavBar>
    <md-content>
      <MenuBar></MenuBar>
      <md-card class="content">
        <Project v-for="(project, i) in projects" v-if="shouldShow(project)" :content="project" :key="i" />
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
  methods: {
    shouldShow (project) {
      switch (this.$route.params.type) {
        case 'join':
          return !project.isCreator && !project.finished
        case 'publish':
          return project.isCreator
        case 'complete':
          return project.finished
        default:
          return true
      }
    }
  },
  data () {
    request.getMyProject().then(res => {
      this.projects = res.map(project => {
        return {
          ...project,
          isCreator: project.from.uid === this.$root.user.uid,
          finished: project.ddl < Date.now()
        }
      })
    })

    return {
      projects: []
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
