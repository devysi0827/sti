<template>
  <div class="Test">
    <hr>
    <hr>
    <CardBox />
  </div>
</template>

<script>
// @ is an alias to /src

import CardBox from '@/components/CardBox.vue'

export default {
  name: 'Test',
  components: {
    CardBox
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/style/views/Test.scss";
</style>
