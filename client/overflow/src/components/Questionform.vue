<template lang="html">
  <div>
    <form class="ui segment form">
      <div class="field">
        <label class="left aligned">Title</label>
        <input type="text" v-model="formCreate.title" placeholder="Your Title">
      </div>
      <div class="field">
        <label>Question</label>
        <textarea rows="2"type="text" v-model="formCreate.content" placeholder="Your Question"/>
      </div>
      <button class="ui fluid orange github button" type="submit" @click="submitCreateQuest()">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      formCreate: {
        title: '',
        content: ''
      },
      createQuest: this.$store.state.createQuest
    }
  },
  methods: {
    ...mapActions([
      'createQuestion'
    ]),
    submitCreateQuest () {
      this.createQuestion(this.formCreate)
      this.$router.push('/')
    }
  }

}
</script>

<style scoped>

</style>
