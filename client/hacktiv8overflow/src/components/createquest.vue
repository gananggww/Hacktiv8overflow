<template lang="html">
  <div>
    <form class="ui segment form">
      <div class="field">
        <label class="left aligned">Title</label>
        <input type="text" name="first-name" v-model="formCreate.title" placeholder="title">
      </div>
      <div class="field">
        <label>Content</label>
        <input type="text" name="last-name" v-model="formCreate.content" placeholder="content">
      </div>
      <router-link :to="'/'"><button class="ui fluid orange github button" type="submit" @click="submitCreateQuest()">Submit</button></router-link>
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
    }
  }

}
</script>

<style scoped>

</style>
