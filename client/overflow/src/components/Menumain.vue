<template lang="html">
  <div class="ui two item menu">
    <!-- <router-view/> -->
      <a @click="goQuest" class="item" v-bind:class="{'active': isActiveTimeline}">Timeline</a>
      <a @click="goForm" class="item" v-bind:class="{'active': isActiveForm}">Lets Question</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActiveTimeline: false,
      isActiveForm: false
    }
  },
  methods: {
    goQuest () {
      this.$router.push('/')
      this.isActiveForm = false
      this.isActiveTimeline = true
    },
    goForm () {
      this.$router.push('/quest')
      this.isActiveTimeline = false
      this.isActiveForm = true
    }
  }
}
</script>

<style lang="css">
</style>
