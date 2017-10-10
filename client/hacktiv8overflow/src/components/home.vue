<template>
  <div>
    <div>
      <headernav></headernav>
    </div>
    <div class="ui container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import headernav from '@/components/headernav'
import createquest from '@/components/createquest'
export default {
  components: {
    headernav,
    createquest
  }
}
</script>

<style lang="css">
</style>
