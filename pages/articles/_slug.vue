<template>
  <div class="site-content">
    <section class="py-24 relative bg-white-hover">
      <div class="waves-deepwhite-bottom"></div>
      <div class="container mx-auto px-4 text-center">
        <h2 class="ft-h-bold text-primary text-3xl lg:text-4xl font-bold leading-tight">{{ article.hero }}</h2>
      </div>
    </section>
    <section class="section-standart">
      <div class="container mx-auto">
        <div class="flex gap-16">
          <article class="article w-full md:w-8/12 grid gap-6">
            <h2 class="ft-h-article">{{ article.title }}</h2>
            <p class="text-secondary">{{ article.date }}</p>
            <img :src="article.img" :alt="article.alt" class="article-thumbnail">
            <nuxt-content :document="article" />
          </article>
          <div class="w-full md:w-4/12">
            <a href="https://irfan.id/aplikasi-bibit-reksadana/" target="_blank">
              <img src="https://i.ibb.co/6RPpBjy/bibit-ad-mobile.jpg" alt="Ads">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  layout: 'app',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    if (article) {
      return { article }
    } else error({ statusCode: 404, message: "Post not found" });
  }
}
</script>
