<template>
  <div class="site-content">
    <section class="py-24 relative bg-white-hover">
      <div class="waves-deepwhite-bottom"></div>
      <div class="container mx-auto px-4 text-center">
        <h2 class="ft-h-bold text-primary text-3xl lg:text-4xl font-bold leading-tight">Pemula Reksadana</h2>
      </div>
    </section>
    <section class="section-standart">
      <div class="container mx-auto">
        <div class="flex items-start gap-16">
          <div class="w-full md:w-8/12 grid grid-cols-2 gap-6">
            <nuxt-link :to="'articles/'+item.slug" v-for="(item, index) of articles" :key="index">
              <div class="shadow-lg hover:shadow-xl rounded-xl h-96">
                <img :src="item.img" :alt="item.alt" class="w-full h-48 object-cover rounded-xl">
                <div class="p-6 flex flex-col gap-8">
                  <h3 class="ft-h-article">{{ item.title }}</h3>
                  <p class="text-secondary text-sm"><i class="fi fi-clock mr-2"></i>{{ item.date }}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="w-full md:w-4/12">
            <a href="https://bibit.id/" target="_blank">
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
    const articles = await $content('articles')
      .only(['title', 'date', 'description', 'img', 'alt', 'slug', 'author'])
      .sortBy('date', 'desc')
      .fetch()
    return {
      articles
    }
  }
}
</script>
