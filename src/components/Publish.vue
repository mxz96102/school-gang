<template>
  <div>
    <NavBar />
    <md-card class="project">
      <md-card-header><h2>发布项目</h2></md-card-header>
      <md-card-content>
        <md-field>
          <label>项目名称</label>
          <md-input v-model="project.name"></md-input>
        </md-field>
        <md-field>
          <label>项目描述</label>
          <md-textarea v-model="project.detail"></md-textarea>
        </md-field>
        <md-field>
          <label>简介图</label>
          <md-file v-model="uploadImg" accept="image/*" />
        </md-field>
        <md-field>
          <md-chips>
            <md-chip
              v-for="(skill, i) in skills"
              :key="i"
              @click="() => project.needs.map(n => n.name).includes(skill) || project.needs.push({name: skill, number: 1})">
              {{skill}}
            </md-chip>
          </md-chips>
        </md-field>
        <md-field v-for="(need, i) in project.needs" :key="i">
          <label>{{need.name}}</label>
          <md-input
            v-model="need.number"
            type="number" />
          <span class="md-square"
                @click="() => project.needs = project.needs.filter(n => n.name !== need.name)">
            X
          </span>
        </md-field>
        <md-field>
          <label>完成时间</label>
          <md-datepicker v-model="project.ddl" :md-open-on-focus="false" />
        </md-field>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-primary md-raised">发布</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
import fetcher from '../request'
import NavBar from '@/components/NavBar'

export default {
  name: 'Publish',
  components: {NavBar},
  data () {
    fetcher.getAllSkills()
      .then(data => {
        this.skills = data
      })
      .catch(e => {
      })
    return {
      uploadImg: null,
      project: {
        ddl: new Date(),
        needs: [],
        name: '',
        detail: '',
        img: ''
      },
      skills: []
    }
  }
}
</script>

<style scoped>
  nav {
    width: 100%;
    height: 80px;
    background: white;
    display: flex;
    align-items: center;
    padding: 0 3rem;
    box-sizing: border-box;
  }

  .md-card.project {
    width: 900px;
    margin: 2rem auto;
  }
</style>
