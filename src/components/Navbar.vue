<template>
    <div class="header" id="nav">
      <input type="checkbox" class="openSidebarMenu" id="openSidebarMenu">
      <label for="openSidebarMenu" class="sidebarIconToggle">
        <div class="spinner diagonal part-1"></div>
        <div class="spinner horizontal"></div>
        <div class="spinner diagonal part-2"></div>
      </label>
      <div id="sidebarMenu">
        <ul class="sidebarMenuInner">
          <li ><router-link @click.native="close()"  to="/">Home</router-link></li>
          <li ><router-link @click.native="close()"   to="/login">Login</router-link></li>
          <li ><router-link @click.native="close()"  to="/search">Search</router-link></li>
          <!-- <li><router-link to="/profile">Profile</router-link></li> -->
          <!-- <li><router-link to="/notfound">Notfound</router-link></li> -->
          <!-- <li @click="close()">111</li> -->
        </ul>
      </div>

      <div class = "main-logo">
        <router-link class="main-word"  to="/profile">stipop</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      }
    },
  components: {
  },
  methods: {
    close() {
      document.getElementById("openSidebarMenu").checked = false
    }
  },
  
}
</script>

<style lang="scss" scoped>
  @import "src/assets/style/components/Navbar.scss";
</style>