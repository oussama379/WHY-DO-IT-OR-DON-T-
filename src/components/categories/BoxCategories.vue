<template>
  <div>
    <template v-for="(chunk, index) in chunkedCategories" :key="index">
      <el-row :gutter="40">
        <BaseCategory
          v-for="category in chunk"
          :key="category"
          :categoryName="category.categoryName"
          @select-category="categorySelected"
        ></BaseCategory>
      </el-row>
    </template>
  </div>
</template>

<script>
import BaseCategory from "./BaseCategory.vue";
export default {
  components: {
    BaseCategory,
  },
  computed: {
    categories() {
      return this.$store.getters.categories;
    },
    chunkedCategories() {
      const chunkSize = 4; // set the desired size of each chunk
      return this.categories.reduce((acc, curr, i) => {
        const chunkIndex = Math.floor(i / chunkSize);
        if (!acc[chunkIndex]) {
          acc[chunkIndex] = [];
        }
        acc[chunkIndex].push(curr);
        return acc;
      }, []);
    },
  },
  data() {
    return {};
  },
  methods: {
    categorySelected(payload) {
      this.$router.push({
        name: "send-input",
        params: { categoryName: payload.categoryName },
      });

      //GO TO SEND REQUEST PAGE
      // this.$router.push("/requestAnArgument/" + payload.categoryName);
    },
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
  padding-top: 10px;
}
.el-row:last-child {
  margin-bottom: 0;
}
</style>
