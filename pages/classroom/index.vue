<template>
  <div class="site-content">
    <section class="relative pt-1">
      <div class="container mx-auto border-t border-secondary-hover py-8">
        <div class="flex flex-col lg:flex-row gap-16">
          <div class="w-full lg:w-8/12">
            <div class="grid gap-2">
              <h1 class="ft-h-article font-bold leading-normal">Ruang Kelas</h1>
              <p class="text-secondary">Pelajari ilmu <span class="text-primary-hover">ekonomi dan investasi</span> dari mentor yang berpengalaman</p>
            </div>
            <br class="hidden md:block">
            <hr class="hidden md:block">
            <br class="hidden md:block">
            <div class="mt-12 md:mt-6 relative overflow-auto pb-3 md:pb-0 fullwidth-mobile">
              <div class="inline-flex gap-2 md:gap-3 mx-5">
                <button class="catalog catalog-dark-body">Featured</button>
                <button class="catalog">Reksadana</button>
                <button class="catalog">Saham</button>
                <button class="catalog">Cryptocurrency</button>
              </div>
            </div>
          </div>
          <div class="hidden w-full lg:w-4/12">
            <a href="/classroom" target="_blank">
              <div class="bg-primary-hover rounded-3xl">
                <img src="/img/illustrations/classroom.svg" alt="Ads" class="w-full">
              </div>
            </a>
          </div>
        </div>
        <div class="mt-6 md:mt-12">
          <div class="flex flex-col lg:flex-row gap-16">
            <div class="w-full lg:w-8/12 ">
              <div class="fullwidth-mobile player relative overflow-hidden rounded-3xl">
                <vue-plyr
                  ref="plyr"
                  :options="plyr_options"
                >
                  <div class="plyr__video-embed">
                    <iframe
                      src="https://youtu.be/cCrVOkpLuTg"
                    ></iframe>
                  </div>
                </vue-plyr>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'app',
  head: {
    title: 'Ruang Kelas - Uang Kerja',
  },
  data () {
    return {
      plyr_options: {
        autoplay: true,
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
      }
    }
  },
  computed: {
    player () {
      return this.$refs.plyr.player
    }
  },
  methods: {
    videoPlay: function () {
      this.player.play()
    }
  }
}
</script>

<style>
  .player {
    --plyr-color-main: #43c59e;
  }
</style>