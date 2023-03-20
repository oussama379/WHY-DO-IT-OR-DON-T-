<!-- eslint-disable vue/valid-v-slot -->
<template>
  <el-row :gutter="12">
    <el-col :span="8"> </el-col>
    <el-col :span="8">
      <el-input
        style="height: 40px"
        v-model="input"
        :placeholder="category.categoryInputPhrase"
      >
        <template #prepend v-if="this.$store.getters.isShould">
          {{ category.categoryPhraseForShould }}
        </template>
        <template #prepend v-else>
          {{ category.categoryPhraseForShouldNot }}
        </template>
      </el-input>
    </el-col>
    <el-col :span="8">
      <el-button size="large" :icon="Search" round @click="sendRequest"
        >Send</el-button
      >
    </el-col>
  </el-row>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      input: "",
    };
  },
  props: {},

  methods: {
    sendRequest() {
      this.$store.commit("sendRequestToGptApi", { category: this.category });
      this.$router.push({ name: "request-page" });
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
  },
  watch: {
    // $store() {},
  },
};
</script>

<style></style>
