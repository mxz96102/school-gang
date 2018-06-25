<template>
  <md-card v-if="content" class="talent">
    <img :src="img">
    <h3>{{name}}</h3>
    <p>
      <span>技能：</span>
      <span class="skill" v-for="(skill, i) in skills" :key="i">{{skill}}</span>
    </p>
    <p><span>项目：</span>{{experience.length}}个</p>
  </md-card>
  <div v-else>LOADING~</div>
</template>

<script>
export default {
  name: 'Talent',
  props: ['content'],
  data () {
    return {}
  },
  computed: {
    name () {
      return this.content.name.slice(0, 3)
    },
    skills () {
      return this.content.skills
    },
    experience () {
      return this.content.experience
    },
    img () {
      return this.content.img
    }
  }
}
</script>

<style scoped>
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
