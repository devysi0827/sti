<template>
  <div>
    <img class="p-img" :src= "this.$route.query.imoticon.packageImg" alt="404"/>
    <p class="p-name">{{ this.$route.query.imoticon.packageName }}</p>
      <p class="a-name">{{ this.$route.query.imoticon.artistName }}</p>
    <div class="between">
      <!-- <div class="p-div"> -->
        <p class="price">{{ this.$route.query.imoticon.price }}</p>
       <!-- </div> -->
      <div>
        <font-awesome-icon @click="changeHeart()" class="icon-size" id="heart" :icon="['fas', 'heart']" :style="{ color: 'black' }" />
        <font-awesome-icon @click="kakaoRequest()" class="icon-size" id="share" :icon="['fas', 'share']" />
        <!-- <button @click="kakaoRequest()" >11</button> -->
      </div>
    </div>
    <div class="search-wrap-div">
      <ImoticonCard 
        v-for="(item,idx) of imoticons" 
        :key="idx"
        :imoticon="item"
      />
    </div>
    <Modal v-if="modalState" :content="content" @close="modalState=false"></Modal> 

  </div>
</template>

<script>
import Modal from "@/components//Modal.vue";
import ImoticonCard  from '@/components/ImoticonCard.vue'
export default {
  name: 'Detail',
  data () {
    return {
        imoticons: [],
        
        //modal
        modalState: false,
        content: '백엔드 좋아요 기능은 미구현입니다',
        // kakao
        selectedUrl: '',
        kakaoImageUrl: '',
      }
    },
  components: {
    Modal,
    ImoticonCard 
  },
  methods: {
    changeHeart() {
      var heart = document.getElementById("heart")
      if (heart.style.color === "red") {
        heart.style.color = "black"
      }
      else {
        heart.style.color = "red"
      }
      this.modalState = true
    },

    // 카카오 공유하기
    async kakaoRequest () {

      // 1. url 선정
      this.selectedUrl = this.$route.query.imoticon.packageImg
    
      // 2.url을 받아서, 파일 생성에 맞는 형식으로 변환
      const response = await fetch(this.selectedUrl);
      const blob = await response.blob();
   
      // 파일 생성하기
      const file = new File([blob], 'image.jpg', {type: blob.type});
      let list = new DataTransfer();
      list.items.add(file);
      let myFileList = list.files;

      // 3-1. 위에서 만든 파일을 통해서 카카오 url 등록하기
      var files = myFileList
      await window.Kakao.Link.uploadImage({
        file: files
      })
      .then((res) =>{
        // 수정 카카오 url을 저장해야함
        this.kakaoImageUrl = res.infos.original.url
      })
      .catch((err) => {
        console.log(err)
      })
      
      // 3-2.공유하기
      console.log("3-2")
      window.Kakao.Link.sendDefault({ 
        objectType: 'feed', 
        content: { 
          title: 'stipop sticker!', 
          description: '지금 바로 당신의 스티커를 찾아보세요!', 
          imageUrl: this.kakaoImageUrl,
          link: { 
            mobileWebUrl: 'https://studio.stipop.io/', 
            webUrl: 'https://studio.stipop.io/', 
              }, 
            }, 
          buttons: [{ 
            title: 'stipop', 
            link: { 
              mobileWebUrl: 'https://studio.stipop.io/', 
              webUrl: 'https://studio.stipop.io/', 
              },
            }], 
        }) 
        
      }, 

    
  },
  created() {
    this.imoticons = this.$route.query.imoticon.stickers
  }

}
</script>
<style lang="scss" scoped>
  @import "src/assets/style/views/Detail.scss";
</style>