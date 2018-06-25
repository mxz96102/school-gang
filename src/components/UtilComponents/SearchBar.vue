<template>
  <div class="box"><label>
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>{{searchProject ? '项目' : '人才'}}</md-button>
      <md-menu-content>
        <md-menu-item @click="() => choose('项目')">项目</md-menu-item>
        <md-menu-item @click="() => choose('人才')">人才</md-menu-item>
      </md-menu-content>
    </md-menu>
    <input v-model="keyword" type="text">

  </label>
    <button @click="handleSearch">搜索</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    choose (type) {
      this.searchProject = type === '项目'
    },
    handleSearch () {
      const type = this.searchProject ? 'projects' : 'talents'
      this.$router.push(`/${type}/${this.keyword}`)
    }
  },
  data () {
    return {
      keyword: '',
      searchProject: true
    }
  }
}
</script>

<style scoped>

</style>
