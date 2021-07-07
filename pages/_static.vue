<template>
  <div>
    <section class="bg-body py-24">
      <div class="container mx-auto px-4 text-center">
        <h2 class="ft-h text-white text-xl uppercase">{{ $route.params.static }}</h2>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  layout: 'app',
  async asyncData({ params, error, redirect, store }) {
    const id = params.static;
    // const stores = await store.dispatch("api/transaction/show", id);
    // if (stores.responses.transaction.data) {
    return true;
    // } else error({ statusCode: 404, message: "Post not found" });
  },
}
</script>
