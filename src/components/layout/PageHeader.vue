<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <router-link to="/home" class="custom-link">
      <el-menu-item index="0">WHY DO IT (OR DON'T) ?</el-menu-item>
    </router-link>
    <div class="flex-grow"></div>
    <router-link to="/my-requests" class="custom-link">
      <el-menu-item index="1">Saved Requests</el-menu-item>
    </router-link>
    <router-link to="/login-register" class="custom-link">
      <el-menu-item index="2">Login & Register</el-menu-item>
    </router-link>
  </el-menu>
</template>

<script></script>

<style>
.flex-grow {
  flex-grow: 1;
}
body {
  font-family: "Open Sans", sans-serif;
}
.custom-link {
  text-decoration: none; /* Remove underline */
}
</style>
