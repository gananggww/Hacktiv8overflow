<template>
<div>
  <div>
  <Navbar/>
  </div>
  <div class="ui segment container">
    <Loginform/>
  </div>
</div>
</template>
<script>
import Loginform from '@/components/Loginform'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Loginform,
    Navbar
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
    if (localStorage.getItem('token') !== null) {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.corp {
  color: #FF9800;
}
</style>
