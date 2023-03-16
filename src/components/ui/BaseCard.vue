<template>
  <el-row :gutter="12">
    <el-col :span="7"> </el-col>
    <el-col :span="10">
      <el-card shadow="always">
        <slot></slot>
      </el-card>
    </el-col>
    <el-col :span="7"> </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style></style>
