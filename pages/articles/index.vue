<template>
  <div class="site-content">
    <section class="section-standart bg-body">
      <div class="waves-deepblue-bottom"></div>
      <div class="container mx-auto px-4 text-center">
        <h2 class="ft-h-bold text-white text-3xl lg:text-5xl font-bold leading-tight">Artikel dan Berita</h2>
      </div>
    </section>
    <section class="section-standart mt-24 lg:mt-0">
      <div class="container mx-auto">
        <div class="flex items-start gap-16">
          <div class="w-full lg:w-8/12">
            <div class="mb-8" v-if="search.submit && search.query_result">
              <p>
                Search query: <span class="italic font-bold">{{ search.query_result }}</span>
              </p>
            </div>
            <div class="mt-8">
              <button v-for="pageNumber in totalPages" :key="pageNumber.id" class="w3-button" @click="setPage(pageNumber)" :class="{current: currentPage === pageNumber, last: (pageNumber == totalPages && Math.abs(pageNumber - currentPage) > 3), first:(pageNumber == 1 && Math.abs(pageNumber - currentPage) > 3)}">{{ pageNumber }} </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <nuxt-link :to="'articles/'+item.slug" v-for="(item, index) of articles" :key="index">
                <div class="shadow-lg hover:shadow-xl rounded-xl h-96">
                  <img :src="item.img" :alt="item.alt" class="w-full h-48 object-cover rounded-xl">
                  <div class="p-6 flex flex-col gap-4">
                    <p class="flex gap-1">
                      <span class="bg-primary text-white px-2 py-1 rounded capitalize text-sm" v-for="(item_tag, index_tag) of item.tags" :key="index_tag">{{ item_tag }}</span>
                    </p>
                    <h3 class="ft-h-article text-body truncate">{{ item.title }}</h3>
                    <p class="text-secondary text-sm"><i class="fi fi-clock mr-2"></i>{{ item.date }}</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
          <div class="hidden lg:block w-full lg:w-4/12">
            <div class="pb-8">
              <form v-on:submit.prevent="searchFlow">
                <ArticleSearch v-model="search.query"/>
              </form>
            </div>
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
import ArticleSearch from '@/components/basics/ArticleSearch'
export default {
  layout: 'app',
  async asyncData({ $content }) {
    const articles = await $content('articles')
      .only(['title', 'date', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
      .sortBy('date', 'desc')
      .fetch()
    return {
      articles
    }
  },
  components: { ArticleSearch },
  data() {
    return {
      search: {
        query: '',
        query_result: '',
        submit: false
      },
      currentPage: 1,
      itemsPerPage: 1,
      resultCount: 0
    }
  },
  methods: {
    searchFlow: async function () {
      this.search.submit = true
      this.search.query_result = this.search.query
      const articles = await this.$content('articles')
      .search(this.search.query)
      .only(['title', 'date', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
      .sortBy('date', 'desc')
      .fetch()
      this.articles = articles
    },
    setPage: function(pageNumber) {
      this.currentPage = pageNumber
    },
  },
  computed: {
    totalPages: function() {
      if (this.resultCount == 0){
        return 1
      }
      else {
      return Math.ceil(this.resultCount / this.itemsPerPage)
    }
    },
    paginate: function() {
        if (!this.articles || this.articles.length != this.articles.length) {
            return
        }
        this.resultCount = this.articles.length
        if (this.currentPage >= this.totalPages) {
          this.currentPage = this.totalPages
        }
        var index = this.currentPage * this.itemsPerPage - this.itemsPerPage
        return this.articles.slice(index, index + this.itemsPerPage)
    }
  },
}
</script>

<style lang="css">
.current {
color: teal;
}
</style>