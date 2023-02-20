<template>
  <section>
    <div class="wrapper">
      <header>Quote Generator</header>
      <base-spinner v-if="isLoading"></base-spinner>
      <div
        v-else
        class="content">
        <div class="quote-area">
          <!-- icon -->
          <p class="quote">{{ quote }}</p>
          <!-- icon -->
        </div>
        <div class="author">
          <span>__</span>
          <span class="name">{{ author }}</span>
        </div>
      </div>
      <div class="buttons">
        <button @click="getQuotes">Generate</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false,
        author: "",
        quote: "",
      };
    },
    methods: {
      async getQuotes() {
        this.isLoading = true;
        const quotes = await this.$store.dispatch("getQuotes");
        const num = quotes.length;
        console.log(quotes.length);
        const randomNum = Math.trunc(Math.random() * num + 1) - 1;

        const quote = {
          author: quotes[randomNum].author,
          quote: quotes[randomNum].quote,
        };
        this.quote = quote.quote;
        this.author = quote.author;
        this.isLoading = false;
      },
    },
    created() {
      this.getQuotes();
    },
  };
</script>

<style scoped>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #5372f0;
  }
  .wrapper {
    width: 605px;
    background: #fff;
    border-radius: 15px;
    padding: 30px 30px 25px;
    margin: 60px auto;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
  }
  header,
  .content :where(i, p, span) {
    color: #202842;
  }
  .wrapper header {
    font-size: 35px;
    font-weight: 600;
    text-align: center;
  }
  .wrapper .content {
    margin: 35px 0;
  }
  .content .quote-area {
    display: flex;
    justify-content: center;
  }
  .quote-area i {
    font-size: 15px;
  }
  .quote-area i:first-child {
    margin: 3px 10px 0 0;
  }
  .quote-area i:last-child {
    display: flex;
    margin: 0 0 3px 10px;
    align-items: flex-end;
  }
  .quote-area .quote {
    font-size: 22px;
    text-align: center;
    word-break: break-all;
  }
  .content .author {
    display: flex;
    font-size: 18px;
    margin-top: 20px;
    font-style: italic;
    justify-content: flex-end;
  }
  .author span:first-child {
    margin: -7px 5px 0 0;
    font-family: monospace;
  }
  .wrapper .buttons {
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: center;
  }

  .buttons button {
    margin-top: 20px;

    border: none;
    color: #fff;
    outline: none;
    font-size: 16px;
    cursor: pointer;
    padding: 13px 22px;
    border-radius: 30px;
    background-color: #5372f0;
  }
</style>
