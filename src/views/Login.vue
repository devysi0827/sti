<template>
  <div>
    <h1 id="login">Login</h1>
      <div class="textbox">
        <input type="text" id="username" placeholder="사용자이름" v-model="credentials.username">
      </div>
      <div class="textbox">
        <input type="password" id="password" placeholder="비밀번호" v-model="credentials.password">
      </div>
      <!-- <div> -->
        <Button @click.native="login()" value="login"/>
      <!-- </div> -->
      <div id="kakao-login" >
        <Button value="kakao login"/>
      </div>

     <Modal v-if="modalState" :content="content" @close="modalState=false"></Modal> 
  </div>
</template>

<script>
import Modal from "@/components//Modal.vue";
import Button from '../components/Button.vue'
// import axios from 'axios'

export default {
  name: 'Login',
  data: function () {
    return {
      credentials: {
        username: null,
        password: null,
      },
      modalState: false,
      content: '백엔드 로그인 기능은 미구현입니다'
    }
  },
  components: {
   Modal,
   Button
  },
  methods: {
    login () {
      this.modalState = true
      // axios({
      //   method: 'post',
      //   url: 'http://127.0.0.1:8000/accounts/api-token-auth/',
      //   data: this.credentials,
      // })
      //   .then(res => {
      //     console.log(res)
      //     localStorage.setItem('jwt', res.data.token)
      //     this.$emit('login')
      //     this.$router.push({ name: 'Maindoor' })
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    },
  }
}

</script>

<style scoped>
html {
  background-color: #F3EFE4;
}
.textbox { 
  position: relative; 
  width: 30%; 
  margin: 15px;
  margin-left:auto; 
  margin-right:auto;
  }
.textbox label {
  position: absolute;
  top: 1px; 
  left: 1px; 
  padding: .8em .5em; 
  color: #999;
  cursor: text;
}
.textbox input[type="text"],
.textbox input[type="password"] {
  width: 100%; 
  height: auto; 
  line-height : normal;  
  padding: .8em .5em;
  border: 1px solid #999;
  outline-style: none; 
  -webkit-appearance: none; 
  -moz-appearance: none;
  appearance: none;
}
</style>

<style lang="scss" scoped>
  @import "@/assets/style/views/Login.scss";
</style>