<template>
  <base-card>
    <h1>Were You Conviced Or Not ? 🤔</h1>
    <el-row>
      <el-button type="danger" @click="addNotConvincedCounter">NO 😔</el-button>
      <el-button type="success" @click="addConvincedCounter">YES 🤩</el-button>
    </el-row>
  </base-card>
</template>

<script>
import BaseCard from "../ui/BaseCard.vue";
export default {
  emits: ["add-convinced", "add-notConvinced"],
  components: {
    BaseCard,
  },
  methods: {
    addConvincedCounter() {
      this.$emit("add-convinced");
      this.$store.commit("addConvincedCounter");
    },
    addNotConvincedCounter() {
      this.$emit("add-notConvinced");
      this.$store.commit("addNotConvincedCounter");
    },
  },
};
</script>

<style></style>
