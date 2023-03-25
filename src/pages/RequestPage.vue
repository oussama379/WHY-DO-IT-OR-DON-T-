<template>
  <el-row>
    <el-col :span="21">
      <convinced-or-not
        @add-convinced="reactToAddConvincedCounter"
        @add-notConvinced="reactToAddNotConvincedCounter"
      ></convinced-or-not>

      <request-result></request-result>
    </el-col>
    <el-col :span="2">
      <convinced-or-not-counters></convinced-or-not-counters>
    </el-col>
    <el-col :span="1"></el-col>
  </el-row>
</template>
<script>
import RequestResult from "../components/request/RequestResult.vue";
import ConvincedOrNot from "../components/request/ConvincedOrNot.vue";
import ConvincedOrNotCounters from "../components/request/ConvincedOrNotCounters.vue";
export default {
  components: {
    RequestResult,
    ConvincedOrNot,
    ConvincedOrNotCounters,
  },
  props: {
    // category: String,
  },
  methods: {
    reactToAddConvincedCounter() {
      console.log("reactToAddConvincedCounter");
    },
    reactToAddNotConvincedCounter() {
      console.log("reactToAddNotConvincedCounter");
    },
  },

  computed: {},
};
</script>

<style>
.input-send {
  max-width: 50%;
}
</style>
