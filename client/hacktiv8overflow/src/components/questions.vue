<template>
  <div>
    <div>
      <createquest v-if="token !== null"></createquest>
    </div>
    <div class="ui segment bg">
      <div class="judul">
        <h1>Questions Timeline</h1>
      </div>
      <div class="ui grid segment items jarak" v-for="all in quest">
        <div class="two wide column">
          <div class="ui small image">
            <img src="https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png">
          </div>
        </div>
        <div class="fourteen wide column">
          <div class="content">
            <router-link :to="'/ganang/' + all._id"><a href="" class="header"><b>{{all.title}}</b></a></router-link>
            <div class="ui divider meta">
              <span></span>
            </div>
            <div class="description">
              <p>{{all.content}}</p>
            </div>
            <div class="ui divider meta">
              <span></span>
            </div>
            <div class="extra">
              <p><i class="user icon"></i>{{all.user.fullname}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import createquest from '@/components/createquest'
export default {
  data () {
    return {
      token: localStorage.getItem('token')
    }
  },
  components: {
    createquest
  },
  methods: {
    ...mapActions([
      'getQuestion'
    ])
  },
  computed: {
    quest () {
      return this.$store.state.questions
    }
  },
  mounted () {
    this.getQuestion()
  }

}
</script>

<style scoped>
.jarak {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.judul {
  color: #FF9800;
  padding-bottom: 1rem;
}
</style>
