<template>
  <div class="w-full">
    <section class="relative py-16" style="background-image: url(https://i.ibb.co/GpkQB44/Untitled-design-2-1.png); background-size: cover">
      <div class="container mx-auto">
        <div class="grid gap-6">
          <div class="grid gap-2 text-center">
            <h1 class="ft-h font-bold leading-normal text-2xl"># ruang kelas</h1>
            <p class="text-xs md:text-base">Netflixnya ekonomi dan investasi.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="relative my-8">
      <div class="container mx-auto">
        <div class="relative overflow-auto fullwidth-mobile">
          <div class="inline-flex gap-2 md:gap-3 mx-5 md:mx-0">
            <button class="catalog catalog-active">Featured</button>
            <button class="catalog">Reksadana</button>
            <button class="catalog">Saham</button>
            <button class="catalog">Cryptocurrency</button>
          </div>
        </div>
        <br>
        <div class="grid gap-6">
          <h3 class="ft-h font-bold text-lg md:text-xl text-white">mentor terbaik</h3>
          <div class="relative overflow-x-auto fullwidth-mobile">
            <div class="inline-flex pb-3 gap-5 md:gap-3 mx-5 md:mx-0">
              <nuxt-link :to="{ name: 'classroom-slug', params: { slug: item.slug } }" v-for="(item, index) of classroom" :key="index">
                <div class="bg-dark-mode shadow-lg rounded-2xl w-48 h-64">
                  <template v-if="item.img">
                    <img :src="item.img" :alt="item.title" class="w-full h-32 object-cover rounded-2xl">
                  </template>
                  <template v-else>
                    <img src="https://muamalat-institute.com/wp-content/uploads/2021/05/placeholder.png" :alt="item.title" class="w-full h-48 object-cover rounded-2xl">
                  </template>
                  <div class="p-4 flex flex-col gap-2">
                    <div class="inline-flex gap-2">
                      <i v-for="index of 5" :key="index" class="fi fi-star text-white text-xs md:text-sm"></i>
                    </div>
                    <h3 class="ft-h-article text-white truncate text-base md:text-lg">{{ item.title }}</h3>
                    <p class="text-white-hover text-xs md:text-sm"><i class="fi fi-hipchat mr-2"></i>{{ item.content.length }} Konten Aktif</p>
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="grid gap-6">
          <h3 class="ft-h font-bold text-lg md:text-xl text-white">kamu harus tonton</h3>
          <div class="grid gap-6 fullwidth-mobile">
            <nuxt-link :to="{ name: 'classroom-vid-slug', params: { slug: item.slug } }" v-for="(item, index) of best_videos" :key="index">
              <div class="bg-dark-mode w-full">
                <template v-if="item.img">
                  <img :src="item.img" :alt="item.title" class="w-full h-52 object-cover">
                </template>
                <template v-else>
                  <img src="https://muamalat-institute.com/wp-content/uploads/2021/05/placeholder.png" :alt="item.title" class="w-full h-64 object-cover">
                </template>
                <div class="p-3 md:py-4 flex flex-col">
                  <div class="flex gap-3 md:gap-6">
                    <img :src="item.creator.img" :alt="item.creator.title" class="w-10 md:w-12 h-10 md:w-12 object-cover rounded-full">
                    <div>
                      <h3 class="ft-h-article text-white text-sm md:text-base lg:text-lg">{{ item.title }}</h3>
                      <span class="text-white text-xs md:text-sm">
                        {{ item.creator.title }}
                        |
                        {{ item.creator.description }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'app-classroom',
  head: {
    title: 'Ruang Kelas - Uang Kerja',
  },
  async asyncData({ $content, query, error }) {
    try {
      const classroom = await $content("classroom")
        .sortBy('id', 'desc')
        .fetch();
      const best_videos = await $content("classroom/best-videos")
        .sortBy('id', 'desc')
        .fetch();
      return { classroom, best_videos }
    }
    catch (err) {
      error(err)
    }
  },
}
</script>

<style>
  @media screen and (max-width: 768px) {
    *::-webkit-scrollbar {
      display: none;
    }
    * {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }
  *::-webkit-scrollbar {
    width: 0.6rem;
  }
  
  *::-webkit-scrollbar-track {
    background-color: #cfd5e4;
  }
  
  *::-webkit-scrollbar-thumb {
    background-color: #75809f;
    border-radius: 50px;
  }
</style>