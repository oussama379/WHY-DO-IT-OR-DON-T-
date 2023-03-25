<template>
  <el-row>
    <el-badge :value="convincedCounter" class="item" type="success">
      <el-button>Conviced</el-button>
    </el-badge>
  </el-row>
  <el-row>
    <el-badge :value="notConvincedCounter" class="item" type="danger">
      <el-button>Not Convinced</el-button>
    </el-badge>
  </el-row>
</template>

<script>
export default {
  computed: {
    convincedCounter() {
      return this.$store.getters.convincedOrNotCounter.convinced * 1;
    },
    notConvincedCounter() {
      return this.$store.getters.convincedOrNotCounter.notConvinced * 1;
    },
  },
};
</script>

<style scoped>
.el-button {
  border-radius: 50%;
}
</style>
