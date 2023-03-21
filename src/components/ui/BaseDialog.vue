<template>
  <el-dialog
    :model-value="copycenterDialogVisible"
    :title="title"
    width="30%"
    align-center
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <h3>{{ message }} 🆘</h3>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="updateCenterDialogVisible">
          {{ buttonText }}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Warning 🚨",
    },
    message: {
      type: String,
      default: "Are you sure?",
    },
    buttonText: {
      type: String,
      default: "OK",
    },
    centerDialogVisible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    copycenterDialogVisible() {
      return this.centerDialogVisible;
    },
  },
  data() {
    return {};
  },
  methods: {
    updateCenterDialogVisible() {
      this.$emit("updateCenterDialogVisible");
    },
  },
};
</script>

<style></style>
