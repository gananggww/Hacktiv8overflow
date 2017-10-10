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
      localStorage.removeItem('token')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
