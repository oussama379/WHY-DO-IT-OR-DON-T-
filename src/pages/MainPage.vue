<template>
  <base-card>
    <h3>
      <ul style="list-style-type: none">
        <li>1- Choose a category ✔️</li>
        <br />
        <li>2- Type a specific thing in that category ⌨️</li>
        <br />
        <li>
          3- Let the AI convince that you
          <el-switch
            @change="changeShould"
            v-model="isShould"
            class="ml-2"
            inline-prompt
            style="
              --el-switch-on-color: #13ce66;
              --el-switch-off-color: #ff4949;
            "
            active-text="Should"
            inactive-text="Should Not"
          />
          do that thing 🤖
        </li>
        <br />
        Enjoy 😜
      </ul>
    </h3>
  </base-card>
  <br />
  <router-view></router-view>
</template>

<script>
import BaseCard from "../components/ui/BaseCard.vue";
export default {
  data() {
    return {};
  },
  computed: {
    isShould() {
      return this.$store.getters.isShould;
    },
  },
  components: {
    BaseCard,
  },
  watch: {},
  methods: {
    changeShould() {
      this.$store.commit("changeShould");
    },
  },
};
</script>

<style></style>
