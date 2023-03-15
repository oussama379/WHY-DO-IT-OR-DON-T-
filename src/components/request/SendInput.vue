<template>
  <el-row :gutter="12">
    <el-col :span="8"> </el-col>
    <el-col :span="8">
      <el-input
        style="height: 40px"
        v-model="input1"
        placeholder="Please input"
      >
        <template #prepend>Convince me that I should </template>
      </el-input>
    </el-col>
    <el-col :span="8">
      <el-button size="large" :icon="Search" round @click="sendRequest"
        >Send</el-button
      >
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    sendRequest() {},
  },
};
</script>

<style></style>
