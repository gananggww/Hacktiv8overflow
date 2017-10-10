<template>
  <div>
    <div class="ui basic segment bg">
      <div class="ui stackable two wide column grid">
        <div class="eleven wide column">
          <div class="judul">
            <h1>Questions Timeline</h1>
          </div>
        </div>
        <div class="right aligned five wide column">
          <div class="ui fluid action input">
            <input v-model="searchString" type="text" placeholder="Search...">
            <button class="ui button">Search</button>
          </div>
        </div>
      </div>
      <div class="ui link grid segment items jarak" v-for="all in quest">
        <div class="two wide column">
          <div class="ui circular image">
            <img src="https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png">
          </div>
        </div>
        <div class="fourteen wide column">
          <div class="content">
            <div class="ui header">
              <a @click="pindahCuy(all)" class="header"><b>{{all.title}}</b></a>
            </div>
            <div class="ui divider meta">
              <span></span>
            </div>
            <div class="description">
              <p>{{all.content}}</p>
            </div>
            <div class="ui divider meta">
              <span></span>
            </div>
            <div class="horizontal segments extra">
              <span>
                <a class="item" @click="doDelMyQuest(all._id)"><i class="user icon"></i>{{all.user.fullname}}</a>
                <i class="history icon"></i>{{all.updatedAt}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import urlSlug from 'url-slug'
export default {
  data () {
    return {
      token: localStorage.getItem('token'),
      searchString: ''
    }
  },
  methods: {
    ...mapActions([
      'getQuestions'
    ]),
    ...mapState([
      'questions'
    ]),
    pindahCuy (all) {
      var slug = urlSlug(all.title)
      this.$router.push(`${all.user.username}/${all._id}/${slug}`)
    }
  },
  computed: {
    ...mapGetters([
      'filterTimeline'
    ]),
    quest () {
      return this.filterTimeline(this.searchString)
    }
  },
  mounted () {
    this.getQuestions()
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
