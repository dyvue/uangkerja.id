<template>
  <div class="relative">
    <input
      v-model="search_q"
      type="search"
      autocomplete="off"
      placeholder="Search..."
      class="form-input"
      @input="handleInput"
    />
    <ul v-if="articles.length" class="form-input-article-recommend">
      <li v-for="(item, index) of articles" :key="index" class="flex items-center gap-2 p-2 hover:bg-white-hover">
        <img :src="item.img" :alt="item.title" class="w-12 rounded">
        <nuxt-link
          :to="{ name: 'articles-slug', params: { slug: item.slug } }"
          class="text-body"
        >
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  prop: ['value'],
  data() {
    return {
      search_q: this.value,
      articles: [],
    };
  },
  watch: {
    async search_q(search_q) {
      if (!search_q) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("articles")
        .search(search_q)
        .only(['title', 'date', 'img', 'alt', 'slug'])
        .sortBy('date', 'desc')
        .limit(5)
        .fetch()
    },
  },
  methods: {
    handleInput (e) {
      this.$emit('input', this.search_q)
    }
  }
};
</script>