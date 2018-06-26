<template>
  <div class="contents md-card">
    <div class="content-header">
      <h2>
        {{contents && contents.title}}
        <md-button class="more-button"><router-link :to="contents && contents.more || ''">更多</router-link></md-button>
      </h2>
    </div>
    <div>
      <md-tabs class="md-primary" ref="outerTabs" :md-active-tab="type + '-0-outer'">
        <md-tab v-for="(cate, i) in this.categories" :id="`${type}-${i}-outer`" :key="i"
                :md-label="cate.title">
          <md-tabs class="md-primary">
            <md-tab v-for="(sub, i) in cate.subcategories" :key="i" :md-label="sub.title">
              <Talent v-if="type === 'talent'" v-for="(content, i) in sub.contents" :content="content" :key="i" />
              <Project v-if="type !== 'talent'" v-for="(content, i) in sub.contents" :content="content" :key="i" />
            </md-tab>
          </md-tabs>
        </md-tab>
      </md-tabs>
    </div>
  </div>
</template>
<script>
import Talent from '@/components/Index/Talent'
import Project from '@/components/Index/Project'

export default {
  name: 'Contents',
  components: {Project, Talent},
  props: {contents: Object, type: String},
  updated () {
    this.categories = this.contents ? this.contents['categories'] : []
    this.active = 0
    this.dirtyClick()
  },
  mounted () {
    this.dirtyClick()
  },
  data () {
    return {
      outerTabs: null,
      active: null,
      categories: this.contents ? this.contents['categories'] : []
    }
  },
  methods: {
    dirtyClick () {
      const dirtyVUE = this.$refs.outerTabs.$children[0].$children[0]
      const dirtyDOM = dirtyVUE ? dirtyVUE.$el.children[0].children[0].children[0] : null
      dirtyDOM && dirtyDOM.click()
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

  h2 {
    text-align: left;
    margin: 0;
  }

  .more-button {
  }

  .content-header {
    width: 100%;
    padding: 0.5rem 1.5rem;
    height: 4rem;
    line-height: 3rem;
    box-sizing: border-box;
  }
</style>
