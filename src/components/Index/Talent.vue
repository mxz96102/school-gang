<template>
  <div v-if="content" class="talent">
    <img :src="img">
    <h3>{{name}}</h3>
    <p><span>技能</span>{{skills.slice(0, 3).join(' ')}}</p>
    <p><span>项目</span>{{experience.length}}个</p>
  </div>
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
    }
  }
}
</script>

<style scoped>

</style>
