<template>
  <base-card>
    <h1>Were You Conviced Or Not ? 🤔</h1>
    <el-row>
      <el-button type="danger">NO 😔</el-button>
      <el-button type="success">YES 🤩</el-button>
    </el-row>
  </base-card>
</template>

<script>
import BaseCard from "../ui/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
};
</script>

<style></style>
