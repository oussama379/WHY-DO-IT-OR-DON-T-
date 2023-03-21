const requestModule = {
  state: {
    convincedOrNotCounter: {
      convinced: 0,
      notConvinced: 0,
    },
    lastAnswer: {
      categoryName: "",
      requestPhrase: "",
      answer: "",
    },
    requests: [
      {
        id: 1,
        categoryName: "Movie Watching",
        requestPhrase: " Convince me to watch Annette",
        answer: `you're looking for a movie that's unique, thought-provoking, and
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
        "Annette" is definitely worth watching.`,
      },
      {
        id: 2,
        categoryName: "Movie Watching",
        requestPhrase: " Convince me to watch Annette",
        answer: `you're looking for a movie that's unique, thought-provoking, and
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
        "Annette" is definitely worth watching.`,
      },
    ],
  },
  mutations: {
    setAnswer(state, payload) {
      state.lastAnswer.categoryName = payload.categoryName;
      state.lastAnswer.requestPhrase = payload.requestPhrase;
      state.lastAnswer.answer = payload.answer;
    },
    sendAnotherRequestToGptApi(state, payload) {
      console.log("Payload: " + payload.category.categoryPhraseForShouldNot);
    },
    saveAnswer() {},
  },
  actions: {
    async sendRequestToGptApi(context, payload) {
      context.commit("changeLoading");
      const response = await fetch(process.env.VUE_APP_GPT_API_URL, {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
          "X-API-KEY": process.env.VUE_APP_GPT_API_KEY,
        },
        body: JSON.stringify({
          enable_google_results: "true",
          enable_memory: false,
          input_text: payload.requestPhrase,
        }),
      });
      const responseData = await response.json();

      if (!response.ok) {
        const error = new Error(responseData.message || "failed to fetch!");
        throw error;
      }

      context.commit("setAnswer", {
        answer: responseData.message,
        categoryName: payload.categoryName,
        requestPhrase: payload.requestPhrase,
      });
    },
  },
  getters: {
    requests: (state) => state.requests,
    lastAnswer: (state) => state.lastAnswer,
    convincedOrNotCounter: (state) => state.convincedOrNotCounter,
  },
};

module.exports = requestModule;
