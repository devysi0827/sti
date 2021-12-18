<template>
  <div class="Stipop">
    <h1>This is an stipop page</h1>
    <button @click="stipop()">click here</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Stipop',
  components: {
  },
  data () {
    return {
      key : '1b6e514bbe964219cd72702eb8079151',
      userId: '15c5ff33-c603-4d2f-82c8-ae7a156ba0bd1',
    }
  },
  methods: {
    stipop () {
      console.log(axios)
      axios({
              method: 'get',
              url : `https://messenger.stipop.io/v1/package?userId=${this.userId}&pageNumber=0`, 
              headers : { 'apikey': this.key } 
            })
      .then((res) => {
        console.log(res.data.body.packageList)
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
