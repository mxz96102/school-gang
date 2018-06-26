<template>
  <div class="box">
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger>{{searchProject ? '项目' : '人才'}}</md-button>
      <md-menu-content>
        <md-menu-item @click="() => choose('项目')">项目</md-menu-item>
        <md-menu-item @click="() => choose('人才')">人才</md-menu-item>
      </md-menu-content>
    </md-menu>
    <label>
    <input v-model="keyword" type="text">
    </label>
    <md-button @click="handleSearch">搜索</md-button>
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
  .box {
    text-align: center;
    display: flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

 .box input {
    height: 3rem;
    border: #060c7a solid 2px;
    box-sizing: border-box;
    font-size: 1.2rem;
    padding: 0 1.2rem;
  }

 .box button {
    border: #060c7a solid 2px;
    background: #060c7a;
    color: white;
    height: 3rem;
    padding: 0 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    margin: 0;
  }
</style>
