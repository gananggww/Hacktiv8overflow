<template>
  <div class="">
    <a class="item" @click="gotoMyProfile()">
      Profile
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    gotoMyProfile () {
      this.$router.push('/profile')
    }
  }
}
</script>

<style lang="css">
</style>
