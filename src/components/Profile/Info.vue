<template>
  <div>
    <NavBar></NavBar>
    <md-content>
      <MenuBar></MenuBar>
      <md-card class="content">
        <md-card-header>
          <md-card-header-text>
            <h2>{{user.name}}, 你好</h2>
            <md-button class="md-primary md-raised">修改用户名</md-button>
          </md-card-header-text>
          <md-card-media>
            <img :src="user.img" alt="">
          </md-card-media>
        </md-card-header>
        <md-card-content>
          <h2>个人能力</h2>
          <md-chips>
            <md-chip v-for="(skill, i) in user.skills" :key="i" class="md-primary" md-deletable>{{skill}}</md-chip>
            <md-chip md-clickable>增加技能</md-chip>
          </md-chips>
          <h2>联系方式</h2>
          <md-button class="md-primary md-raised">修改联系方式</md-button>
          <p>QQ: 12121212</p>
          <p>微信：3242352354</p>
          <p>电话：1332323232</p>
        </md-card-content>
      </md-card>
    </md-content>
  </div>
</template>

<script>
import NavBar from '../NavBar'
import MenuBar from './MenuBar'
import request from '../../request'

export default {
  name: 'Info',
  components: {MenuBar, NavBar},
  data () {
    let __this = this

    request.getUser(1111).then(
      res => {
        console.log(res)
        __this.user = res
      }
    )

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
