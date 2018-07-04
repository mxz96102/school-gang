<template>
  <div class="project-wrap">
    <NavBar></NavBar>
    <md-card class="project" v-if="project">
      <md-card-header>
        <md-card-header-text>
          <h2>{{project.name}}</h2>
        </md-card-header-text>
        <md-card-media>
          <ParentLink :category="project.parents.category" :subcategory="project.parents.subcategory" />
        </md-card-media>
      </md-card-header>
      <md-card-media>
        <img :src="project.img" />
      </md-card-media>
      <md-card-content>
        <h4>项目简介</h4>
        <p class="detail">{{project.detail}}</p>
        <h4>发布人</h4>
        <p class="from">{{project.from.name}}</p>
        <h4>截止日期</h4>
        <p class="ddl">{{project.ddl}}</p>
        <h4 class="needs-title"> 需求人员 </h4>
        <md-list>
          <md-list-item v-for="(need, i) in project.needs" @click="apply(need)" :key="i">
            <span class="md-list-item-text">{{need.name}}</span>
            <md-badge class="md-primary" :md-content="need.number || '满'" />
          </md-list-item>
        </md-list>
      </md-card-content>
    </md-card>
    <div v-else>
      <Loading />
    </div>
    <md-dialog-confirm
      v-if="current.number"
      :md-active.sync="active"
      :md-title="'确认申请：' + current.name"
      md-content="请确认是否申请当前岗位"
      md-confirm-text="申请"
      md-cancel-text="取消"
      @md-cancel="() => cancel()"
      @md-confirm="() => applyProject(current.uid)" />
  </div>
</template>

<script>
import fetcher from '../request'
import Loading from '@/components/UtilComponents/Loading'
import ParentLink from '@/components/UtilComponents/ParentLink'
import NavBar from '@/components/NavBar'

export default {
  name: 'ProjectDetail',
  components: {NavBar, ParentLink, Loading},
  mounted () {
    fetcher.getProjectDetail(this.uid).then(data => {
      this.project = data
    }).catch(e => {
      console.error(e)
      this.$router.push('error/404')
    })
  },
  data () {
    return {
      uid: this.$route.params.projectID,
      project: null,
      current: {},
      active: false
    }
  },
  methods: {
    apply (c) {
      this.active = true
      this.current = c
    },
    cancel () {
      this.current = {}
      this.active = false
    },
    applyProject (id) {
      this.active = false
      fetcher.requestProject(this.project.uid, id)
    }
  }
}
</script>

<style scoped>
  .project.md-card {
    width: 320px;
    margin: 3rem auto;
  }
</style>
