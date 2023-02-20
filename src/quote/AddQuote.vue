<template>
  <section>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <label for="quote">Quote</label>
          <textarea
            id="quote"
            rows="5"
            v-model.trim="quote.val"></textarea>
        </div>
        <div class="form-control">
          <label for="author">Author</label>
          <input
            type="text"
            id="author"
            v-model.trim="author.val" />
        </div>
        <div class="form-control">
          <label for="genre">Genre</label>
          <input
            type="text"
            id="genre"
            v-model.trim="genre.val" />
        </div>
        <base-button>Add Quote</base-button>
      </form>
    </base-card>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        author: {
          val: "",
        },
        quote: {
          val: "",
          isValid: true,
        },
        genre: {
          val: "",
        },
        //formIsValid: true,
      };
    },
    methods: {
      submitForm() {
        const formData = {
          quote: this.quote.val,
          author: this.author.val ? this.author.val : "unknown",
          genre: this.genre.val ? this.genre.val : "unknown",
        };
        this.$store.dispatch("addQuote", formData);
        this.$router.replace("/quotes");
      },
    },
  };
</script>

<style scoped>
  section {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
  }
  .form-control {
    margin: 0.5rem 0;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input[type="checkbox"] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
  }

  input:focus,
  textarea:focus {
    background-color: #f0e6fd;
    outline: none;
    border-color: #3d008d;
  }
  button {
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
