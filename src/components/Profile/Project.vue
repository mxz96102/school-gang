<template>
  <div>
    <NavBar></NavBar>
    <md-content>
      <MenuBar></MenuBar>

      <md-card v-for="(project, i) in projects" :key="i" v-if="shouldShow(project)" class="content">
        <md-card-area md-inset>
          <md-card-media md-ratio="16:9">
            <img :src="project.img" alt="Project">
          </md-card-media>

          <md-card-header>
            <router-link :to="'/project/' + project.uid" class="md-title">
              <h2>{{project.name}}</h2>
            </router-link>
            <div class="md-subhead">
              <ParentLink class="cate" :category="project.parents.category"
                          :subcategory="project.parents.subcategory" />
            </div>
          </md-card-header>

          <md-card-content>
            {{project.detail}}
          </md-card-content>
        </md-card-area>

        <md-card-content>
          <h3 class="md-subheading">成员</h3>
          <div class="card-reservation">
            <div class="md-button-group">
              <md-button v-for="(member, i) in project.members" :key="i"
                         :class="member.user_id === project.from.uid ? 'md-primary' : 'md-accent'"
                         :disabled="member.user_id === project.from.uid"
                         @click="() => deleteMember(member, project)">
                {{member.user_name}}
              </md-button>
            </div>
          </div>
        </md-card-content>

      </md-card>
      <md-card v-if="projects.filter(p => shouldShow(p)).length === 0" class="content">
        <h2>这里什么也没有</h2>
      </md-card>
    </md-content>
    <md-dialog-confirm
      :md-active.sync="active"
      md-title="删除"
      :md-content="`从${current.project.name}中删除${current.member.user_name}`"
      md-confirm-text="删除"
      md-cancel-text="取消"
      @md-cancel="() => cancel()"
      @md-confirm="() => doDelete(current.project.uid, current.member.user_id)" />
  </div>
</template>

<script>
import NavBar from '../NavBar'
import MenuBar from './MenuBar'
import Project from '../Index/Project'
import request from '../../request'
import ParentLink from '@/components/UtilComponents/ParentLink'

export default {
  name: 'ProfileProject',
  components: {ParentLink, MenuBar, NavBar, Project},
  methods: {
    shouldShow (project) {
      switch (this.$route.params.type) {
        case 'join':
          return !project.isCreator
        case 'publish':
          return project.isCreator
        case 'complete':
          return project.finished
        default:
          return true
      }
    },
    deleteMember (member, project) {
      this.active = true
      this.current = {
        member,
        project
      }
    },
    doDelete (memberID, projectID) {
      this.active = false
      request.deleteMember(memberID, projectID)
        .then(() => this.update())
        .catch(e => console.error(e))
    },
    cancel () {
      this.current = {project: {}, member: {}}
      this.active = false
    },
    update () {
      request.getMyProject().then(res => {
        this.projects = res.map(project => {
          return {
            ...project,
            isCreator: project.from.uid === this.$root.user.uid,
            finished: project.ddl < Date.now()
          }
        })
      })
    }
  },
  data () {
    this.update()

    return {
      projects: [],
      active: false,
      current: {project: {}, member: {}}
    }
  }
}
</script>

<style scoped>
  .md-content {
    width: 80%;
    min-width: 900px;
    margin: 1rem auto;
    display: flex;
  }

  .content {
    padding: 1rem;
    width: 25%;
  }
</style>
