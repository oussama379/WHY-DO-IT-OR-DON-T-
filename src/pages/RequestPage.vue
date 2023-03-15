<template>
  <send-input></send-input>
</template>

<script>
// import BaseCard from "../components/ui/BaseCard.vue";
import SendInput from "../components/request/SendInput.vue";
export default {
  components: {
    // BaseCard,
    SendInput,
  },
  props: {
    // category: String,
  },

  computed: {
    category() {
      return this.$route.params.category;
    },
  },
};
</script>

<style>
.input-send {
  max-width: 50%;
}
</style>
