<template>
  <el-col :span="6">
    <el-button
      size="large"
      :color="randomColor"
      style="min-width: 100%"
      @click="selectCategory"
      >{{ categoryName }}</el-button
    >
  </el-col>
</template>

<script>
export default {
  emits: ["select-category"],
  props: {
    categoryName: String,
  },
  computed: {
    randomColor() {
      // Generate a random red, green, and blue value between 0 and 255
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);

      // Create a CSS color string from the red, green, and blue values
      var color = "rgb(" + r + ", " + g + ", " + b + ")";

      // Return the CSS color string
      return color;
    },
  },
  methods: {
    selectCategory() {
      this.$emit("select-category", { categoryName: this.categoryName });
    },
  },
};
</script>

<style>
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
