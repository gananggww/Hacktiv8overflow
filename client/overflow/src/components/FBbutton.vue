<template>
  <fb-signin-button
    class= "ui facebook fluid button"
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    <i class="facebook icon"></i>
    Sign in with Facebook
  </fb-signin-button>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      fbSignInParams: {
        scope: 'email,public_profile',
        return_scopes: true
      }
    }
  },
  methods: {
    onSignInSuccess (response) {
      // debugger
      console.log('ini response FACEBOOK : ', response)
      if (response.status === 'connected') {
        localStorage.setItem('fbaccesstoken', response.authResponse.accessToken)
        axios.get(`http://localhost:3000/fbUsers/login`, {
          headers: {
            fbaccesstoken: localStorage.getItem('fbaccesstoken')
          }
        })
        .then(loug => {
          console.log(loug)
          localStorage.setItem('token', loug.data.token)
          this.$router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
      } else {
        console.log('salah')
      }
      // window.FB.api('/me', dude => {
      //   console.log(`Good to see you, ${dude.name}.`)
      // })
    },
    onSignInError (error) {
      console.log('OH NOES', error)
    }
  }
}
</script>

<style>
.fb-signin-button {
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>
