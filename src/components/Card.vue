<template>
  <div>

    <div @click="moveDetail(idNum)" class="search-card">

      <div class="search-card-img">
        <img v-if="imageUrl.length !== 0" :src="this.imoticon.packageImg" alt=""/>
        <img v-else src="" alt="404"/>
      </div>

      <div class="search-card-p">
        {{name}}
      </div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'CarD',
    props: ['imoticon'],

    data () {
    return {
      imageUrl : '',
      idNum : '',
      name: ''
      }
    },

    methods: {
      // 디테일 페이지로 보내기
      moveDetail (id_num) {
        const target = '/detail/' + String(id_num)
        console.log(target)
        console.log(this.imoticon)
        this.$router.push({path: target, query: {imoticon: this.imoticon}});
      }
    },

    mounted () {
      if (this.imoticon === undefined) {
        return false
      }
      this.imageUrl = this.imoticon.packageImg
      this.name = this.imoticon.packageName
      this.idNum = this.imoticon.packageId
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/style/Card.scss";
</style>