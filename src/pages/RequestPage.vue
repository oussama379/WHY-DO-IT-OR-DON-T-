<template>
  <convinced-or-not></convinced-or-not>

  <request-result></request-result>
</template>

<script>
import RequestResult from "../components/request/RequestResult.vue";
import ConvincedOrNot from "../components/request/ConvincedOrNot.vue";
export default {
  components: {
    RequestResult,
    ConvincedOrNot,
  },
  props: {
    // category: String,
  },

  computed: {},
};
</script>

<style>
.input-send {
  max-width: 50%;
}
</style>
