<template>
  <div class="talent-card" v-if="content" @click="showDialog = true">
    <md-card class="talent">
      <md-card-media><img :src="img"></md-card-media>
      <h3>{{name}}</h3>
      <p>
        <span>技能：</span>
        <span class="skill" v-for="(skill, i) in skills" :key="i">{{skill.name}}</span>
      </p>
      <p><span>项目：</span>{{experience.length}}个</p>
    </md-card>
    <TalentDetail :showDetail="showDialog" :content="content" />
  </div>
  <div v-else>LOADING~</div>
</template>

<script>
import TalentDetail from '@/components/UtilComponents/TalentDetail'

export default {
  name: 'Talent',
  components: {TalentDetail},
  props: ['content'],
  data () {
    return {
      showDialog: false
    }
  },
  computed: {
    name () {
      return this.content.name
    },
    skills () {
      return this.content.skills
    },
    experience () {
      return this.content.experience
    },
    img () {
      return this.content.img
    },
    uid () {
      return this.content.uid
    }
  }
}
</script>

<style scoped>
  .talent-card {
    display: inline-block;
  }

  .md-card {
    width: 225px;
    margin: 10px;
    height: 400px;
    display: inline-block;
    vertical-align: top;
    background: white;
    text-align: left;
  }

  .md-card img {
    width: 225px;
    height: 225px;
  }

  .md-card p, .md-card h3 {
    padding-left: 1rem;
  }

  span.skill {
    padding: 0 4px;
    display: inline-block;
    color: #59ccfe;
    background: rgba(96, 125, 171, 0.07);
    border-radius: 2px;
    margin: 2px 2px;
    line-height: 1.45em;
  }
</style>
