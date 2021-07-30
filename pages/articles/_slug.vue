<template>
  <div class="site-content">
    <section class="relative pt-1">
      <div class="container mx-auto border-t border-secondary-hover py-8">
        <div class="flex gap-3">
          <nuxt-link to="/">Home</nuxt-link>
          <span>></span>
          <nuxt-link to="/articles">Artikel</nuxt-link>
          <span>></span>
          <span class="text-secondary truncate">{{ article.title }}</span>
        </div>
        <div class="mt-12 flex gap-16">
          <article id="article" class="article w-full lg:w-8/12 grid gap-6">
            <h2 class="ft-h-article">{{ article.title }}</h2>
            <p class="text-secondary">
              {{ article.date }}
            </p>
            <p class="flex gap-1">
              <span class="bg-primary text-white px-2 py-1 rounded capitalize text-sm" v-for="(item_tag, index_tag) of article.tags" :key="index_tag">{{ item_tag }}</span>
            </p>
            <img :src="article.img" :alt="article.alt" class="article-thumbnail" @click="lightboxTogglerClick()">
            <Lightbox :toggler="lightbox_toggler" :sources="article.img" :alt="article.alt"/>
            <nuxt-content :document="article" />
          </article>
          <div class="hidden lg:block w-full lg:w-4/12">
            <a href="https://bibit.id/" target="_blank">
              <img src="https://i.ibb.co/6RPpBjy/bibit-ad-mobile.jpg" alt="Ads" class="w-full">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Lightbox from '@/components/basics/Lightbox'
export default {
  layout: 'app',
  head() {
    return {
      title: this.article.title + ' - Uang Kerja',
      meta: [
        { hid: 'og:url', property:"og:url", content:"https://www.uangkerja.id/" + this.article.slug},
        { hid: 'og:title', property:"og:title", content:this.article.title + ' - Uang Kerja'},
        { hid: 'og:description', property:"og:description", content:this.article.description},
        { hid: 'og:image', property:"og:image", content:this.article.img},
      ],
    }
  },
  async asyncData({ $content, params, error }) {
    try {
      const article = await $content('articles', params.slug).fetch()
      return { article }
    }
    catch (err) {
      error({ statusCode: 404, message: "Post not found" })
    }
  },
  components: { Lightbox },
  data() {
    return {
      lightbox_toggler: false
    };
  },
  methods: {
    lightboxTogglerClick: function () {
      this.lightbox_toggler = !this.lightbox_toggler
    }
  }
}
</script>