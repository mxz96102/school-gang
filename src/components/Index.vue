<template>
  <div class="index">
    <nav>
      <img src="../assets/logo.png" alt="校园邦" class="logo">
      <div class="flex"></div>
      <div class="info">
        <router-link to="login">登陆</router-link>
        <router-link to="register">注册</router-link>
        <router-link to="" class="publish">发布项目</router-link>
      </div>
    </nav>
    <SearchBox></SearchBox>
  </div>
</template>

<script>
import SearchBox from './SearchBox'

export default {
  name: 'Index',
  components: {SearchBox},
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index nav {
    width: 100%;
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    box-sizing: border-box;
  }

  .index .info .publish {
    background: #726dd1;
    color: white;
    padding: 5px 8px;
    text-decoration: none;
  }
</style>
