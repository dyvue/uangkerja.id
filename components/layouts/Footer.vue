<template>
  <footer class="section-deepblue bg-dark-body">
    <div class="waves-deepdarkblue-top"></div>
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row gap-12">
        <div class="w-full lg:w-5/12 flex flex-col md:flex-row lg:flex-col justify-between lg:justify-start gap-3">
          <div>
            <h5 class="text-secondary">Jangan sungkan untuk menghubungi kami:</h5>
            <a href="mailto:uangkerja.id@gmail.com" class="ft-h text-primary font-semibold">uangkerja.id@gmail.com</a>
          </div>
          <div class="mt-3 flex gap-5">
            <a href="https://instagram.com/uangkerja.id" target="_blank">
              <i class="fi fi-instagram text-primary text-xl"></i>
            </a>
            <a href="https://instagram.com/uangkerja.id" target="_blank">
              <i class="fi fi-twitter text-primary text-xl"></i>
            </a>
            <a href="https://instagram.com/uangkerja.id" target="_blank">
              <i class="fi fi-youtube-play text-primary text-xl"></i>
            </a>
          </div>
        </div>
        <div class="w-full lg:w-7/12 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div class="flex flex-col gap-3">
            <h5 class="text-secondary">Discover</h5>
            <div class="flex flex-col gap-2">
              <nuxt-link to="/articles" class="text-white hover:text-primary">
                Berita dan Artikel
              </nuxt-link>
              <nuxt-link to="/topics" class="text-white hover:text-primary">
                Topik
              </nuxt-link>
              <nuxt-link to="/glosarry" class="text-white hover:text-primary">
                Glosarium
              </nuxt-link>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <h5 class="text-secondary">Fitur Unggulan</h5>
            <div class="flex flex-col gap-2">
              <nuxt-link to="/financial-records" class="text-white hover:text-primary">
                Catatan Keuangan
              </nuxt-link>
              <nuxt-link to="/robo-advisor" class="text-white hover:text-primary">
                Robo Advisor
              </nuxt-link>
              <nuxt-link to="/discuss" class="text-white hover:text-primary">
                Diskusi Online
              </nuxt-link>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <h5 class="text-secondary">Support</h5>
            <div class="flex flex-col gap-2">
              <nuxt-link to="/ask-a-question" class="text-white hover:text-primary">
                Syarat
              </nuxt-link>
              <nuxt-link to="/ask-a-question" class="text-white hover:text-primary">
                Kebijakan Privasi
              </nuxt-link>
              <nuxt-link to="/ask-a-question" class="text-white hover:text-primary">
                Berikan Pertanyaan
              </nuxt-link>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <h5 class="text-secondary">Platform Lainnya</h5>
            <div class="flex flex-col gap-2">
              <nuxt-link to="/" class="text-white hover:text-primary">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png" alt="Google Play Store" class="w-24">
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 pt-6 border-t">
        <div class="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-2">
          <p class="text-secondary">@ 2021 Uang Kerja Media</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style>

</style>