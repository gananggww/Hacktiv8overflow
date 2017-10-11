<template>
  <a class="item" @click="logout()">
        Logout
  </a>
</template>

<script>
// import router from '../router/index'
export default {
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
