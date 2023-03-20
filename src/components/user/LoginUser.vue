<template>
  <el-form :model="loginForm" :rules="loginRules" label-width="120px">
    <el-form-item label="Email" prop="email">
      <el-input v-model.trim="loginForm.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model.trim="loginForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('loginRules')"
        >Login</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      loginRules: {
        email: [
          {
            required: true,
            message: "Please input your email",
            trigger: "blur",
          },
          {
            type: "email",
            message: "Please input correct email format",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {
            required: true,
            message: "Please input your password",
            trigger: "blur",
          },
          {
            min: 6,
            message: "Password must be at least 6 characters",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async submitForm(formEl) {
      // if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log("submit!");
        } else {
          console.log("error submit!", fields);
        }
      });
    },
  },
};
</script>

<style></style>
