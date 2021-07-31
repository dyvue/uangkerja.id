<template>
  <div class="site-content">
    <section class="relative pt-1">
      <div class="container mx-auto border-t border-secondary-hover py-8">
        <div class="flex gap-3">
          <nuxt-link to="/">Home</nuxt-link>
          <span>></span>
          <nuxt-link to="/articles">Berita dan Artikel</nuxt-link>
          <span>></span>
          <span class="text-secondary truncate">{{ article.title }}</span>
        </div>
        <div class="mt-12 flex gap-16">
          <article id="article" class="article w-full lg:w-8/12 grid gap-6">
            <h2 class="ft-h-article">{{ article.title }}</h2>
            <p class="text-secondary">
              {{ article.date }} by {{ article.author }}
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
import utilsGetSiteMeta from '~/utils/getSiteMeta.js'
import Lightbox from '@/components/basics/Lightbox'
export default {
  layout: 'app',
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.article.title + ' - Uang Kerja',
        description: this.article.description,
        mainImage: this.article.img,
        url: "https://www.uangkerja.id/articles/" + this.article.slug,
      };
      return utilsGetSiteMeta(metaData);
    }
  },
  head() {
    return {
      title: this.article.title + ' - Uang Kerja',
      meta: [
        ...this.meta,
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: "https://www.uangkerja.id/articles/" + this.article.slug,
        },
      ],
    };
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