<template>
  <div>
    <NavBar></NavBar>
    <md-content>
      <MenuBar></MenuBar>
      <md-card class="content">
        <md-list class="md-triple-line">
          <md-list-item>
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/1" alt="People">
            </md-avatar>

            <div class="md-list-item-text">
              <span>Ali Connors</span>
              <p>2018.2.5 申请加入 xxxxx 项目</p>
              <div class="button-group"><md-button class="md-primary md-raised">
                同意
              </md-button>
              <md-button class="md-accent md-raised">
                拒绝
              </md-button></div>
            </div>
            <md-button class="md-list-action">查看用户信息</md-button>
          </md-list-item>
        </md-list>
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

  .button-group .md-button {
    width: 200px;
  }
</style>
