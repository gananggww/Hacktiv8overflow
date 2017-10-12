<template>
  <div class="ui stackable">
    <div class="ui menu">
      <a @click="home" class="item corp">
        <i class="home icon"></i>
        <b>
          Hacktiv8overflow
        </b>
      </a>
      <buttonmyquestion v-show="token !== null  "/>

      <div class="right menu">
        <!-- <Buttonprofile v-show="token !== null"/> -->
        <!-- <a class="item" @click="check()">Help</a> -->
        <!-- <a class="item">Sign Up</a> -->
        <loginbutton v-if="token === null"/>
        <logoutbutton v-else/>
      </div>
    </div>
  </div>
</template>

<script>
import logoutbutton from '@/components/logoutbutton'
import loginbutton from '@/components/loginbutton'
import buttonmyquestion from '@/components/buttonmyquestion'
import Buttonprofile from '@/components/Buttonprofile'
export default {
  data () {
    return {
      token: localStorage.getItem('token'),
      route: this.$router.app._route.path
    }
  },
  methods: {
    home () {
      this.$router.push('/')
    },
    check () {
      console.log(this.$router.app._route.path)
    }
  },
  components: {
    logoutbutton,
    loginbutton,
    buttonmyquestion,
    Buttonprofile
  }
}
</script>

<style scoped>
#corp {
  color: #FF9800;
}
</style>
