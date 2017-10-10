<template>
<div>
  <div>
    <div class="ui fixed menu">
      <a class="item corp">
        <i class="home icon"></i>
        Hacktiv8overflow
      </a>
      <a class="item" @click="goQuestionPage()">
        Questions
      </a>

      <div class="right menu">
        <logoutbutton v-if="token !== null"></logoutbutton>
        <loginbutton v-else></loginbutton>
      </div>
    </div>
  </div>
  <div class="ui segment container">
    <h1>Login</h1>
    <form class="ui form">
      <div class="field">
        <label>Username</label>
        <input type="text" name="first-name" v-model="formLogin.username" placeholder="Username">
      </div>
      <div class="field">
        <label>password</label>
        <input type="password" name="last-name" v-model="formLogin.password" placeholder="Pssword">
      </div>
      <router-link :to="'/'"><button class="ui orange button" type="submit" @click="signin()">Submit</button></router-link>
    </form>
  </div>
  <div class="ui segment container">
    <h1>Resigster</h1>
    <form class="ui form">
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
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formLogin: {
        username: '',
        password: ''
      },
      login: this.$store.state.login,
      formRegister: {
        fullname: '',
        email: '',
        username: '',
        password: ''
      },
      signup: this.$store.state.signup
    }
  },
  methods: {
    goQuestionPage () {
      this.$router.push('/')
    },
    ...mapActions([
      'getUser',
      'createUser'
    ]),
    signin () {
      this.getUser(this.formLogin)
    },
    register () {
      this.createUser(this.formRegister)
    }
  }
}
</script>

<style scoped>
.corp {
  color: #FF9800;
}
</style>
