<template>
  <div class="contents">
    <div v-if="type === 'talent'">
    </div>
    <div v-else-if="type === 'project'">
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
  props: {contents: Array, type: String, filter: String},
  data () {
    return {
      outerTabs: null,
      active: null,
      categories: this.contents ? this.contents['categories'] : []
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
