<template>
  <div>
    <div>
      <headernav></headernav>
    </div>
    <div class="ui container">
      <div class="ui segment bg">
        <div class="judul">
          <h1>Your Questions</h1>
        </div>
        <div class="ui grid segment items jarak" v-for="all in myquest">
          <div class="two wide column">
            <div class="ui small image">
              <img src="https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png">
            </div>
          </div>
          <div class="fourteen wide column">
            <div class="content">
              <a class="header"><b>{{all.title}}</b></a>
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
                <p>
                  <a class="item" @click="doDelMyQuest(all._id)"><i class="trash icon item"></i></a>
                  <i class="user icon"></i>{{all.user.username}}
                </p>
                </div>
                <!-- <button class="ui mini right floated button"></button> -->
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import headernav from '@/components/headernav'
// import deletemyquestion from '@/components/deletemyquestion'
export default {
  data () {
    return {
    }
  },
  components: {
    headernav
    // deletemyquestion
  },
  methods: {
    ...mapActions([
      'myQuestion',
      'doDelMyQuest'
    ])
  },
  computed: {
    myquest () {
      return this.$store.state.myquest
    }
  },
  mounted () {
    this.myQuestion()
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
