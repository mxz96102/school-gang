<template>
  <div class="contents">
    <h2>{{contents && contents.title}}</h2>
    <a v-bind:href="contents && contents.more">More</a>
    <div>
      <md-tabs ref="outerTabs" :md-active-tab="type + '-0-outer'">
        <md-tab v-for="(cate, i) in this.categories" :id="`${type}-${i}-outer`" :key="i"
                :md-label="cate.title">
          <md-tabs>
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
    const dirtyVUE = this.$refs.outerTabs.$children[0].$children[0]
    const dirtyDOM = dirtyVUE ? dirtyVUE.$el.children[0].children[0].children[0] : null
    dirtyDOM && dirtyDOM.click()
  },
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
</style>
