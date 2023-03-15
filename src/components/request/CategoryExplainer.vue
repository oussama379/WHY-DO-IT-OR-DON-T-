<template>
  <div>
    <base-card>
      <h1>{{ category }}</h1>
    </base-card>
  </div>
</template>

<script>
import BaseCard from "../ui/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  computed: {
    category() {
      return this.$route.params.category;
    },
  },
};
</script>

<style></style>
