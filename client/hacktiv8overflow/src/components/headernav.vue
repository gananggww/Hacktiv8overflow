<template>
  <div>
    <div class="ui stackable fixed menu">
      <a class="item">
        <i class="home icon"></i>
        <b id="corp">Hacktiv8overflow</b>
      </a>
      <!-- <div > -->
        <buttonmyquestion v-if="token !== null"></buttonmyquestion>
      <!-- </div> -->
      <div>
        <a class="item" @click="goQuestionPage()" >
          Questions
        </a>
      </div>
      <div class="right menu">
        <logoutbutton v-if="token !== null"></logoutbutton>
        <loginbutton v-else></loginbutton>
      </div>
    </div>
  </div>
</template>

<script>
import logoutbutton from '@/components/logoutbutton'
import loginbutton from '@/components/loginbutton'
import buttonmyquestion from '@/components/buttonmyquestion'

export default {
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  methods: {
    goQuestionPage () {
      this.$router.push('/')
    }
  },
  components: {
    logoutbutton,
    loginbutton,
    buttonmyquestion
  }
}
</script>

<style scoped>
#corp {
  color: #FF9800;
}
</style>
