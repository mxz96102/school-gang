<template>
  <div class="project">
    <img src={{this.img}}>
    <h3>{{this.name}}</h3>
    <p><span>技能</span>{{this.skills}}</p>
    <p><span>项目</span>{{this.experience}}次</p>
  </div>
</template>

<script>
export default {
  name: 'Talent',
  props: ['talent'],
  data () {
    const {name, skills, experience, img} = this.talent
    return {
      name,
      skills,
      experience,
      img
    }
  }
}
</script>

<style scoped>

</style>
