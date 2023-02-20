export default {
  setQuotes(state, payload) {
    state.quotes = payload;
  },
  addQuote(state, payload) {
    state.quotes.push(payload);
  },
};
