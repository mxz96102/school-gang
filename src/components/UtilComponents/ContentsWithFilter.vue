<template>
  <div class="contents">
    <div v-if="type === 'talent'">
      <Talent v-for="(talent, i) in filtered" :content="talent" :key="i"></Talent>
    </div>
    <div v-else-if="type === 'project'">
      <Project v-for="(project, i) in filtered" :content="project" :key="i"></Project>
    </div>
    <Loading v-else />
  </div>
</template>
<script>
import Talent from '@/components/Index/Talent'
import Project from '@/components/Index/Project'
import Loading from '@/components/UtilComponents/Loading'

export default {
  name: 'ContentsWithFilter',
  components: {Loading, Project, Talent},
  props: {contents: Array, type: String, propFilter: String},
  data () {
    return {
      filter: this.propFilter
    }
  },
  computed: {
    filtered () {
      return this.contents.filter(c => c.title.includes(this.filter)).reduce((ret, c) => ret.concat(c.contents), [])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contents {
    width: 80%;
    margin: 3rem auto;
    text-align: center;
  }

  .md-tab {
    padding: 0 0;
    background: #e6ecf0;
  }

  .md-tab .md-tab {
    padding: 1rem;
  }
</style>
