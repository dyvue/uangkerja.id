<template>
  <div class="bg-dark-mode fixed lg:relative w-full h-full overflow-y-auto">
    <Nuxt/>
    <div class="relative flex justify-center items-center text-center gap-4">
      <p class="text-white text-xs md:text-sm">Ruang Kelas by</p>
      <img src="/img/logo-hr.png" alt="uangkerja" class="w-24">
      <br><br>
      <br><br>
    </div>
  </div>
</template>

<script>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
export default {
  components: { Header, Footer },
  mounted() {
    console.clear()
  }
}
</script>

<style>
</style>