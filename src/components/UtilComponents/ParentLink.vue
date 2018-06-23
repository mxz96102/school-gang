<template>
  <div>
    <router-link v-bind:to="`/projects/${category.uid}/all`">{{category.name}}</router-link>
    >
    <router-link v-bind:to="`/projects/${category.uid}/${subcategory.uid}`">{{subcategory.name}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'ParentLink',
  props: {
    category: Object,
    subcategory: Object
  },
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
