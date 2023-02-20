<template>
  <li>
    <p>{{ quote }}</p>
    <h5>--{{ author }}</h5>
    <div class="view-details">
      <button><router-link :to="QuoteDetails">View</router-link></button>
    </div>
  </li>
</template>

<script>
  export default {
    props: ["author", "id", "quote"],
    computed: {
      QuoteDetails() {
        return this.$route.path + "/" + this.id;
      },
    },
  };
</script>

<style scoped>
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border: 1px solid #fff;
    border-radius: 12px;
    padding-right: 0;
    padding-left: 20px;
    background-color: #fff;
    list-style: none;
    min-height: 20vh;
    max-width: 60vw;
  }

  h5 {
    margin: 0.5rem 0;
  }

  div {
    margin: 0.5rem 0;
  }

  .view-details {
    display: flex;

    justify-content: flex-start;
  }

  button,
  a {
    text-decoration: none;
    border: none;
    color: #fff;
    outline: none;
    font-size: 13px;
    cursor: pointer;
    padding: 11px 22px;
    border-radius: 30px;
    background-color: #5372f0;
  }
</style>
