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
        <button @click="() => $router.push(`/projects/ff/dd`)">搜索</button>
      </div>
      <div class="label-box">
        <span></span>
      </div>
    </section>
    <section v-if="!searchProject">
      <div class="box"><label>
        <input v-model="talentFilter" type="text">
      </label>
        <button @click="() => $router.push(`/projects/ff/dd`)">搜索</button>
      </div>
    </section>
    <article>

    </article>
  </div>
</template>

<script>
export default {
  name: 'SearchBox',
  data () {
    return {
      projectFilter: '',
      talentFilter: '',
      // mode is project
      searchProject: true,
      projectBox: ['品牌设计', '游戏原画', '短视频制作', '网页设计', '游戏开发', '网页开发'],
      humanBox: []
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
