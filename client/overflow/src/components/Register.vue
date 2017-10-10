<template lang="html">
  <div class="">
    <div class="">
      <Navbar/>
    </div>
    <div class="ui segment container">
      <Registerform/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Registerform from '@/components/Registerform'
export default {
  components: {
    Registerform,
    Navbar
  },
  mounted () {
    if (localStorage.getItem('token') !== null) {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
