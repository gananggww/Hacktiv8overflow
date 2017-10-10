<template>
  <a @click="remove()" class="item"><i class="trash icon item"></i></a>
</template>

<script>
import { mapActions } from 'axios'
export default {
  data () {
    return {
    }
  },
  methods: {
    ...mapActions([
      'doDelMyQuest'
    ]),
    remove () {
      this.doDelMyQuest()
    }
  }
}
</script>

<style lang="css">
</style>
