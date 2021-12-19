<template>
  <div>

    <div class="search-card">
      <div class="search-card-img">
        <img v-if="imageUrl.length !== 0" :src="this.imageUrl" alt=""/>
        <img v-else src="" alt="404"/>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'ImoticonCard',
    props: ['imoticon'],

    data () {
    return {
      imageUrl : '',
      }
    },

    methods: {
    },

    mounted () {
      if (this.imoticon === undefined) {
        return false
      }
      this.imageUrl = this.imoticon.stickerImg
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/style/Components/Card.scss";
</style>