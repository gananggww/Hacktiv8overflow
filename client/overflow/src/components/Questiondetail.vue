<template>
  <div>
    <div class="ui container">
      <div class="ui segment bg">
        <div class="judul">
          <!-- <h1>{{apadeh[0].user.name}}'s question</h1> -->
        </div>
        <div class="ui  grid items jarak" v-for="all in apadeh">
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
            <div class=" content">
              <div class="ui stackable two column grid">
                <div class="thirteen wide column">
                  <div class="header"><b>{{all.title}}</b></div>
                </div>
                <div class="three wide column">
                  <Votequestions v-show="tokenUser !== null"/>
                </div>
              </div>
              <div class="ui divider meta">
              </div>
              <div class="description">
                <p>{{all.content}}</p>
              </div>
              <div class="ui divider meta">
              </div>
              <div class=" extra">
                  <i class="user icon"></i>{{all.user.name}}
              </div>
            </div>
          </div>
            <!-- {{all}} -->
            <div v-show="tokenUser !== null" @click="showField(all._id)"class="ui fluid  blue button">Answer</div>
          </div>
          <div v-show="activated === true" class="ui form" @submit.privent="mamah()">
            <div class="field">
              <label>Answer</label>
              <textarea v-model="answer" classrows="2"></textarea>
            </div>
            <button class="ui green button" @click="mamah()">Submit</button>
          </div>
        </div>
        <div class="ui grid segment items jarak" v-for="(all, index) in answersnyaya">
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
              <div class="ui stackable grid two column header">
                <div class="fourteen wide column">
                  <div @click="pindahCuy(all)" class="header"><b>Replay : '{{all.questions.title}}' from '{{all.user.name}}'</b></div>
                </div>
                <div v-show = "all.user._id === idUser" class="center aligned two wide column">
                  <button @click="del(all._id, index)" class="ui right floated mini basic fluid black button"><i class="trash icon"></i>hapus</button>
                </div>
              </div>
              <div class="ui meta">
                <span></span>
              </div>
              <div class="description">
                <p>{{all.answer}}</p>
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
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Votequestions from '@/components/Votequestions'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Votequestions
  },
  props: ['id'],
  data () {
    return {
      activated: false,
      idUser: localStorage.getItem('id'),
      tokenUser: localStorage.getItem('token'),
      answer: ''
    }
  },
  computed: {
    apadeh () {
      return this.questID()
    },
    answersnyaya () {
      return this.answerTemp()
    }
  },
  methods: {
    ...mapActions([
      'doId',
      'postAnswer',
      'getAnswers',
      'delAnswer'
    ]),
    ...mapState([
      'questID',
      'answerTemp'
    ]),
    showField (id) {
      // console.log(this.idQuest)
      this.activated = true
      // this.idQuest = id
    },
    mamah () {
      var payload = {
        id: this.id,
        answer: this.answer
      }
      this.postAnswer(payload)
    },
    del (id, idx) {
      var payload = {
        id: id,
        idx: idx
      }
      this.delAnswer(payload)
    }
  },
  mounted () {
    // console.log(this.id)
    this.doId(this.id)
    this.getAnswers(this.id)
  }
}
</script>

<style lang="css">
</style>
