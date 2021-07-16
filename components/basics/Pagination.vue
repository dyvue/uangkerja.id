<template>
  <div>
    <span v-if="currentPage === 1" class="text-body bg-secondary-hover rounded py-2 px-4 mx-1">
      First
    </span>

    <nuxt-link
      v-else
      :to="{ name: 'articles', query: { page: 1 } }"
      class="text-white bg-primary rounded py-2 px-4 mx-1"
    >
      First
    </nuxt-link>

    <span v-if="currentPage === 1" class="text-body bg-secondary-hover rounded py-2 px-4 mx-1">
      Prev
    </span>

    <nuxt-link
      v-else
      :to="{ name: 'articles', query: { page: prevPage } }"
      class="text-white bg-primary rounded py-2 px-4 mx-1"
    >
      Prev
    </nuxt-link>

    <span v-if="currentPage === totalPages" class="text-body bg-secondary-hover rounded py-2 px-4 mx-1">
      Next
    </span>

    <nuxt-link
      v-else
      :to="{ name: 'articles', query: { page: nextPage } }"
      class="text-white bg-primary rounded py-2 px-4 mx-1"
    >
      Next
    </nuxt-link>

    <span v-if="currentPage === totalPages" class="text-body bg-secondary-hover rounded py-2 px-4 mx-1">
      Last
    </span>

    <nuxt-link
      v-else
      :to="{ name: 'articles', query: { page: totalPages } }"
      class="text-white bg-primary rounded py-2 px-4 mx-1"
    >
      Last
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    total: {
      type: Number,
      default: 0,
    },
    perPage: {
      type: Number,
      default: 6,
    },
  },
  computed: {
    totalPages() {
      const modulus = Math.floor(this.total % this.perPage);
      let division = Math.floor(this.total / this.perPage);
      if (modulus > 0) {
        division = Math.floor(this.total / this.perPage) + 1;
      }
      return division
    },
    currentPage() {
      this.$emit('paginationEvent')
      return parseInt(this.$route.query.page) || 1;
    },
    prevPage() {
      this.$emit('paginationEvent')
      return this.currentPage > 1 ? this.currentPage - 1 : 1;
    },
    nextPage() {
      this.$emit('paginationEvent')
      return this.currentPage < this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    },
  },
}
</script>