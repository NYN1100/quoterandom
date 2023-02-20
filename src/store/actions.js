export default {
  async addQuote(context, data) {
    const userId = new Date().getTime();
    const quote = {
      quote: data.quote,
      author: data.author,
      genre: data.genre,
      date: new Date().getTime(),
    };

    const response = await fetch(
      `https://random-quoute-default-rtdb.firebaseio.com/${userId}.json`,
      {
        method: "PUT",
        body: JSON.stringify(quote),
      }
    );

    if (!response.ok) {
      //error...
    }

    context.commit("addQuote", quote);
  },

  async getQuotes(context) {
    const response = await fetch(
      "https://random-quoute-default-rtdb.firebaseio.com/.json"
    ).then((res) => res.json());
    const quotes = [];

    for (const res in response) {
      const quote = {
        id: response[res].date,
        date: response[res].date,
        quote: response[res].quote,
        author: response[res].author,
        genre: response[res].genre,
      };
      quotes.push(quote);
    }
    context.commit("setQuotes", quotes);

    
    return quotes;
  },
};
