<template>
  <div>
    <section class="relative">
      <article id="videos" class="grid gap-6 pb-0 lg:pb-12">
        <div class="fixed z-10 lg:relative w-full overflow-hidden bg-black">
          <div class="px-0 lg:px-32">
            <vue-plyr
              ref="plyr"
              :options="plyr_options"
              :key="plyr_key"
            >
              <div class="plyr__video-embed">
                <iframe
                  :src="v.url"
                  class="w-full h-full"
                ></iframe>
              </div>
            </vue-plyr>
          </div>
        </div>
        <div class="mt-64 lg:mt-0 relative overflow-y-auto container mx-auto">
          <div class="grid gap-6">
            <div class="flex items-center gap-4">
              <img :src="videos.creator.img" :alt="videos.creator.title" class="w-10 md:w-12 h-10 md:h-12 object-cover rounded-full">
              <div class="grid">
                <h3 class="ft-h-article font-bold leading-normal text-white text-base md:text-lg">{{ videos.creator.title }}</h3>
                <p class="text-white text-xs md:text-sm">{{ videos.creator.description }}</p>
              </div>
            </div>
          </div>
          <div class="my-8 grid gap-6">
            <h3 class="ft-h font-bold text-lg md:text-xl text-white">rekomendasi</h3>
            <div class="grid gap-6 fullwidth-mobile">
              <nuxt-link :to="{ name: 'classroom-vid-slug', params: { slug: item.slug } }" v-for="(item, index) of recommendation_videos" :key="index">
                <div class="bg-dark-mode w-full">
                  <template v-if="item.img">
                    <img :src="item.img" :alt="item.title" class="w-full h-52 md:h-96 object-cover">
                  </template>
                  <template v-else>
                    <img src="https://muamalat-institute.com/wp-content/uploads/2021/05/placeholder.png" :alt="item.title" class="w-full h-52 md:h-96 object-cover">
                  </template>
                  <div class="p-3 md:py-4 flex flex-col">
                    <div class="flex gap-3 md:gap-6">
                      <img :src="item.creator.img" :alt="item.creator.title" class="w-10 md:w-12 h-10 md:h-12 object-cover rounded-full">
                      <div>
                        <h3 class="ft-h-article text-white text-sm md:text-base lg:text-lg">{{ item.title }}</h3>
                        <span class="text-white text-xs md:text-sm">
                          {{ item.creator.title }}
                          -
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
      </article>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'app-classroom',
  head: {
    title: 'Ruang Kelas - Uang Kerja',
  },
  async asyncData({ $content, params, error }) {
    try {
      const videos = await $content('classroom/best-videos', params.slug).fetch()
      const recommendation_videos = await $content("classroom/best-videos")
        .sortBy('id', 'desc')
        .where(({ id: { $ne: videos.id } }))
        .fetch();
      return { videos, recommendation_videos }
    }
    catch (err) {
      error({ statusCode: 404, message: "Post not found" })
    }
  },
  data () {
    return {
      plyr_options: {
        autoplay: true,
        controls: [
          'play-large',
          'play',
          'fast-forward',
          'progress',
          'current-time',
          'fullscreen',
        ],
        captions: {
          active: true,
          language: "auto",
          update: false
        },
        youtube: {
          noCookie: true,
          rel: 0,
          showinfo: 0,
          iv_load_policy: 3,
          modestbranding: 1
        },
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true,
          container: null
        }
      },
      v: {
        id: '',
        url: ''
      },
      plyr_key: 0,
    }
  },
  computed: {
    player () {
      return this.$refs.plyr.player
    }
  },
  mounted () {
    this.vChange(this.videos.vid)
  },
  methods: {
    vChange: function (vid) {
      this.v.url = 'https://www.youtube.com/embed/'+vid
      this.plyrRender()
      console.clear()
    },
    plyrRender() {
      this.plyr_key += 1;
    },
    changeColorMode(colorMode) {
      if (colorMode) {
				this.colorMode_ = colorMode
        this.$colorMode.preference = colorMode;
      }
		},
  },
}
</script>

<style>
  body {
    --plyr-color-main: transparent;
    --plyr-control-radius: 0;
    --plyr-badge-border-radius: 0;
    --plyr-menu-radius: 0;
    --plyr-tooltip-radius: 0;
  }
  .plyr__progress {
    --plyr-color-main: #43c59e;
  }
  .plyr__control {
    border-radius: 50px;
    padding: 10px;
  }
  .plyr__control--overlaid {
    padding: 20px;
  }
  .plyr__control svg {
    width: 16px;
    height: 16px;
    border: none;
    fill: #43c59e;
  }
  .plyr__control--overlaid svg {
    width: 35px;
    height: 35px;
  }
  .plyr--full-ui input[type=range], .plyr__progress__buffer {
    border-radius: 0;
  }
</style>