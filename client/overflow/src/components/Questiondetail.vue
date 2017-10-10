<template>
  <div>
    <div class="ui container">
      <div class="ui segment bg">
        <div class="judul">
          <!-- <h1>{{apadeh[0].user.name}}'s question</h1> -->
        </div>
        <div class="ui  grid items jarak" v-for="all in apadeh">
          <div class="two wide column">
            <div class="ui small image">
              <img src="https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png">
            </div>
          </div>
          <div class="fourteen wide column">
            <div class="content">
              <a class="header"><b>{{all.title}}</b></a>
              <div class="ui divider meta">
              </div>
              <div class="description">
                <p>{{all.content}}</p>
              </div>
              <div class="ui divider meta">
              </div>
              <div class="extra">
                <p>
                  <a class="item" @click="doDelMyQuest(all._id)"></a>
                  <i class="user icon"></i>{{all.user.name}}
                </p>
                </div>
              </div>
            </div>
            <!-- {{all}} -->
            <div @click="showField(all._id)"class="ui fluid  blue button">Answer</div>
          </div>
          <div v-show="activated === true" class="ui form" @submit.privent="mamah()">
            <div class="field">
              <label>Answer</label>
              <textarea v-model="answer" classrows="2"></textarea>
            </div>
            <button class="ui green button" @click="mamah()">Submit</button>
          </div>
        </div>
        <div class="ui grid segment items jarak" v-for="all in answersnyaya">
          <div class="two wide column">
            <div class="ui circular image">
              <img src="https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png">
            </div>
          </div>
          <div class="fourteen wide column">
            <div class="content">
              <div class="ui header">
                <div @click="pindahCuy(all)" class="header"><b>Replay : '{{all.questions.title}}' from '{{all.user.name}}'</b></div>
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
import { mapActions, mapState } from 'vuex'
export default {
  props: ['id'],
  data () {
    return {
      activated: false,
      // idQuest: '',
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
      'getAnswers'
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
