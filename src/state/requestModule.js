const requestModule = {
  state: {},
  mutations: {
    sendRequestToGptApi(state, payload) {
      console.log("Payload: " + payload.category.categoryPhraseForShouldNot);
    },
    sendAnotherRequestToGptApi(state, payload) {
      console.log("Payload: " + payload.category.categoryPhraseForShouldNot);
    },
    saveAnswer() {},
  },
  actions: {},
  getters: {},
};

module.exports = requestModule;
