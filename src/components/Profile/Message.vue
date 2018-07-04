<template>
  <div>
    <NavBar></NavBar>
    <md-content>
      <MenuBar></MenuBar>
      <md-card class="content">
        <md-list class="md-triple-line">
          <md-list-item v-for="(request, i) in requests" :key="i">
            <md-avatar class="md-large">
              <img :src="request.user.img" alt="People">
            </md-avatar>
            <div class="md-list-item-text">
              <span>{{request.user.name}}</span>
              <p>申请加入 {{request.project_name}} 项目</p>
              <div class="button-group">
                <md-button @click="() => accept(request.project_id, request.id)" class="md-primary md-raised">
                  同意
                </md-button>
                <md-button @click="() => reject(request.project_id, request.id)" class="md-accent md-raised">
                  拒绝
                </md-button>
              </div>
            </div>
            <md-button @click="() => toDetail(request.user)" class="md-list-action">查看用户信息</md-button>
          </md-list-item>
        </md-list>
      </md-card>
    </md-content>
    <TalentDetail :showDetail="showDialog" :content="user" />
  </div>
</template>

<script>
import NavBar from '../NavBar'
import MenuBar from './MenuBar'
import request from '../../request'
import TalentDetail from '@/components/UtilComponents/TalentDetail'

export default {
  name: 'Message',
  components: {TalentDetail, MenuBar, NavBar},
  mounted () {
    request.getRequest()
      .then(data => {
        this.requests = data
      })
      .catch(e => {
        console.error(e)
      })
  },
  methods: {
    accept (pid, rid) {
      request.acceptRequest(pid, rid)
        .then(() => {
          this.requests = this.requests.filter(r => r.id !== rid)
        })
        .catch(e => {
          console.error(e)
        })
    },
    reject (pid, rid) {
      request.rejectRequest(pid, rid)
        .then(() => {
          this.requests = this.requests.filter(r => r.id !== rid)
        })
        .catch(e => {
          console.error(e)
        })
    },
    toDetail (user) {
      this.user = user
      this.showDialog = true
    }
  },
  data () {
    return {
      user: {
        experience: [],
        skills: []
      },
      showDialog: false,
      requests: []
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
