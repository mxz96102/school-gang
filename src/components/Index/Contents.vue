<template>
  <div class="contents md-card">
    <div class="content-header">
      <h2>
        {{title}}
        <md-button class="more-button">
          <router-link :to="more || ''">更多</router-link>
        </md-button>
      </h2>
    </div>
    <div>
      <md-tabs class="md-primary" ref="outerTabs" :md-active-tab="type + '-0-outer'">
        <md-tab v-for="(cate, i) in categories" :id="`${type}-${i}-outer`" :key="i"
                :md-label="cate.title">
          <md-tabs class="md-primary">
            <md-tab class="tab" v-for="(sub, i) in cate.subcategories" :key="i" :md-label="sub.title">
              <Talent v-if="type === 'talent'" v-for="(content, i) in sub.contents.slice(0,3)" :content="content" :key="i"/>
              <Project v-if="type !== 'talent'" v-for="(content, i) in sub.contents.slice(0,3)" :content="content" :key="i"/>
              <p v-if="sub.contents.length === 0">Nothing Here</p>
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
  props: {
    categories: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      default: () => ''
    },
    more: {
      type: String,
      default: () => ''
    }
  },
  mounted () {
    this.active = 0
  },
  data () {
    return {
      outerTabs: null,
      active: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .contents {
    width: 80%;
    margin: 3rem auto;
  }

  .md-tab {
    padding: 0 0;
    background: #e6ecf0;
  }

  .md-tab .md-tab {
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
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
  .tab {
    height: 500px;
  }
</style>
