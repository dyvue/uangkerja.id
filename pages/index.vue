<template>
  <div class="site-content">
    <section class="section-standart">
      <div class="container mx-auto">
        <div class="flex flex-col-reverse lg:flex-row gap-12">
          <div class="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left gap-6">
            <h2 class="ft-h-bold text-4xl md:text-5xl font-bold leading-tight">Platform edukasi keuangan untuk Zillennials.</h2>
            <p class="text-secondary">Buat uang kerja untuk kita, jangan kita kerja untuk uang. Pelajari caranya gratis dan cocok untuk kaum Zillennials 👋.</p>
            <button class="btn btn-primary">Mulai Pelajari</button>
          </div>
          <div class="w-full lg:w-1/2 flex justify-center items-center">
            <div class="relative">
              <img src="/img/illustrations/hero.svg" alt="Hero Illustration" class="illustration-hero">
              <img src="/img/illustrations/hero-bg.png" alt="Hero Illustration" class="illustration-hero-bg">
            </div>
          </div>
        </div>
      </div>
    </section>
    <LandingProduct/>
    <PlatformPerformance/>
    <section class="section-standart bg-white-hover">
      <!-- <div class="waves-deepwhite-top"></div>
      <div class="waves-deepwhite-bottom"></div> -->
      <div class="container mx-auto">
        <div class="flex flex-col justify-center items-center text-center gap-6">
          <p class="text-secondary">Sorry this website is under construction. For more information please visit our instagram.</p>
          <a href="https://instagram.com/uangkerja.id" target="_blank" class="btn btn-primary">Instagram</a>
        </div>
      </div>
    </section>
    <section class="section-standart">
      <div class="container mx-auto">
        <!-- <div class="flex flex-col justify-center items-center text-center gap-6">
          <p class="text-secondary">Sorry this website is under construction. For more information please visit our instagram.</p>
          <a href="https://instagram.com/uangkerja.id" target="_blank" class="btn btn-primary">Instagram</a>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script>
import LandingProduct from '@/components/pages/index/LandingProduct.vue'
import PlatformPerformance from '@/components/pages/index/PlatformPerformance.vue'
export default {
  layout: 'app',
  components: { LandingProduct, PlatformPerformance },
}
</script>
