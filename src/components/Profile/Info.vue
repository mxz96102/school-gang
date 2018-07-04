<template>
  <div>
    <NavBar></NavBar>
    <md-content>
      <MenuBar></MenuBar>
      <md-card class="content">
        <md-card-header>
          <md-card-header-text>
            <h2>{{user.name}}, 你好</h2>
            <md-button @click="() => nameActive = true" class="md-primary md-raised">修改用户名</md-button>
            <md-button @click="() => avatarActive = true" class="md-primary md-raised">上传头像</md-button>
          </md-card-header-text>
          <md-card-media>
            <img :src="user.img" alt="">
          </md-card-media>
        </md-card-header>
        <md-card-content>
          <h2>个人介绍</h2>
          <md-button @click="() => introActive = true" class="md-primary md-raised">修改自我介绍</md-button>
          <p>{{user.intro}}</p>
          <h2>个人能力</h2>
          <div>
            <p v-if="this.skillChanging">正在应用skill变更</p>
            <md-chip
              @click="() => handleSkillChange(skill)"
              v-for="(skill, i) in skills"
              :key="i"
              :class="user.skills.map(v => v.name).includes(skill.name) ? 'md-primary' : ''">{{skill.name}}
            </md-chip>
          </div>
          <h2>联系方式</h2>
          <md-button @click="() => contactActive = true" class="md-primary md-raised">修改联系方式</md-button>
          <p>QQ: {{user.qq}}</p>
          <p>微信：{{user.wx}}</p>
          <p>电话：{{user.phone}}</p>
        </md-card-content>
        <md-card-actions>
          <md-button @click="() => updateUser()">保存修改</md-button>
        </md-card-actions>
        <md-dialog-prompt
          :md-active.sync="nameActive"
          v-model="user.name"
          md-title="修改用户名"
          md-input-maxlength="30"
          md-input-placeholder="请输入新的名字"
          md-confirm-text="确认"
          md-cancel-text="取消" />
        <md-dialog :md-active.sync="avatarActive">
          <md-dialog-title>上传头像</md-dialog-title>
          <md-dialog-content>
            <md-field>
              <md-file placeholder="点击上传图片"></md-file>
            </md-field>
            <md-dialog-actions>
              <md-button class="md-primary" @click="avatarActive = false">取消</md-button>
              <md-button class="md-primary" @click="avatarActive = false">保存</md-button>
            </md-dialog-actions>
          </md-dialog-content>
        </md-dialog>
        <md-dialog :md-active.sync="introActive">
          <md-dialog-title>修改个人资料</md-dialog-title>
          <md-dialog-content>
            <md-field>
              <md-textarea v-model="user.intro"></md-textarea>
            </md-field>
            <md-dialog-actions>
              <md-button class="md-primary md-mini" @click="introActive = false">保存</md-button>
            </md-dialog-actions>
          </md-dialog-content>
        </md-dialog>
        <md-dialog :md-active.sync="contactActive">
          <md-dialog-title>上传头像</md-dialog-title>
          <md-dialog-content>
            <md-field>
              <label>QQ </label>
              <md-input v-model="user.qq" placeholder="输入QQ"></md-input>
            </md-field>
            <md-field>
              <label>WeChat </label>
              <md-input v-model="user.wx" placeholder="输入微信"></md-input>
            </md-field>
            <md-field>
              <label>Phone</label>
              <md-input v-model="user.phone" placeholder="输入电话"></md-input>
            </md-field>
            <md-dialog-actions>
              <md-button class="md-primary" @click="contactActive = false">取消</md-button>
              <md-button class="md-primary" @click="contactActive = false">保存</md-button>
            </md-dialog-actions>
          </md-dialog-content>
        </md-dialog>
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
  methods: {
    updateUser () {
      request.updateUser(this.user)
        .then(data => {
          this.$root.user = data
          this.msg = 'success'
        })
        .catch(e => {
          console.error(e)
          this.msg = `保存失败，请重试： ${e.msg}`
        })
    },
    handleSkillChange (skill) {
      if (this.skillChanging) return
      this.skillChanging = true
      if (this.user.skills.map(v => v.name).includes(skill.name)) {
        request.removeSkill(skill.id)
          .then(() => {
            this.skillChanging = false
            this.user.skills = this.user.skills.filter(e => e.name !== skill.name)
          })
          .catch(e => {
            console.error(e)
            this.skillChanging = false
          })
      } else {
        request.addSkill(skill.name)
          .then(() => {
            this.user.skills.push(skill)
            this.skillChanging = false
          })
          .catch(e => {
            console.error(e)
            this.skillChanging = false
          })
      }
    },
    uploadImage () {
      // do
    }
  },
  data () {
    request.getProfile().then(
      res => {
        this.user = res
      }
    )

    request.getAllSkills().then(
      res => {
        this.skills = res
      }
    )

    return {
      user: {
        skills: []
      },
      skillChanging: false,
      nameActive: false,
      avatarActive: false,
      contactActive: false,
      introActive: false,
      skills: []
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

  .md-card-content .md-button {
    margin: 0;
  }
</style>
