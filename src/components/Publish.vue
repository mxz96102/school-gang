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
          <label>项目类别</label>
          <md-select v-model="project.subcategory" name="cate">
            <md-option v-for="(cate, i) in cates" :value="cate" :key="i">{{cate}}</md-option>
          </md-select>
        </md-field>
        <md-field>
          <label>项目描述</label>
          <md-textarea v-model="project.detail"></md-textarea>
        </md-field>
        <md-field>
          <label>简介图</label>
          <md-input v-model="avatar_url"></md-input>
        </md-field>
        <div>
          <md-chip
            v-for="(skill, i) in skills"
            :key="i"
            @click="() => project.needs.map(n => n.name).includes(skill.name) || project.needs.push({name: skill.name, id: skill.id, number: 1})">
            {{skill.name}}
          </md-chip>
        </div>
        <md-field v-for="(need, i) in project.needs" :key="i">
          <label>{{need.name}}</label>
          <md-input
            v-model="need.number"
            type="number" />
          <md-button
            @click="() => project.needs = project.needs.filter(n => n.name !== need.name)"
            class="md-input-action md-accent md-square">删除
          </md-button>
        </md-field>
        <md-field>
          <label>完成时间</label>
          <md-datepicker v-model="project.ddl" :md-open-on-focus="false" />
        </md-field>
        <md-content class="warning">{{msg}}</md-content>
      </md-card-content>
      <md-card-actions>
        <md-button @click="() => handlePublish()" class="md-primary md-raised">发布</md-button>
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
  methods: {
    handlePublish () {
      console.log(this.project)
      fetcher.addProject({
        ...this.project,
        ddl: this.project.ddl.getTime(),
        avatar_url: this.avatar_url
      }).then(id => {
        this.$router.push(`/project/${id}`)
      }).catch((e) => {
        console.error(e)
        this.msg = e.response.data.map(a => `${a.name} - ${a.error[0]}`).join('/')
      })
    }
  },
  data () {
    fetcher.getAllSkills()
      .then(data => {
        this.skills = data
      })
      .catch(e => {
      })
    fetcher.getAllCate()
      .then(data => {
        this.cates = data.reduce((a, v) => a.concat(v.sub), [])
      })
      .catch(e => {
      })
    return {
      msg: null,
      uploadImg: null,
      /* eslint-disable-next-line */
      avatar_url: '',
      project: {
        ddl: new Date(),
        needs: [],
        name: '',
        detail: '',
        img: ''
      },
      cates: [],
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
  .warning {
    font-weight: bold;
    color: darkred;
  }
</style>
