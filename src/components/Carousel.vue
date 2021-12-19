<template>
<div style="height:800px">
  <button @click="check()">ceh</button>
  <div id="drag-container" style="background-color:black; visibility: hidden;">
    <div id="spin-container" style="background-color:black; visibility: hidden;">
      <img style="visibility: visible" src="this.bestArray[0].packageImg" alt="44"/>

      <!-- <img style="visibility: visible;" :src= "this.bestArray[0].packageImg" /> -->
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"/>
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg"/>
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg"/>
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/x1QZHSq9AzreIVbsp8VgYemAjV0.jpg"/>
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/jyJ0aWWJamLUzEyYq0XENwp8jX6.jpg"/>
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/74hLDKjD5aGYOotO6esUVaeISa2.jpg"/>
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg"/>
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/wwrvjmcgkDyB2RbCbIVLXZf82pl.jpg"/>
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"/>
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg"/>
      <img style="visibility: visible;" src="https://image.tmdb.org/t/p/w500/eD4bGQNfmqExIAzKdvX5gDHhI2.jpg"/>
    </div>
    <div id="ground"></div>
  </div>

  <p @click="search ()" id="logodesign"> Stipop</p>
</div>
</template>

<script>
import axios from 'axios'


export default {
  components: {},
  name: 'Stipop',
  data () {
    return {
      userId : '1',
      key: '1b6e514bbe964219cd72702eb8079151',
      bestArray : []
    }
  },
  methods: {
    check() {
      console.log(this.bestArray[0].packageImg)
    },
    getBestImoticon () {
      console.log(2)
        axios({
              method: 'get',
              url : `https://messenger.stipop.io/v1/package?userId=${this.userId}&pageNumber=0`, 
              headers : { 'apikey': this.key } 
            })
            .then((res) => {
              this.bestArray.push(...res.data.body.packageList)
              // packageImg
            })
            .then(()=>{
              console.log(this.bestArray)
            })
      },
    search () {
      this.$router.push({ name: 'Search' })
    }
  },
  beforeMounted() {
    this.getBestImoticon()
  },
  mounted() {


    var radius = 400; // how big of the radius
    var autoRotate = true; // auto rotate or not
    var rotateSpeed = -60; // unit: seconds/360 degrees
    var imgWidth = 180; // width of images (unit: px)
    var imgHeight = 254; // height of images (unit: px)

    setTimeout(init, 1000);

    var odrag = document.getElementById('drag-container');
    var ospin = document.getElementById('spin-container');
    var aImg = ospin.getElementsByTagName('img');
    // var aVid = ospin.getElementsByTagName('video');
    var aEle = [...aImg]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth + "px";
    ospin.style.height = imgHeight + "px";

    // Size of ground - depend on radius
    var ground = document.getElementById('ground');
    ground.style.width = radius * 3 + "px";
    ground.style.height = radius * 3 + "px";


    function init(delayTime) {
      for (var i = 0; i < aEle.length; i++) {
        aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
        aEle[i].style.transition = "transform 1s";
        aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
      }
    }

    function applyTranform(obj) {
      // Constrain the angle of camera (between 0 and 180)
      if(tY > 180) tY = 180;
      if(tY < 0) tY = 0;

      // Apply the angle
      obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
    }

    function playSpin(yes) {
      ospin.style.animationPlayState = (yes?'running':'paused');
    }

    var desX = 0,
        desY = 0,
        tX = 0,
        tY = 10;

    // auto spin
    if (autoRotate) {
      var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
      ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
    }

    // setup events
    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      var sX = e.clientX,
          sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        var nX = e.clientX,
            nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
      };

      this.onpointerup = function () {
        odrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX += desX * 0.1;
          tY += desY * 0.1;
          applyTranform(odrag);
          playSpin(false);
          if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        this.onpointermove = this.onpointerup = null;
      };
      return false;
    };

    document.onmousewheel = function(e) {
      e = e || window.event;
      var d = e.wheelDelta / 20 || -e.detail;
      radius += d;
      init(1);
    };
  }
}
</script>

<style lang="scss" scoped>
  @import "src/assets/style/Components/Carousel.scss";
</style>


