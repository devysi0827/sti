<template>
 <div>
   <img class="not-found" src="@/assets/image/404.png" alt="">
    <div class="description">
      <div class="description-1">
        죄송합니다
      </div>
      <div class="description-1">
        현재 페이지를 찾을 수 없습니다
      </div>
      <div class="description-2">
        존재하지 않은 주소를 입력하셨거나<br>
      </div>
       <div class="description-2">
        요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다<br>
      </div>  
    </div>

  <Modal v-if="isError" :error="error" @close="isError=false"></Modal>
  <button @click="check()">11</button>
  </div>
</template>

<script>
import Modal from "@/components//Modal";
export default {
  name: 'NotFound',
  data () {
    return {
      isError: false,
    }
  },
  components: {
    Modal
  },
  methods: {
    check() {
      this.isError = true
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/style/views/NotFound.scss";
</style>
