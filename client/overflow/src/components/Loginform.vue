<template lang="html">
<div class="">
  <h1>Login</h1>
  <form class="ui form">
    <div class="field">
      <label>Username</label>
      <input type="text" v-model="formLogin.username" placeholder="Username">
    </div>
    <div class="field">
      <label>password</label>
      <input type="password" v-model="formLogin.password" placeholder="Pssword">
    </div>
    <button class="ui orange button" @click="signin()" type="submit">Submit</button>
    <label>you don't have account ? <a class="item" @click="goRegister()"><b>Register</b></a></label>
  </form>
</div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'getUser'
    ]),
    signin () {
      console.log('ini di submit ')
      this.getUser(this.formLogin)
    },
    goRegister () {
      this.$router.push('/register')
    }
  }
}
</script>

<style lang="css">
</style>
