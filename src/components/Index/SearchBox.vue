<template>
  <div class="search-box md-card">
    <md-tabs  class="tab md-primary">
      <md-tab md-label="搜索项目" @click="() => changeSearchProject(true)" :class="searchProject ? 'select' : ''">
        <section>
          <div class="box"><label>
            <input v-model="projectFilter" type="text">
          </label>
            <button @click="handleSearch">搜索</button>
          </div>
          <div class="label-box">
            <span></span>
          </div>
        </section>
      </md-tab>
      <md-tab md-label="搜索人才" @click="() => changeSearchProject(false)" :class="searchProject ? '' : 'select'">
        <section>
          <div class="box"><label>
            <input v-model="talentFilter" type="text">
          </label>
            <button @click="() => handleSearch()">搜索</button>
          </div>
        </section>
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  methods: {
    changeSearchProject (to) {
      this.searchProject = to
    },
    handleSearch () {
      const type = this.searchProject ? 'projects' : 'talents'
      const keyword = this.searchProject ? this.projectFilter : this.talentFilter
      this.$router.push(`/${type}/${keyword}`)
    }
  },
  data () {
    return {
      projectFilter: '',
      talentFilter: '',
      // mode is project
      searchProject: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .search-box {
    width: 80%;
    margin: 3rem auto;
    background: white;
  }

  .search-box section {
    min-height: 10rem;
    padding: 3rem;
    box-sizing: border-box;
  }

  .search-box section .box {
    text-align: center;
    display: flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  }

  .search-box section .box input {
    height: 3rem;
    border: #060c7a solid 2px;
    box-sizing: border-box;
    font-size: 1.2rem;
    padding: 0 1.2rem;
  }

  .search-box section .box button {
    border: #060c7a solid 2px;
    background: #060c7a;
    color: white;
    height: 3rem;
    padding: 0 1rem;
    font-size: 1.2rem;
    cursor: pointer;
  }

  .search-box .md-tab {
    padding: 0;
  }

  .search-box .tab .md-tabs-content {
    width: 100%;
  }
</style>
