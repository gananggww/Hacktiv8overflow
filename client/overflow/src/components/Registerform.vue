<template lang="html">
<div class="">
  <div class="">
    <h1>Resigster</h1>
    <form class="ui segment form">
      <div class="field">
        <label>Full Name</label>
        <input type="text" name="first-name" v-model="formRegister.fullname" placeholder="Full Name">
      </div>
      <div class="field">
        <label>E-mail</label>
        <input type="text" name="first-name" v-model="formRegister.email" placeholder="E-mail">
      </div>
      <div class="field">
        <label>Username</label>
        <input type="text" name="first-name" v-model="formRegister.username" placeholder="Username">
      </div>
      <div class="field">
        <label>password</label>
        <input type="password" name="last-name" v-model="formRegister.password" placeholder="Password">
      </div>
      <router-link :to="'/login'"><button class="ui orange button" type="submit" @click="register()">Submit</button></router-link>
    </form>
  </div>
</div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
      formRegister: {
        fullname: '',
        email: '',
        username: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'createUser'
    ]),
    register () {
      this.createUser(this.formRegister)
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="css">
</style>
