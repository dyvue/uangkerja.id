<template>
  <header :class="{ 'scrolled': !view.top_of_page }" >
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <div class="w-full md:w-auto flex justify-center items-center gap-2">
          <a href="javascript:void(0)" class="text-primary navbar-click p-2" @click="sidebarClick()">
            <i class="fi fi-nav-icon-list-a text-xl"></i>
          </a>
          <div class="w-full flex justify-end">
            <a href="/">
              <Logo ukclass="w-48"/>
            </a>
          </div>
        </div>
        <div class="navbar-wrapper" :class="{'show': sidebar}">
          <nuxt-link to="/about-us" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('about-us')">
            Tentang Kami
          </nuxt-link>
          <nuxt-link to="/articles" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('articles')">
            Artikel
          </nuxt-link>
          <a href="javascript:void(0)" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive(['catatan-keuangan', 'live-chat'])">
            Fitur Unggulan
            <i class="ml-2 fi fi-angle-down"/>
            <div class="navbar-child">
              <nuxt-link to="/financial-recodrs" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('catatan-keuangan')">
                Catatan Keuangan
              </nuxt-link>
              <nuxt-link to="/robo-advisor" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('catatan-keuangan')">
                Robo Advisor
              </nuxt-link>
              <nuxt-link to="/live-chat" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('live-chat')">
                Diskusi Online
              </nuxt-link>
            </div>
          </a>
          <a href="/" class="py-2 px-2 lg:px-4 navbar">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" alt="Google Play Store" class="w-24">
          </a>
        </div>
        <div class="navbar-wrapper-sidebar-overlay" :class="{'show': sidebar}" @click="sidebarClick()"></div>
        <div class="navbar-wrapper-sidebar" :class="{'show': sidebar}">
          <div class="p-6">
            <div class="flex items-center justify-between">
              <a href="/">
                <Logo ukclass="w-48"/>
              </a>
              <a href="javascript:void(0)" class="text-primary" @click="sidebarClick()">
                <i class="fi fi-close-a text-xl"></i>
              </a>
            </div>
            <div class="mt-6">
              <nuxt-link to="/about-us" class="py-4 px-2 lg:px-4 navbar" :active="navbarActive('about-us')">
                Tentang Kami
              </nuxt-link>
              <nuxt-link to="/articles" class="py-4 px-2 lg:px-4 navbar" :active="navbarActive('articles')">
                Artikel
              </nuxt-link>
              <a href="javascript:void(0)" class="py-4 px-2 lg:px-4 navbar" :active="navbarActive(['catatan-keuangan', 'live-chat'])">
                Fitur Unggulan
                <i class="ml-2 fi fi-angle-down"/>
                <div class="navbar-child">
                  <nuxt-link to="/financial-recodrs" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('catatan-keuangan')">
                    Catatan Keuangan
                  </nuxt-link>
                  <nuxt-link to="/robo-advisor" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('catatan-keuangan')">
                    Robo Advisor
                  </nuxt-link>
                  <nuxt-link to="/live-chat" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('live-chat')">
                    Diskusi Online
                  </nuxt-link>
                </div>
              </a>
              <a href="/" class="py-4 px-2 lg:px-4 navbar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" alt="Google Play Store" class="w-24">
              </a>
            </div>
          </div>
        </div>
        <div class="action-wrapper">
          <button class="btn" @click="donate()">Donate</button>
        </div>
      </div>
    </div>
    <div class="bg-primary-hover h-1 absolute bottom-0 left-0" :style="{'width': view.scroll_indicator+'%'}" v-if="this.$route.name === 'articles-slug'"></div>
  </header>
</template>

<script>
import Logo from '@/components/brands/Logo.vue'
export default {
  components: { Logo },
  data() {
    return {
      sidebar: false,
      view: {
        top_of_page: true,
        scroll_indicator: 0,
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    navbarActive: function (routename) {
      if (routename.constructor === Array) {
        if (routename.includes(this.$route.name) || routename.includes(this.$route.params.slug)) {
          return true
        }
      }
      else if (this.$route.name === routename || this.$route.params.slug === routename) {
        return true
      }
    },
    sidebarClick: function () {
      this.sidebar = !this.sidebar
    },
    handleScroll: function (){
      if (window.pageYOffset > 50) {
        if (this.view.top_of_page) this.view.top_of_page = false
      }
      else {
        if (!this.view.top_of_page) this.view.top_of_page = true
      }

      if (this.$route.name === 'articles-slug') {
        this.handleScrollIndicator()
      }
    },
    handleScrollIndicator() {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      this.view.scroll_indicator = scrolled
    },
    donate: function() {
      alert("We haven't prepared the donation address yet, but thank you for your kindness :)")
    }
  }
}
</script>

<style>

</style>