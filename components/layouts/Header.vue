<template>
  <header :class="{ 'scrolled': !view.atTopOfPage }" >
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
        <div class="navbar-wrapper">
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
              <ul>
                <li @click="sidebarClick()">
                  <nuxt-link to="/" class="py-6 px-2 lg:px-4 navbar" :active="navbarActive('index')">
                    Beranda
                  </nuxt-link>
                </li>
                <li>
                  <a href="javascript:void(0)" class="py-6 px-2 lg:px-4 navbar" :active="navbarActive(['pemula-reksadana', 'pemula-saham'])">
                    Pemula
                    <i class="ml-2 fi fi-angle-down"/>
                    <div class="navbar-child">
                      <ul>
                        <li @click="sidebarClick()">
                          <nuxt-link to="/pemula-reksadana" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('pemula-reksadana')">
                            Reksadana
                          </nuxt-link>
                        </li>
                        <li @click="sidebarClick()">
                          <nuxt-link to="/pemula-saham" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('pemula-saham')">
                            Saham
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="py-6 px-2 lg:px-4 navbar" :active="navbarActive(['investor-reksadana', 'investor-saham', 'investor-cryptocurrency', 'investor-emas'])">
                    Untuk Investor
                    <i class="ml-2 fi fi-angle-down"/>
                    <div class="navbar-child">
                      <ul>
                        <li @click="sidebarClick()">
                          <nuxt-link to="/investor-reksadana" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('investor-reksadana')">
                            Reksadana
                          </nuxt-link>
                        </li>
                        <li @click="sidebarClick()">
                          <nuxt-link to="/investor-saham" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('investor-saham')">
                            Saham
                          </nuxt-link>
                        </li>
                        <li @click="sidebarClick()">
                          <nuxt-link to="/investor-cryptocurrency" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('investor-cryptocurrency')">
                            Cryptocurrency
                          </nuxt-link>
                        </li>
                        <li @click="sidebarClick()">
                          <nuxt-link to="/investor-emas" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('investor-emas')">
                            Emas
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="py-6 px-2 lg:px-4 navbar" :active="navbarActive(['trader-saham', 'trader-cryptocurrency'])">
                    Untuk Trader
                    <i class="ml-2 fi fi-angle-down"/>
                    <div class="navbar-child">
                      <ul>
                        <li @click="sidebarClick()">
                          <nuxt-link to="/trader-saham" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('trader-saham')">
                            Saham
                          </nuxt-link>
                        </li>
                        <li @click="sidebarClick()">
                          <nuxt-link to="/trader-cryptocurrency" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('trader-cryptocurrency')">
                            Cryptocurrency
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)" class="py-6 px-2 lg:px-4 navbar" :active="navbarActive(['catatan-keuangan', 'live-chat'])">
                    Fitur Unggulan
                    <i class="ml-2 fi fi-angle-down"/>
                    <div class="navbar-child">
                      <ul>
                        <li @click="sidebarClick()">
                          <nuxt-link to="/catatan-keuangan" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('catatan-keuangan')">
                            Catatan Keuangan
                          </nuxt-link>
                        </li>
                        <li @click="sidebarClick()">
                          <nuxt-link to="/live-chat" class="py-2 px-2 lg:px-4 navbar" :active="navbarActive('live-chat')">
                            Live Chat
                          </nuxt-link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="action-wrapper">
          <button class="btn" @click="donate()">Donate</button>
        </div>
      </div>
    </div>
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
        atTopOfPage: true
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
        if (this.view.atTopOfPage) this.view.atTopOfPage = false
      }
      else {
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true
      }
    },
    donate: function() {
      alert("We haven't prepared the donation address yet, but thank you for your kindness :)")
    }
  }
}
</script>

<style>

</style>