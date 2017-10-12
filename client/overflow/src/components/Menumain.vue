<template lang="html">
  <div class="ui two item menu">
    <!-- <router-view/> -->
      <a v-show="local !== null" @click="goQuest" class="item" v-bind:class="{'active': isActiveTimeline}"><i class="unordered list icon"></i>Timeline</a>
      <a v-show="local !== null" @click="goForm" class="item" v-bind:class="{'active': isActiveForm}"><i class="history icon"></i>Lets Question</a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isActiveTimeline: false,
      isActiveForm: false,
      local: localStorage.getItem('token')
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
