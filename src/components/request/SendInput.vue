<!-- eslint-disable vue/valid-v-slot -->
<template>
  <el-form :model="formData" :rules="formRules" @submit.prevent="">
    <el-row :gutter="12">
      <el-col :span="8"> </el-col>
      <el-col :span="8">
        <el-form-item prop="input">
          <el-input
            style="height: 40px"
            v-model="formData.input"
            :placeholder="category.categoryInputPhrase"
          >
            <template #prepend v-if="this.$store.getters.isShould">
              {{ category.categoryPhraseForShould }}
            </template>
            <template #prepend v-else>
              {{ category.categoryPhraseForShouldNot }}
            </template>
          </el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-button
          v-if="!isLoading"
          size="large"
          :icon="Search"
          @click="sendRequest(formRules)"
          round
          >Send</el-button
        >
        <el-button v-else size="large" round :loading-icon="Eleme" loading
          >Loading</el-button
        >
      </el-col>
    </el-row>
  </el-form>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        input: "",
      },
      formRules: {
        input: [
          {
            required: true,
            message: "Please input your phrase",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },
  props: {},

  methods: {
    async sendRequest(formRules) {
      if (!formRules) return;
      await formRules.validate((valid, fields) => {
        if (valid) {
          this.$store
            .dispatch("sendRequestToGptApi", {
              categoryName: this.category.categoryName,
              requestPhrase: this.$store.getters.isShould
                ? this.category.categoryPhraseForShould
                : this.category.categoryPhraseForShouldNot + " " + this.input,
            })
            .then(() => {
              this.$router.push({ name: "request-page" });
            })
            .catch((error) => {
              console.log(error);
            })
            .finally(() => {
              this.$store.commit("setIsLoading", false);
            });
          console.log("error submit!", fields);
        } else {
          console.log("submit!");
        }
      });
    },
  },
  computed: {
    category() {
      const categoryName = this.$route.params.categoryName;
      console.log(categoryName);
      return this.$store.getters.categories.find(
        (category) => category.categoryName === categoryName
      );
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  watch: {
    // $store() {},
  },
};
</script>

<style></style>
