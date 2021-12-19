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
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">Login</router-link></li>
          <li><router-link to="/search">Search</router-link></li>
          <li><router-link to="/profile">Profile</router-link></li>
        </ul>
      </div>
    </div>
</template>


<style lang="scss" scoped>
  @import "src/assets/style/components/Navbar.scss";
</style>