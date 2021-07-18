<template>
  <div class="site-content">
    <section class="section-standart">
      <div class="container mx-auto">
        <div class="flex flex-col-reverse lg:flex-row gap-12">
          <div class="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start items-center lg:items-start text-center lg:text-left gap-6">
            <h2 class="ft-h-bold text-4xl md:text-5xl font-bold leading-tight">Platform edukasi keuangan untuk Zillennials.</h2>
            <p class="text-secondary">Buat uang kerja untuk kita, jangan kita kerja untuk uang. Pelajari caranya gratis dan cocok untuk kaum Zillennials 👋.</p>
            <button class="btn btn-primary" @click="LinkStartLearn()">Mulai Pelajari</button>
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
    <ArticlesInfo/>
    <LandingProduct/>
    <PlatformPerformance/>
  </div>
</template>

<script>
import ArticlesInfo from '@/components/pages/index/ArticlesInfo.vue'
import LandingProduct from '@/components/pages/index/LandingProduct.vue'
import PlatformPerformance from '@/components/pages/index/PlatformPerformance.vue'
export default {
  layout: 'app',
  components: { ArticlesInfo, LandingProduct, PlatformPerformance },
  methods: {
    LinkStartLearn: function() {
      this.$router.push("articles")
    }
  }
}
</script>
