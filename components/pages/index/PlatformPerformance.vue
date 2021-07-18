<template>
  <!-- <section class="section-standart-bottom"> -->
  <section class="relative pb-12 md:pb-16 lg:pb-24">
    <div class="container mx-auto">
      <div class="flex flex-col justify-center items-center text-center gap-6 md:px-0 lg:px-32">
        <h3 class="ft-h-bold text-xl font-bold leading-tight text-secondary-hover">Kinerja Platform</h3>
      </div>
      <div class="mt-12 grid grid-cols-1 grid-cols-1 md:grid-cols-3 gap-6">
        <div v-for="(item, index) of products" :key="index">
          <div class="bg-white p-4 rounded flex justify-center items-start lg:items-center text-center gap-4">
            <div class="flex flex-col justify-center items-center text-center gap-4">
              <h5 class="ft-h-bold text-3xl lg:text-5xl font-bold text-primary-hover">{{ item.performance }}</h5>
              <h4 class="ft-h-bold text-lg font-bold">{{ item.title }}</h4>
              <p class="text-xs">{{ item.description }}</p>
            </div>
          </div>
        </div>
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
          performance: '<0,1 detik',
          title: 'Kecepatan cahaya',
          description: 'Waktu yang dibutuhkan untuk membuka web aplikasi'
        },
        {
          performance: '99,2%',
          title: 'Eksekusi Padat',
          description: 'Tingkat keakuratan data artikel, robo advisor, dan catatan keuangan'
        },
        {
          performance: '99,9%',
          title: 'Keberlanjutan',
          description: 'Layanan uptime'
        },
      ]
    }
  }
}
</script>

<style>

</style>