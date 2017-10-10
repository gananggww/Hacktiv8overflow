<template>
  <div>
    <div class="ui container">
      <div class="ui segment bg">
        <div class="judul">
          <h1>{{apadeh[0].user.username}}'s question</h1>
        </div>
        <div class="ui grid segment items jarak" v-for="all in apadeh">
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
export default {
  props: ['id'],
  data () {
    return {
    }
  },
  computed: {
    apadeh () {
      return this.$store.state.questID
    }
  },
  methods: {
    ...mapActions([
      'doId'
    ])
  },
  mounted () {
    this.doId(this.id)
  }
}
</script>

<style lang="css">
</style>
