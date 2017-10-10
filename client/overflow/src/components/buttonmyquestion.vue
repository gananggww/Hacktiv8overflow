<template>
  <a class="item" @click="gotoMyQuest()">
    MyQuestion
  </a>
</template>

<script>
export default {
  methods: {
    gotoMyQuest () {
      this.$router.push('/myquest')
    }
  }
}
</script>

<style lang="css">
</style>
