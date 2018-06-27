<template>
  <div class="contents">
    <p>
      <span v-for="(content, i) in contents" :class="cateShown.includes(content.title) ? 'included' : 'not-included'"
            @click="() => handleFilterChange('cate', content.title)" :key="i+'cate'">{{content.title}}</span>
    </p>
    <p v-if="type === 'project'">
      <span v-for="(content, i) in needs" :class="needsShown.includes(content) ? 'included' : 'not-included'"
            @click="() => handleFilterChange('needs', content)" :key="i+'needs'">{{content}}</span>
    </p>
    <div v-if="!flattenedContents.length">这里什么都没有</div>
    <div v-if="type === 'talent'">
      <Talent v-for="(talent, i) in flattenedContents" :content="talent" :key="i"></Talent>
    </div>
    <div v-else-if="type === 'project'">
      <Project v-for="(project, i) in flattenedContents" :content="project" :key="i"></Project>
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
  methods: {
    handleFilterChange (type, value) {
      const toChange = {
        cate: this.cateShown,
        needs: this.needsShown
      }[type]
      if (toChange.includes(value)) {
        toChange.splice(toChange.indexOf(value), 1)
      } else {
        toChange.push(value)
      }
    }
  },
  data () {
    return {
      cateShown: this.contents.map(c => c.title).filter(title => title.includes(this.propFilter)),
      needs: this.type === 'project'
        ? Array.from(new Set(
          this.contents
            .reduce((acc, c) => acc.concat(c.contents), [])
            .reduce((a, c) => a.concat(
              c.needs
                .map(n => n.name)
            ), [])
        ))
        : [],
      needsShown: this.type === 'project'
        ? Array.from(new Set(
          this.contents
            .reduce((acc, c) => acc.concat(c.contents), [])
            .reduce((a, c) => a.concat(
              c.needs
                .map(n => n.name)
            ), [])
        ))
        : []
    }
  },
  computed: {
    flattenedContents () {
      return this.contents
        .filter(c => this.cateShown.includes(c.title))
        .reduce((acc, c) => acc.concat(c.contents), [])
        // .filter(c => this.ddlShown.includes(c.ddl))
        .filter(c => c.needs
          .filter(n => n.number > 0)
          .map(n => n.name)
          .reduce((a, v) => a || this.needsShown.includes(v), false))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    padding: .3em;
    cursor: pointer;
  }

  .included {
    color: cornflowerblue;
  }

  .not-included {
    color: chocolate;
  }

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
