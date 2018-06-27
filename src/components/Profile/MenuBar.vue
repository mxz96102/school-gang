<template>
    <md-list class="md-primary">
      <md-list-item to="/profile/info">
        <span class="md-list-item-text">个人信息</span>
      </md-list-item>
      <md-list-item md-expand>
        <span class="md-list-item-text">我的项目</span>
        <md-list slot="md-expand">
          <md-list-item class="md-inset" to="/profile/project/join">加入的项目</md-list-item>
          <md-list-item class="md-inset" to="/profile/project/publish">发布的项目</md-list-item>
          <md-list-item class="md-inset" to="/profile/project/complete">完成的项目</md-list-item>
        </md-list>
      </md-list-item>
      <md-list-item to="/profile/message">
        <span class="md-list-item-text">通知</span>
      </md-list-item>
    </md-list>
</template>

<script>
export default {
  name: 'MenuBar'
}
</script>

<style scoped>
  .md-list {
    width: 320px;
  }
</style>
