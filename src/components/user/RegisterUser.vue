<template>
  <el-form :model="registerForm" :rules="registerRules" label-width="120px">
    <el-form-item label="Name" prop="name">
      <el-input v-model.trim="registerForm.name"></el-input>
    </el-form-item>
    <el-form-item label="Email" prop="email">
      <el-input v-model.trim="registerForm.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input type="password" v-model.trim="registerForm.password"></el-input>
    </el-form-item>
    <el-form-item label="Confirm Password" prop="confirmPassword">
      <el-input
        type="password"
        v-model.trim="registerForm.confirmPassword"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('registerForm')"
        >Register</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      registerForm: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      registerRules: {
        name: [
          {
            required: true,
            message: "Please input your name",
            trigger: "blur",
          },
          {
            min: 3,
            message: "Name must be at least 3 characters",
            trigger: "blur",
          },
        ],
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
        confirmPassword: [
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
          {
            validator: (rule, value, callback) => {
              if (value !== this.registerForm.password) {
                callback(new Error("Passwords do not match"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async submitForm(formEl) {
      if (!formEl) return;
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
