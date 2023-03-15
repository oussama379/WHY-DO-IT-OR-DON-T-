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
    <div class="flex-grow" />
    <el-menu-item index="1">Requests</el-menu-item>
    <el-menu-item index="2">Login</el-menu-item>
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
