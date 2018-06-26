<template>
  <div class="project-wrap">
    <NavBar></NavBar>
    <article v-if="project">
      <h1>{{project.name}}</h1>
      <ParentLink :category="project.parents.category" :subcategory="project.parents.subcategory" />
      <div class="top">
        <img :src="project.img" />
        <p class="detail">{{project.detail}}</p>
        <p class="from">{{project.from}}</p>
        <p class="ddl">{{project.ddl}}</p>
      </div>
      <div class="botton">
        <p class="needs-title"> 需求人员 </p>
        <p v-for="(need, i) in project.needs" class="needs" :key="i">{{need.name}} {{need.number ? need.number : '满了满了'}}</p>
      </div>
    </article>
    <div v-else>
      <Loading />
    </div>
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
      project: null
    }
  }
}
</script>

<style scoped>

</style>
