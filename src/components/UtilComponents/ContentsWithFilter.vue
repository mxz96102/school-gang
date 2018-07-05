<template>
  <div class="contents md-card">
    <div class="content-header">
      <p v-if="type === 'project'">
        <span>项目类别:</span>
        <span @click="() => this.needsShown=[]"
              :class="this.needsShown.length===0? 'included' : 'not-included'">all</span>
        <span v-for="(content, i) in cates" :class="cateShown.includes(content) ? 'included' : 'not-included'"
              @click="() => handleFilterChange('cate', content)" :key="i+'cate'">{{content}}</span>
      </p>
      <p>
        <span>人员技能:</span>
        <span @click="() => this.needsShown=[]"
              :class="this.needsShown.length===0? 'included' : 'not-included'">all</span>
        <span v-for="(content, i) in needs" :class="needsShown.includes(content) ? 'included' : 'not-included'"
              @click="() => handleFilterChange('needs', content)" :key="i+'needs'">{{content}}</span>
      </p>
    </div>
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
import fetcher from '../../request'

export default {
  name: 'ContentsWithFilter',
  components: { Loading, Project, Talent },
  props: { contents: Array, type: String, propFilter: String },
  mounted () {
    fetcher
      .getAllSkills()
      .then(data => {
        const _needs = data
        this.needs = _needs.map(v => v.name)
        this.needsShown = this.propFilter
          ? _needs.map(v => v.name).filter(n => n.includes(this.propFilter))
          : []
      })
      .catch(e => {})
  },
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
      needs: [],
      cates: [
        'logo 设计',
        '游戏设计',
        '网页设计',
        '短视频制作',
        '文件资料翻译',
        '微信公众号开发',
        '游戏开发',
        'android 软件开发',
        '网页开发',
        'ios 软件开发'
      ],
      needsShown: [],
      cateShown:
        this.type === 'project'
          ? this.propFilter
            ? this.contents
              .map(c => c.title)
              .filter(title => title.includes(this.propFilter))
            : []
          : []
    }
  },
  computed: {
    flattenedContents () {
      return (
        this.contents
          .filter(
            c =>
              this.type !== 'project'
                ? true
                : this.cateShown.length === 0 ||
                  this.cateShown.includes(c.title)
          )
          .reduce(
            (acc, c) =>
              this.type !== 'project' ? acc.concat(c) : acc.concat(c.contents),
            []
          )
          // .filter(c => this.ddlShown.includes(c.ddl))
          .filter(
            c =>
              this.needsShown.length === 0 ||
              (this.type !== 'project'
                ? c.skills.reduce((a, v) => a || this.needsShown.includes(v.name), false)
                : c.needs
                  .filter(n => n.number > 0)
                  .map(n => n.name)
                  .reduce((a, v) => a || this.needsShown.includes(v), false))
          )
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
  padding: 0.3em;
  cursor: pointer;
  margin: 0.5rem;
}

.included {
  background-color: cornflowerblue;
  color: white;
}

.content-header {
  width: 100%;
  padding: 0.5rem 1.5rem;
  /* height: 4rem; */
  line-height: 3rem;
  box-sizing: border-box;
}

.contents {
  width: 80%;
  min-height: 800px;
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
