<template>
  <div>
    <input class="search-box" :placeholder="placeholder" v-model="indexWord" @keydown.enter="searchKeyWord()"/>
    <hr>
    <p id="search-info">검색을 통해 이모티콘을 찾아보세요!</p>
    <div class="search-wrap-div">
      <Card 
        v-for="(item,idx) of items" 
        :key="idx"
        :imoticon="item"
      />
    </div>
    

  </div>
</template>

<script>
import axios from 'axios'
import Card from './Card.vue'

  export default {
    name:'CardBox',
    components: {
      Card,
    },
    data: function() {
      return {
        //search
        placeholder: '검색어를 입력해주세요.',

        // api key
        key : '1b6e514bbe964219cd72702eb8079151',
        userId : '1',

        // index case
        indexWord: '', 
        totalNum: 0,
        nowPage: 1,
        search_list : [],
        // totalPage: 0,

        // infinite scroll
        // loading : false, //로딩 그게 돌아야한다면
        nextNum: 0,
        items: []
      }
    },

    methods: {

      // 특정 이모티콘정보 가져오기
      getImoticonList (pageNum) {
        axios({
              method: 'get',
              url : `https://messenger.stipop.io/v1/package?userId=${this.userId}&pageNumber=${pageNum}&searchText=${this.indexWord}`, 
              headers : { 'apikey': this.key } 
              // url : `/openapi/relic/list?serviceKey=${this.serviceKey}&name=${this.indexWord}&numOfRows=100&pageNo=${pageNum}`, 
            })
            .then((res) => {
              this.search_list.push(...res.data.body.packageList)
            })
      },

      // search of name
      searchKeyWord: function() {
        // 글자수 제한
        if (this.indexWord.length <2) {
          this.indexWord = ''
          this.placeholder = '2글자 이상 입력해주세요'
          return false
        } 

        var info = document.getElementById("search-info")
        info.innerHTML = "클릭시 상세정보를 확인할 수 있습니다"

        // 검색결과 초기화
        this.search_list = []
        this.items = []

        // 응답 요청
        axios({
          method: 'get',
          url : `https://messenger.stipop.io/v1/package?userId=${this.userId}&pageNumber=0&searchText=${this.indexWord}`, 
          headers : { 'apikey': this.key } 
        })
        .then((res) => {
          if (res.data.body.pageMap === null) {
            this.indexWord = ''
            this.placeholder = '결과가 없습니다'
            return false
          }
          this.totalNum = res.data.body.pageMap.totalCount
          this.nextNum = 0
          this.search_list.push(...res.data.body.packageList)
          this.indexWord = ''
          this.placeholder = ''
        })
        .then(() => {
          for (var j = this.nextNum; j < this.nextNum+20; j++) {
            if (this.search_list[j] !== undefined) {
              this.items.push(this.search_list[j]);
            } 
          }
          this.nextNum = j
        })
        .catch((err) => {
          console.log(err)
        })
      },

      // infinite methods
      loadMore () {
        if (this.nextNum > this.totalNum) {
          return false
        }
        // this.loading = true;
        setTimeout(e => {
          for (var i = 0; i < 6; i++) {
            this.nextNum++
            this.items.push(this.search_list[this.nextNum]);
          }
          console.log(e)
          // this.loading = false;
        }, 200);
        this.getImoticonList(this.nowPage)
        this.nowPage = this.nowPage + 1
      },
    },

    mounted () {
      // Detect when scrolled to bottom.
      const listElm = document.querySelector('.search-wrap-div');
      listElm.addEventListener('scroll',e => {
        if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight-10) {
          this.loadMore();
          console.log(e)
        }
      })
    },
  }

</script>

<style lang="scss" scoped>
  @import "src/assets/style/Components/CardBox.scss";
</style>

