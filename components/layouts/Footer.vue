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
            <h5 class="text-secondary">Pemula</h5>
            <div class="flex flex-col gap-2">
              <nuxt-link to="/pemula-reksadana" target="_blank" class="text-white hover:text-primary">
                Reksadana
              </nuxt-link>
              <nuxt-link to="/pemula-saham" target="_blank" class="text-white hover:text-primary">
                Saham
              </nuxt-link>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <h5 class="text-secondary">Untuk Investor</h5>
            <div class="flex flex-col gap-2">
              <nuxt-link to="/investor-reksadana" target="_blank" class="text-white hover:text-primary">
                Reksadana
              </nuxt-link>
              <nuxt-link to="/investor-saham" target="_blank" class="text-white hover:text-primary">
                Saham
              </nuxt-link>
              <nuxt-link to="/investor-cryptocurrency" target="_blank" class="text-white hover:text-primary">
                Cryptocurrency
              </nuxt-link>
              <nuxt-link to="/investor-emas" target="_blank" class="text-white hover:text-primary">
                Emas
              </nuxt-link>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <h5 class="text-secondary">Untuk Trader</h5>
            <div class="flex flex-col gap-2">
              <nuxt-link to="/trader-saham" target="_blank" class="text-white hover:text-primary">
                Saham
              </nuxt-link>
              <nuxt-link to="/trader-cryptocurrency" target="_blank" class="text-white hover:text-primary">
                Cryptocurrency
              </nuxt-link>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <h5 class="text-secondary">Fitur Unggulan</h5>
            <div class="flex flex-col gap-2">
              <nuxt-link to="/catatan-keuangan" target="_blank" class="text-white hover:text-primary">
                Catatan Keuangan
              </nuxt-link>
              <nuxt-link to="/live-chat" target="_blank" class="text-white hover:text-primary">
                Livechat
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 pt-6 border-t">
        <div class="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-6">
          <p class="text-white">@ 2021 Uang Kerja Ltd.</p>
          <div class="flex gap-6">
            <a href="/" class="text-white">Syarat</a>
            <a href="/" class="text-white">Kebijakan Privasi</a>
          </div>
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