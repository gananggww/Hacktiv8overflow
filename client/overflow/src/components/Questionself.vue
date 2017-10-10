<template>
  <div>
    <div>
      <Navbar></Navbar>
    </div>
    <div class="ui container segment">
      <div class="ui  basic segment stackable two wide column grid">
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
      <div class="ui segment container">
        <div class="ui link grid vertical segment items jarak" v-for="(all, index) in myLove">
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
                  <a><i @click="del(all._id, index)"class="trash icon"></i></a>
                  <i class="user icon"></i>{{all.user.name}}
                  <i class="history icon"></i>{{all.updatedAt}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import Navbar from '@/components/Navbar'
// import deletemyquestion from '@/components/deletemyquestion'
import urlSlug from 'url-slug'
export default {
  data () {
    return {
      searchString: ''
    }
  },
  components: {
    Navbar
    // deletemyquestion
  },
  methods: {
    ...mapActions([
      'myQuestion',
      'doDelMyQuest'
    ]),
    ...mapState([
      'myquest'
    ]),
    del (id, idx) {
      var payload = {
        id: id,
        idx: idx
      }
      this.doDelMyQuest(payload)
    },
    pindahCuy (all) {
      var slug = urlSlug(all.title)
      this.$router.push(`${all.user.username}/${all._id}/${slug}`)
    }
  },
  computed: {
    myLove () {
      return this.filterSelf(this.searchString)
    },
    ...mapGetters([
      'filterSelf'
    ])
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
