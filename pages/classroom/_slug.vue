<template>
  <div class="site-content">
    <section class="relative pt-1">
      <div class="border-t border-secondary-hover">
        <article id="article" class="article grid gap-6">
          <div class="relative overflow-hidden bg-black">
            <div class="px-0 lg:px-48">
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
            <div class="grid gap-2">
              <h3 class="ft-h-article font-bold leading-normal">{{ v.title }}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis animi expedita fugit pariatur sed amet deserunt distinctio quae illum consectetur?</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'app-blank',
  head: {
    title: 'Ruang Kelas - Uang Kerja',
  },
  async asyncData({ $content, params, error }) {
    try {
      const classroom = await $content('classroom', params.slug).fetch()
      return { classroom }
    }
    catch (err) {
      error({ statusCode: 404, message: "Post not found" })
    }
  },
  data () {
    return {
      plyr_options: {
        // autoplay: true,
        controls: [
          'play-large',
          // 'restart',
          // 'rewind',
          'play',
          // 'fast-forward',
          'progress',
          'current-time',
          // 'duration',
          'mute',
          'volume',
          'captions',
          'settings',
          'pip',
          'airplay',
          // 'download',
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
        id: '-IRbihK3sxg',
        url: '',
        title: 'STOCK SPLIT BBCA | #GhibahinSaham'
      },
      plyr_key: 0,
    }
  },
  computed: {
    player () {
      return this.$refs.plyr.player
    }
  },
  created () {
    this.vChange(this.v.id)
  },
  methods: {
    vChange: function (vid) {
      this.v.url = 'https://www.youtube.com/embed/'+vid
      const yt = "https://www.googleapis.com/youtube/v3/videos?part=id%2Csnippet&id=uMjzuBwoIRM&key=AIzaSyCxmiLyQfPMlKwnFppSko6fpECZGOmchjc"
      this.plyrRender()
    },
    plyrRender() {
      this.plyr_key += 1;  
    }
  },
}
</script>

<style>
  body {
    --plyr-color-main: #43c59e;
  }
  .plyr__control {
    border-radius: 50px;
    padding: 10px;
  }
  .plyr__control--overlaid {
    padding: 20px;
  }
</style>