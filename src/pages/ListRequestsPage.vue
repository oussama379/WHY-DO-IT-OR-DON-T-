<template>
  <base-card>
    <div class="demo-collapse">
      <el-collapse accordion>
        <el-collapse-item
          :name="request.id"
          v-for="request in requests"
          :key="request.id"
        >
          <template #title>
            {{ request.requestPhrase
            }}<el-icon class="header-icon">
              <info-filled />
            </el-icon>
          </template>
          <div>
            {{ request.answer }}
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </base-card>
</template>

<script>
import BaseCard from "../components/ui/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },

  computed: {
    requests() {
      return this.$store.getters.requests;
    },
  },
};
</script>

<style></style>
