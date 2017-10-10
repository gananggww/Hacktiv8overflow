<template>
  <a class="item" @click="login()">
        Login
  </a>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
