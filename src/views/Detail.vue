<template>
  <div class="home">
    <img :src= "this.$route.query.imoticon.packageImg" alt="404"/>
    <h2>name: {{ this.$route.query.imoticon.packageName }}</h2>
    <button @click="check()">check</button>
    <div class="search-wrap-div">
      <ImoticonCard 
        v-for="(item,idx) of imoticons" 
        :key="idx"
        :imoticon="item"
      />
    </div>
  </div>
</template>

<script>
// import Button from '../components/Button.vue'
import ImoticonCard  from '@/components/ImoticonCard.vue'

export default {
  name: 'Detail',
  data () {
    return {
        imoticons: []
      }
    },
  components: {

    ImoticonCard 
  },
  methods: {
    check() {
      console.log(this.imoticons)
      console.log(this.$route.query.imoticon.stickers)
    }
  },
  created() {
    this.imoticons = this.$route.query.imoticon.stickers
  }

}
</script>
