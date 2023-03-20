const categoryModule = {
  state: {
    selectedCategory: {},
    categories: [
      {
        categoryName: "Movie Watching",
        categoryPhraseForShould: "Convince me to WATCH",
        categoryPhraseForShouldNot: "Convince me to NOT WATCH",
        categoryInputPhrase: "The Name Of The Movie",
      },
      {
        categoryName: "Book Reading",
        categoryPhraseForShould: "Convince me to READ",
        categoryPhraseForShouldNot: "Convince me to NOT READ",
        categoryInputPhrase: "The Name Of The Book",
      },
      {
        categoryName: "Restaurant Dining",
        categoryPhraseForShould: "Convince me to EAT THERE",
        categoryPhraseForShouldNot: "Convince me to NOT EAT THERE",
        categoryInputPhrase: "The Name of the Restaurant",
      },
      {
        categoryName: "TV Show Binging",
        categoryPhraseForShould: "Convince me to WATCH",
        categoryPhraseForShouldNot: "Convince me to NOT WATCH",
        categoryInputPhrase: "The Name of the TV Show",
      },
      {
        categoryName: "Workout Routine",
        categoryPhraseForShould: "Convince me to DO IT",
        categoryPhraseForShouldNot: "Convince me to NOT DO IT",
        categoryInputPhrase: "The Name of the Workout Routine",
      },
      {
        categoryName: "Music Album Listening",
        categoryPhraseForShould: "Convince me to LISTEN",
        categoryPhraseForShouldNot: "Convince me to NOT LISTEN",
        categoryInputPhrase: "The Name of the Music Album",
      },
      {
        categoryName: "Video Game Playing",
        categoryPhraseForShould: "Convince me to PLAY",
        categoryPhraseForShouldNot: "Convince me to NOT PLAY",
        categoryInputPhrase: "The Name of the Video Game",
      },
      {
        categoryName: "Movie Streaming Service Subscription",
        categoryPhraseForShould: "Convince me to SUBSCRIBE",
        categoryPhraseForShouldNot: "Convince me to NOT SUBSCRIBE",
        categoryInputPhrase: "The Name of the Streaming Service",
      },
      {
        categoryName: "Hobby Pursuit",
        categoryPhraseForShould: "Convince me to PURSUE",
        categoryPhraseForShouldNot: "Convince me to NOT PURSUE",
        categoryInputPhrase: "The Name of the Hobby",
      },
      {
        categoryName: "Career Path",
        categoryPhraseForShould: "Convince me to PURSUE",
        categoryPhraseForShouldNot: "Convince me to NOT PURSUE",
        categoryInputPhrase: "The Name of the Career Path",
      },
      {
        categoryName: "Outdoor Activity",
        categoryPhraseForShould: "Convince me to DO IT",
        categoryPhraseForShouldNot: "Convince me to NOT DO IT",
        categoryInputPhrase: "The Name of the Outdoor Activity",
      },
      {
        categoryName: "Musical Instrument Learning",
        categoryPhraseForShould: "Convince me to LEARN",
        categoryPhraseForShouldNot: "Convince me to NOT LEARN",
        categoryInputPhrase: "The Name of the Musical Instrument",
      },
      {
        categoryName: "Creative Project Pursuit",
        categoryPhraseForShould: "Convince me to PURSUE",
        categoryPhraseForShouldNot: "Convince me to NOT PURSUE",
        categoryInputPhrase: "The Name of the Creative Project",
      },
      {
        categoryName: "Volunteer Work",
        categoryPhraseForShould: "Convince me to DO IT",
        categoryPhraseForShouldNot: "Convince me to NOT DO IT",
        categoryInputPhrase: "The Name of the Volunteer Work",
      },
      {
        categoryName: "Podcast Listening",
        categoryPhraseForShould: "Convince me to LISTEN",
        categoryPhraseForShouldNot: "Convince me to NOT LISTEN",
        categoryInputPhrase: "The Name of the Podcast",
      },
      {
        categoryName: "Language Learning",
        categoryPhraseForShould: "Convince me to LEARN",
        categoryPhraseForShouldNot: "Convince me to NOT LEARN",
        categoryInputPhrase: "The Name of the Language",
      },
    ],
  },
  mutations: {
    setSelectedCategory(state, payload) {
      state.selectedCategory = payload.selectedCategory;
    },
    getCategories(state, payload) {
      console.log("Payload: " + payload.category.categoryPhraseForShouldNot);
    },
    saveCategory(state, payload) {
      console.log("Payload: " + payload.category.categoryPhraseForShouldNot);
    },
    updateCategory(state, payload) {
      console.log("Payload: " + payload.category.categoryPhraseForShouldNot);
    },
    deleteCategory(state, payload) {
      console.log("Payload: " + payload.category.categoryPhraseForShouldNot);
    },
  },
  actions: {},
  getters: {
    categories(state) {
      return state.categories;
    },
    selectedCategory(state) {
      return state.selectedCategory;
    },
  },
};

module.exports = categoryModule;
