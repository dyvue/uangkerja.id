<template>
  <section class="section-standart mt-16 lg:mt-0">
    <div class="container mx-auto">
      <div class="flex flex-col justify-center items-center text-center gap-6 md:px-0 lg:px-32">
        <h3 class="ft-h-bold text-xl md:text-2xl font-bold leading-tight">Produk Utama Kami</h3>
        <p class="text-secondary">Alat investasi dan diskusi antar investor retail, manajemen keuanganmu sedini mungkin.</p>
      </div>
      <div class="mt-8 grid grid-cols-1 grid-cols-1 md:grid-cols-3 gap-6">
        <a href="javascript:void(0)" v-for="(item, index) of products" :key="index">
          <div class="bg-white hover:bg-white-hover p-4 rounded flex flex-col lg:flex-row justify-start items-center text-center lg:text-left gap-4 h-auto md:h-48 lg:h-24">
            <div class="bg-primary py-2 px-4 w-12 h-12 rounded-full flex justify-center items-center">
              <i class="text-lg text-white" :class="item.icon"></i>
            </div>
            <div class="flex flex-col gap-1">
              <h4 class="ft-h font-semibold text-body">{{ item.title }}</h4>
              <p class="text-xs text-body">{{ item.description }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          icon: 'fi fi-area-chart',
          title: 'Catatan Keuangan',
          description: 'Membantu pengeloalaan laporan keuangan kamu.'
        },
        {
          icon: 'fi fi-laboratory',
          title: 'Robo Advisor',
          description: 'Membantu merancang portofolio investasi berdasarkan risiko kamu.'
        },
        {
          icon: 'fi fi-hipchat',
          title: 'Forum Diskusi Online',
          description: 'Diskusi apa saja mengenai keuangan sesama pengguna.'
        },
      ]
    }
  }
}
</script>

<style>

</style>