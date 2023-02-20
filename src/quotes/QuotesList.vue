<template>
  <section>
    <div class="controls">
      <button><router-link to="/addquote">Add Quote</router-link></button>
      <quote-filter @change-filter="setFilters"></quote-filter>
    </div>
    <base-spinner v-if="isLoading"></base-spinner>
    <ul v-if="!isLoading">
      <quote-item
        v-for="quote in filteredQuotes"
        :key="quote.id"
        :author="quote.author"
        :id="quote.id"
        :quote="quote.quote"></quote-item>
    </ul>
  </section>
</template>

<script>
  import QuoteItem from "./QuoteItem.vue";
  import QuoteFilter from "./QuoteFilter.vue";

  export default {
    components: {
      QuoteItem,
      QuoteFilter,
    },
    data() {
      return {
        isLoading: false,
        activeFilters: {
          autobiographical: true,
          unknown: true,
        },
      };
    },
    computed: {
      filteredQuotes() {
        const quotes = this.$store.getters.quotes;

        const filters = quotes.filter((quote) => {
          if (this.activeFilters.unknown && quote.genre === "unknown") {
            return true;
          }
          if (
            this.activeFilters.autobiographical &&
            quote.genre === "Autobiographical"
          ) {
            return true;
          }
          return false;
        });

        return filters;
      },
    },
    methods: {
      setFilters(updatedFilters) {
        this.activeFilters = updatedFilters;
      },
      async loadQuotes() {
        this.isLoading = true;
        try {
          await this.$store.dispatch("getQuotes");
        } catch (err) {
          console.log(err);
        }
        this.isLoading = false;
      },
    },
    created() {
      this.loadQuotes();
    },
    mounted() {
      this.loadQuotes();
    },
  };
</script>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 30vh;
    justify-content: center;
    max-width: 40rem;
  }

  .controls {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
    display: flex;
    justify-content: flex-end;
    background-color: #fff;
  }
  button,
  a {
    text-decoration: none;
    padding: 0.5rem 1rem;
    font: inherit;
    background-color: #3a0061;
    border: 1px solid #3a0061;
    color: white;
    cursor: pointer;
    border-radius: 30px;
    margin-right: 0.5rem;
    display: inline-block;
  }
</style>
