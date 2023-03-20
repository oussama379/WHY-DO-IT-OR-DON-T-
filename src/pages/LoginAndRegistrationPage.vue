<template>
  <el-tabs v-model="activeTab"> </el-tabs>
  <el-row :gutter="30">
    <el-col :span="1"> </el-col>
    <el-col :span="10">
      <el-card shadow="always">
        <h2>Login</h2>
        <login-user></login-user>
      </el-card>
    </el-col>

    <el-col :span="2"> </el-col>

    <el-col :span="10">
      <el-card shadow="always">
        <h2>Register</h2>
        <register-user></register-user>
      </el-card>
    </el-col>
    <el-col :span="1"> </el-col>
  </el-row>
</template>

<script>
import LoginUser from "../components/user/LoginUser.vue";
import RegisterUser from "../components/user/RegisterUser.vue";
export default {
  components: {
    LoginUser,
    RegisterUser,
  },
};
</script>

<style></style>
