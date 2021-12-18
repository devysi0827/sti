<template>
  <div class="home">
    <!-- <button @click="check()">11</button> -->
    <hr>
    <img :src= "this.$route.query.imoticon.packageImg" alt="404"/>
    <h2>name: {{ this.$route.query.imoticon.packageName }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  components: {
  },
  methods: {
    // check() {
    //   console.log(this.$route.query)
    //   // console.log()
    // }
  },

}
</script>
