<template>
  <base-card>
    <el-col>
      <h1>
        {{ answer.requestPhrase }}
        <!-- Convince me to watch Annette -->
      </h1>
      <p>
        {{ answer.answer }}
        <!-- If you're looking for a movie that's unique, thought-provoking, and
        emotionally impactful, then "Annette" might just be the film for you.
        Firstly, the movie is a musical drama directed by Leos Carax, who is
        known for his visually stunning and emotionally charged films. The movie
        stars Adam Driver and Marion Cotillard in lead roles, both of whom
        deliver excellent performances. Secondly, the film's story is original
        and unusual. It follows the lives of a stand-up comedian and an opera
        singer who fall in love and have a child with a unique gift. The movie
        explores themes of love, sacrifice, parenthood, and the price of fame.
        Thirdly, "Annette" features a beautiful and haunting soundtrack composed
        by the American rock band Sparks. The music is an integral part of the
        movie and adds an extra layer of emotion and depth to the story.
        Overall, "Annette" is a film that will make you think and feel deeply.
        It's an immersive experience that will stay with you long after the
        credits roll. So if you're a fan of unique and challenging films,
        "Annette" is definitely worth watching. -->
      </p>
    </el-col>
    <el-row>
      <el-button type="info">Request Another Answer</el-button>
      <el-button type="success">Save Answer</el-button>
    </el-row>
  </base-card>
</template>

<script>
import BaseCard from "../../components/ui/BaseCard.vue";
export default {
  components: {
    BaseCard,
  },
  props: {
    // title: String,
    // answer: String,
  },
  computed: {
    answer() {
      console.log(this.$store.getters.lastAnswer);
      return this.$store.getters.lastAnswer;
    },
    // ...mapGetters(["lastAnswer"]),
  },
};
</script>

<style></style>
