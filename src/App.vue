<template>
  <page-header></page-header>
  <br />
  <br />
  <router-view></router-view>
</template>

<script>
import PageHeader from "./components/layout/PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  background-color: grey;
  border-radius: 4px;
  min-height: 36px;
}
</style>
