<template>
  <div class="search-box">
    <div class="tab">
      <div @click="() => searchProject = true" :class="searchProject ? 'select' : ''">搜索项目</div>
      <div @click="() => searchProject = false" :class="searchProject ? '' : 'select'">搜索人才</div>
    </div>
    <section v-if="searchProject">
      <div class="box"><label>
        <input v-model="projectFilter" type="text">
      </label>
        <button @click="handleSearch">搜索</button>
      </div>
      <div class="label-box">
        <span></span>
      </div>
    </section>
    <section v-if="!searchProject">
      <div class="box"><label>
        <input v-model="talentFilter" type="text">
      </label>
        <button @click="handleSearch">搜索</button>
      </div>
    </section>
    <article>

    </article>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  props: {
    projectCategories: Array.of(Object) || null,
    talentCategories: Array.of(Object) || null
  },
  methods: {
    handleSearch () {
      const searchSrc = this.searchProject ? this.projectCategories : this.talentCategories
      const keyword = this.searchProject ? this.projectFilter : this.talentFilter
      const routeGenerator = (cate, sub) => `/${this.searchProject ? 'projects' : 'talents'}/${cate}/${sub}`
      const filterToArray = _cate => {
        return _cate.map(c => c.title)
          .filter(t => t.includes(keyword))
          .map(t => ({
            text: `${t} > all`,
            link: routeGenerator(t, 'all')
          }))
      }
      // this.$router.push(routeGenerator.apply(this, (cate => )(searchSrc)))
      console.log(routeGenerator.apply(this, (
        cate => {
          return filterToArray(cate).concat(filterToArray(cate.subcategories))
        }
      )(searchSrc)))
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
<style scoped>
  .search-box {
    width: 80%;
    margin: 3rem auto;
    background: white;
  }

  .search-box .tab {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    background: #726dd1;
    color: white;
    font-weight: bolder;
    font-size: 1.5rem;
  }

  .search-box .tab div {
    width: 50%;
    text-align: center;
    height: 3rem;
    line-height: 3rem;
  }

  .search-box .tab div.select {
    color: #060c7a;
    background: white;
  }

  .search-box section {
    min-height: 10rem;
    padding: 3rem;
  }

  .search-box section .box {
    text-align: center;
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
  }

  .search-box section .box input {
    width: 25rem;
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
</style>
