<template>
  <div>
    <div>
      <Navbar></Navbar>
    </div>
    <div class="ui container segment">
      <div class="ui  basic segment stackable two wide column grid">
        <div class="eleven wide column">
          <div class="judul">
            <h1>{{myLove[0].user.name}}'s questions</h1>
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
            <div class="ui circular fluid image">
              <div v-if="all.user.img === undefined">
                <img src="https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png">
              </div>
              <div v-else>
                <img :src="all.user.img">
              </div>
            </div>
          </div>
          <div class="fourteen wide column">
            <div class="content">
              <div class="ui stackable three column grid header">
                <div class="twelve wide column">
                  <a @click="pindahCuy(all)" class="header"><b>{{all.title}}</b></a>
                </div>
                <div class="center aligned two wide column">
                  <button @click="edit(all)" class="ui right floated basic mini black fluid button"><i class="edit icon"></i>edit</button>
                </div>
                <div class="center aligned two wide column">
                  <button @click="del(all._id, index)" class="ui right floated mini basic fluid black button"><i class="trash icon"></i>hapus</button>
                </div>
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
                  <i class="user icon"></i>{{all.user.name}}
                  <i class="history icon"></i>{{all.updatedAt}}
                </span>
              </div>
            </div>
            <div v-show="shown === true" class="ui form" @submit.privent="mamah(all._id, index)">
              <div class="ui horizontal divider">
                'Edit'
              </div>
              <div class="field">
                <label>Title</label>
                <input v-model="payload.title" classrows="2"></input>
              </div>
              <div class="field">
                <label>Question</label>
                <textarea v-model="payload.content" classrows="2"></textarea>
              </div>
              <button class="ui green button" @click="mamah(all._id, index)">Submit</button>
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
      searchString: '',
      shown: false,
      payload: {
        title: '',
        content: ''
      }
    }
  },
  components: {
    Navbar
    // deletemyquestion
  },
  methods: {
    ...mapActions([
      'myQuestion',
      'doDelMyQuest',
      'editMyQuest'
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
    },
    edit (all) {
      if (this.shown === true) {
        this.shown = false
      }
      this.shown = true
      this.payload.title = all.title
      this.payload.content = all.content
    },
    mamah (id, idx) {
      var payload = {
        id: id,
        idx: idx,
        title: this.payload.title,
        content: this.payload.content
      }
      this.editMyQuest(payload)
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
