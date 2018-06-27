<template>
  <div>
    <NavBar></NavBar>
    <md-content>
      <MenuBar></MenuBar>
      <md-card class="content">
      </md-card>
    </md-content>
  </div>
</template>

<script>
import NavBar from '../NavBar'
import MenuBar from './MenuBar'
// import request from '../../request'

export default {
  name: 'Message',
  components: {MenuBar, NavBar},
  data () {
    return {
      user: {}
    }
  }
}
</script>

<style scoped>
  .md-content {
    width: 900px;
    margin: 1rem auto;
    display: flex;
  }

  .content {
    flex: 1;
    padding: 1rem;
  }
</style>
