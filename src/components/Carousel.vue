<template>
<div style="height:700px">
    <div id="spin-container">
      <img  src="@/assets/image/loading.gif"/>
      <img  src="@/assets/image/loading.gif"/>
      <img  src="@/assets/image/loading.gif"/>
      <img  src="@/assets/image/loading.gif"/>
      <img  src="@/assets/image/loading.gif"/>
      <img  src="@/assets/image/loading.gif"/>
      <img  src="@/assets/image/loading.gif"/>
      <img  src="@/assets/image/loading.gif"/>
      <img  src="@/assets/image/loading.gif"/>
      <img  src="@/assets/image/loading.gif"/>
    </div>
    <div id="ground"></div>
    <div class="click-div" @click="moveSearch()">
      <Button value="Find Your Sticker"></Button>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import Button from './Button.vue'
export default {
  name: 'Stipop',
  components: {
    Button
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0,0);
    },
    moveSearch () {
      this.scrollToTop()
      this.$router.push({ name: 'Search' })
    },
  },
  mounted() {
    var radius = 400; // how big of the radius
    var autoRotate = true; // auto rotate or not
    var rotateSpeed = -60; // unit: seconds/360 degrees
    var imgWidth = 180; // width of images (unit: px)
    var imgHeight = 254; // height of images (unit: px)

    setTimeout(init, 5500);

    var ospin = document.getElementById('spin-container');
    var aImg = ospin.getElementsByTagName('img');
    var aEle = [...aImg]; // combine 2 arrays
    var tempArray = []
    setTimeout( function() {
       axios({
              method: 'get',
              url : `https://messenger.stipop.io/v1/package?userId=1&pageNumber=0`, 
              headers : { 'apikey': '1b6e514bbe964219cd72702eb8079151' } 
            })
            .then((res) => {
              tempArray = res.data.body.packageList
            })
            .then(() =>{
              for (var i = 0; i < aImg.length; i++) {
                aImg[i].src = tempArray[i].packageImg
              }
            })
      }, 5000
    )

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    var ground = document.getElementById('ground');
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";


    function init(delayTime) {
      console.log("init")
      for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
        
      }
    }

    // // auto spin
    if (autoRotate) {
      var animationName = 'spin'
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }
  }
}
</script>


<style>
@-webkit-keyframes spin {
  from{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  } to{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}

@keyframes spin {
  from{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  } to{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  }
}
@-webkit-keyframes spinRevert {
  from{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  } to{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  }
}
@keyframes spinRevert {
  from{
    -webkit-transform: rotateY(360deg);
            transform: rotateY(360deg);
  } to{
    -webkit-transform: rotateY(0deg);
            transform: rotateY(0deg);
  }
}
</style>

<style lang="scss" scoped>
  @import "src/assets/style/Components/Carousel.scss";
</style>
