<template>
  <div>
    <section class="relative">
      <article id="classroom" class="grid gap-6">
        <div class="relative overflow-hidden bg-black">
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
        <div class="container mx-auto">
          <div class="grid gap-6">
            <div class="flex items-center gap-4">
              <img :src="classroom.img" :alt="classroom.title" class="w-12 h-12 object-cover rounded-full">
              <div class="grid">
                <h3 class="ft-h-article font-bold leading-normal text-white">{{ classroom.title }}</h3>
                <p class="text-white">{{ classroom.description }}</p>
              </div>
            </div>
            <div class="grid gap-2 relative overflow-y-scroll max-h-96">
              <div v-for="(item, index) of classroom.content" :key="index">
                <div class="w-full bg-secondary-hover p-4 px-6 text-left text-dark-body rounded cursor-pointer" @click="vChange(item.id)">
                  <div class="relative overflow-hidden grid grid-cols-5 gap-6">
                    <div class="col-span-4 relative overflow-hidden flex items-center">
                      <i class="fi fi-google-play mr-2"></i>
                      <span class="font-semibold truncate">{{ item.title }}</span>
                    </div>
                    <div class="col-span-1 relative overflow-hidden flex items-center">
                      <span class="text-xs truncate">{{ item.minutes }} mins</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'app-classroom-class',
  head: {
    title: 'Ruang Kelas - Uang Kerja',
  },
  async asyncData({ $content, params, error }) {
    try {
      const classroom = await $content('classroom/saham', params.slug).fetch()
      return { classroom }
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
          'duration',
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
        }
      },
      v: {
        id: 'MvwN7lWib-I',
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
    this.vChange(this.classroom.content[0].id)
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
    width: 18px;
    height: 18px;
    border: none;
  }
  .plyr__control--overlaid svg {
    width: 40px;
    height: 40px;
  }
  .plyr--full-ui input[type=range], .plyr__progress__buffer {
    border-radius: 0;
  }
</style>