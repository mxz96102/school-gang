<template>
  <md-dialog :md-active.sync="showDialog">
    <md-dialog-title>
      <md-card-header>
        <md-avatar>
          <img :src="avatar" alt="Avatar">
        </md-avatar>

        <p class="md-title">{{name}}</p>
        <span class="skill" v-for="(skill, i) in skills" :key="i">{{skill}}</span>
      </md-card-header>
      {{intro}}
      <h2>项目经历<span class="exp-count">{{experience.length}}次</span></h2>
    </md-dialog-title>
    <md-dialog-content>
      <md-list class="md-triple-line">
        <md-list-item v-for="(exp, i) in experience" :key="i">
          <md-avatar>
            <img :src="exp.img" alt="People">
          </md-avatar>
          <div class="md-list-item-text">
            <span>{{exp.name}}</span>
            <span>{{ddl}}（完成时间）</span>
          </div>
          <md-button class="md-list-action">
            <router-link :to="'/project/'+exp.uid">查看</router-link>
          </md-button>
        </md-list-item>
      </md-list>
    </md-dialog-content>
    <md-dialog-actions>
      <md-button class="md-primary" @click="$parent.showDialog = false">关闭</md-button>
    </md-dialog-actions>
  </md-dialog>

</template>

<script>
import moment from 'moment'

export default {
  name: 'TalentDetail',
  props: {
    showDetail: Boolean,
    content: Object
  },
  data: () => ({}),
  computed: {
    showDialog () {
      return this.showDetail
    },
    avatar () {
      return this.content.img
    },
    name () {
      return this.content.name.slice(0, 3)
    },
    intro () {
      return this.content.intro
    },
    skills () {
      return this.content.skills
    },
    experience () {
      return this.content.experience
    },
    uid () {
      return this.content.uid
    },
    ddl () {
      return moment(this.content.ddl).format('YYYY/MM/DD')
    }
  }
}
</script>

<style scoped>
  span.skill {
    padding: 0 4px;
    display: inline-block;
    color: #59ccfe;
    background: rgba(96, 125, 171, 0.07);
    border-radius: 2px;
    margin: 2px 2px;
    line-height: 1.45em;
  }

  h2 {
    margin: .5em 0;
  }

  .exp-count {
    font-size: .8em;
    font-weight: normal;
    float: right;
  }
</style>
