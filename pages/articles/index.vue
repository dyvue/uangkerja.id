<template>
  <div class="site-content">
    <section class="section-standart bg-body">
      <div class="waves-deepblue-bottom"></div>
      <div class="container mx-auto px-4 text-center grid gap-6">
        <h2 class="ft-h-bold text-white text-3xl lg:text-5xl font-bold leading-tight">Artikel Uang Kerja</h2>
        <p class="text-secondary italic">Berita terbaru tentang personal finance, investasi di Indonesia.</p>
      </div>
    </section>
    <section class="section-standart mt-12 lg:mt-8">
      <div class="container mx-auto">
        <div class="flex flex-col-reverse lg:flex-row items-start gap-8 lg:gap-16">
          <div class="w-full lg:w-8/12">
            <div class="mb-8" v-if="search.submit && search.query_result">
              <p>
                Search query: <span class="italic font-bold">{{ search.query_result }}</span>
              </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <nuxt-link :to="{ name: 'articles-slug', params: { slug: item.slug } }" v-for="(item, index) of paginated_articles" :key="index">
                <div class="shadow-lg hover:shadow-xl rounded-xl h-96">
                  <img :src="item.img" :alt="item.alt" class="w-full h-48 object-cover rounded-xl">
                  <div class="p-6 flex flex-col gap-4">
                    <p class="flex items-center justify-start gap-1">
                      <span class="bg-primary text-white px-2 py-1 rounded capitalize text-sm truncate" v-for="(item_tag, index_tag) of item.tags" :key="index_tag">{{ item_tag }}</span>
                    </p>
                    <h3 class="ft-h-article text-body truncate">{{ item.title }}</h3>
                    <p class="text-secondary text-sm"><i class="fi fi-clock mr-2"></i>{{ item.date }}</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
            <div class="mt-8 flex justify-end items-center">
              <Pagination :total="articles.length" :perPage="6" v-on:paginationEvent="paginationEvent()"/>
            </div>
          </div>
          <div class="w-full lg:w-4/12">
            <div class="pb-0 lg:pb-8">
              <form v-on:submit.prevent="searchFlow">
                <ArticleSearch v-model="search.query"/>
              </form>
            </div>
            <a href="https://bibit.id/" target="_blank" class="hidden lg:block">
              <img src="https://i.ibb.co/6RPpBjy/bibit-ad-mobile.jpg" alt="Ads" class="w-full">
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import getContent from "@/utils/getContent"
import ArticleSearch from '@/components/basics/ArticleSearch'
import Pagination from '@/components/basics/Pagination'
export default {
  layout: 'app',
  head: {
    title: 'Artikel - Uang Kerja',
  },
  async asyncData({ $content, query, error }) {
    try {
      const content = await getContent($content, query, error);
      return {
        articles: content.allArticles,
        paginated_articles: content.paginatedArticles,
      };
    }
    catch (err) {
      error(err)
    }
  },
  components: { ArticleSearch, Pagination },
  data() {
    return {
      search: {
        query: '',
        query_result: '',
        submit: false
      },
    }
  },
  methods: {
    searchFlow: async function () {
      this.search.submit = true
      this.search.query_result = this.search.query
      const query = this.$route.query
      query.search = this.search.query
      const content = await getContent(this.$content, query, this.$nuxt.error);
      this.articles = content.allArticles
      this.paginated_articles = content.paginatedArticles
    },
    paginationEvent: async function () {
      const content = await getContent(this.$content, this.$route.query, this.$nuxt.error);
      this.articles = content.allArticles
      this.paginated_articles = content.paginatedArticles
    } 
  }
}
</script>