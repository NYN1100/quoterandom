<template>
  <section>
    <!-- <router-view></router-view> -->
    <div class="wrapper">
      <header>Quote detils</header>
      <div class="content">
        <div class="quote-area">
          <!-- icon -->
          <p class="quote">" {{ quote }}"</p>
          <!-- icon -->
        </div>
        <div class="author">
          <span>__</span>
          <span class="name"> {{ author }}</span>
        </div>
        <div class="genre">
          <span class="genre">{{ genre }} </span>
        </div>
      </div>
      <div class="buttons">
        <button @click="getBack">Back</button>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ["id"],
    data() {
      return {
        selectedQuote: null,
      };
    },
    computed: {
      quote() {
        return this.selectedQuote.quote;
      },
      author() {
        return this.selectedQuote.author;
      },
      genre() {
        return this.selectedQuote.genre;
      },
    },
    methods: {
      getBack() {
        this.$router.replace("/quotes");
        // const quotes = this.$store.getters.quotes;
        // quotes.find((quote) => quote.id === +this.id)
      },
    },
    created() {
      this.selectedQuote = this.$store.getters.quotes.find(
        (quote) => quote.id === +this.id
      );
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
