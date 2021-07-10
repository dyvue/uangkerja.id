<template>
  <div>
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
    <section class="section-deepblue bg-body">
      <div class="waves-deepblue-top"></div>
      <div class="waves-deepblue-bottom"></div>
      <div class="container mx-auto">
        <div class="flex flex-col justify-center items-center text-center gap-6 md:px-0 lg:px-32">
          <h2 class="ft-h-bold text-white text-2xl md:text-3xl font-bold leading-tight">Produk Utama Kami</h2>
          <p class="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium amet, quidem modi quod itaque qui soluta laborum fugit tenetur in.</p>
        </div>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="javascript:void(0)" v-for="index of 6" :key="index">
            <div class="bg-white hover:bg-white-hover p-4 rounded flex justify-start items-center gap-4">
              <div class="bg-primary py-2 px-4 rounded-full">
                <i class="fi fi-apple text-2xl text-white"></i>
              </div>
              <div class="flex flex-col gap-1">
                <h4 class="font-semibold">Lorem ipsum dolor</h4>
                <p class="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="section-standart mt-24">
      <div class="container mx-auto">
        <div class="flex flex-col justify-center items-center text-center gap-6">
          <p class="text-secondary">Maaf website ini sedang dalam pembangunan. Kunjungi instagram kami untuk update info terkini.</p>
          <a href="https://instagram.com/uangkerja.id" target="_blank" class="btn btn-primary">Instagram</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  layout: 'app',
}
</script>
