<template>
  <base-card>
    <div>
      <span class="filter-option">
        <input
          type="checkbox"
          id="unknown"
          checked
          @change="setFilter" />
        <label for="unknown">Unknown</label>
      </span>
    </div>
  </base-card>
</template>

<script>
  export default {
    emits: ["change-filter"],
    data() {
      return {
        filters: {
          autobiographical: true,
          unknown: true,
        },
      };
    },
    methods: {
      setFilter(event) {
        const inputId = event.target.id;
        const isActive = event.target.checked;
        const updatedFilters = {
          ...this.filters,
          [inputId]: isActive,
        };
        this.filters = updatedFilters;
        this.$emit("change-filter", updatedFilters);
      },
    },
  };
</script>

<style scoped>
  div {
    background-color: #fff;
  }

  h2 {
    margin: 0.5rem 0;
  }

  .filter-option {
    margin-right: 1rem;
  }

  .filter-option label,
  .filter-option input {
    vertical-align: middle;
  }

  .filter-option label {
    margin-left: 0.25rem;
  }

  .filter-option.active label {
    font-weight: bold;
  }
</style>
