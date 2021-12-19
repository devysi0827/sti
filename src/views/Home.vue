<template>
  <div>
    <input type="search" placeholder="11"  />
    <img class="main-image" style="visibility: visible;" src="https://studio.stipop.io/images/drawing-studiostipop-2@2x.png"/>
    <p class="main-word1">스티팝에서 당신의 이모티콘을 찾아보세요!</p>
    <p class="main-word2">Best Imoticon </p>
    <Carousel/>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/style/views/Home.scss";
</style>

