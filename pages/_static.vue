<template>
  <div>
    <section class="section-standart bg-body">
      <div class="waves-deepblue-bottom"></div>
      <div class="container mx-auto px-4 text-center">
        <h2 class="ft-h-bold text-white text-5xl font-bold leading-tight">{{ $route.params.static }}</h2>
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
