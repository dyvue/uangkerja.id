export default async ($content, params, error) => {
  const currentPage = parseInt(params.page);
  const perPage = 6;
  let allArticles = []

  if (params.search) {
    allArticles = await $content('articles')
    .search(params.search)
    .only(['title', 'date', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
    .sortBy('date', 'desc')
    .fetch();
  }
  else {
    allArticles = await $content('articles')
    .only(['title', 'date', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
    .sortBy('date', 'desc')
    .fetch();
  }

  const totalArticles = allArticles.length;

  // use Math.ceil to round up to the nearest whole number
  const lastPage = Math.ceil(totalArticles / perPage);

  // use the % (modulus) operator to get a whole remainder
  const lastPageCount = (totalArticles % perPage);

  const skipNumber = () => {
    if (currentPage === 1) {
      return 0;
    }
    // if (currentPage === lastPage) {
    //   return totalArticles - perPage;
    // }
    return (currentPage - 1) * perPage;
  };

  let paginatedArticles = []
  if (params.search) {
    paginatedArticles = await $content("articles")
    .search(params.search)
    .only(['title', 'date', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
    .sortBy('date', 'desc')
    .skip(skipNumber())
    .limit(perPage)
    .fetch();
  }
  else {
    paginatedArticles = await $content("articles")
    .only(['title', 'date', 'description', 'img', 'alt', 'slug', 'tags', 'author'])
    .sortBy('date', 'desc')
    .skip(skipNumber())
    .limit(perPage)
    .fetch();
  }

  if (currentPage === 0 || !paginatedArticles.length) {
    return error({ statusCode: 404, message: "No articles found!" });
  }

  return {
    allArticles,
    paginatedArticles,
  };
};