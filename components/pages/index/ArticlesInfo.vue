<template>
  <section class="section-deepblue bg-body">
    <div class="waves-deepblue-top"></div>
    <div class="waves-deepblue-bottom"></div>
    <div class="container mx-auto">
      <div class="flex flex-col justify-center items-center text-center gap-6 md:px-0 lg:px-32">
        <h3 class="ft-h-bold text-white text-xl md:text-2xl font-bold leading-tight">Informasi Baru Setiap Hari</h3>
        <p class="text-secondary">Artikel mengenai investasi di berbagai instrumen seperti reksadana, saham, cryptocurrency bahkan gold.</p>
      </div>
      <div class="mt-8 grid grid-cols-1 grid-cols-1 md:grid-cols-3 gap-6">
        <nuxt-link :to="{ name: 'articles-slug', params: { slug: item.slug } }" v-for="(item, index) of articles" :key="index">
          <div class="relative bg-white shadow-lg hover:shadow-xl rounded-xl h-96">
            <img :src="item.img" :alt="item.alt" class="w-full h-48 object-cover rounded-xl">
            <div class="p-6 flex flex-col gap-4">
              <p class="flex gap-1">
                <span class="bg-primary text-white px-2 py-1 rounded capitalize text-sm truncate" v-for="(item_tag, index_tag) of item.tags" :key="index_tag">{{ item_tag }}</span>
              </p>
              <h3 class="ft-h-article text-body truncate">{{ item.title }}</h3>
              <p class="text-secondary text-sm"><i class="fi fi-clock mr-2"></i>{{ item.date }}</p>
            </div>
          </div>
        </nuxt-link>
      </div>
      <div class="mt-12 flex justify-center items-center">
        <button class="btn btn-primary" @click="LinkArticles()">Lihat Selengkapnya</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    this.GetContentArticles()
  },
  methods: {
    GetContentArticles: async function () {
      const articles = await this.$content('articles')
      .only(['title', 'date', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
      .sortBy('date', 'desc')
      .limit(3)
      .fetch();

      this.articles = articles
    },
    LinkArticles: function () {
      this.$router.push("articles")
    }
  }
}
</script>

<style>

</style>