<template>
  <div class="home">
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
  },

}
</script>
