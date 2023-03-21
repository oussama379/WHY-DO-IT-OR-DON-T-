<!-- eslint-disable vue/valid-v-slot -->
<template>
  <base-dialog
    :title="title"
    :message="message"
    :centerDialogVisible="!!error"
    @updateCenterDialogVisible="error = null"
  >
  </base-dialog>
  <el-form ref="form" :model="form" :rules="rules" @submit.prevent="">
    <el-row :gutter="12">
      <el-col :span="8"> </el-col>
      <el-col :span="8">
        <el-form-item prop="input">
          <el-input
            style="height: 40px"
            v-model="form.input"
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
          @click="sendRequest('form')"
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
import BaseDialog from "@/components/ui/BaseDialog.vue";
export default {
  components: {
    BaseDialog,
  },
  data() {
    return {
      error: null,
      dialog: {
        title: "Warning ",
        message: "",
        centerDialogVisible: false,
      },
      form: {
        input: "",
      },
      rules: {
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
    sendRequest(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const requestPhrase = this.$store.getters.isShould
            ? this.category.categoryPhraseForShould
            : this.category.categoryPhraseForShouldNot;
          try {
            await this.$store.dispatch("sendRequestToGptApi", {
              categoryName: this.category.categoryName,
              requestPhrase: requestPhrase + " " + this.form.input,
            });
            this.$router.push({ name: "request-page" });
          } catch (error) {
            this.error = error.message || "Something went wrong!";
            this.message = this.error;
            console.log(this.error);
          }
          this.$store.commit("changeLoading");
          console.log("submit!");
        } else {
          console.log("error submit!");
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
