<template>
  <div class="bg-dark-mode">
    <Nuxt/>
    <br>
    <div class="absolute lg:relative bottom-0 left-0 w-full flex justify-center items-center text-center gap-4">
      <p class="text-white">Ruang Kelas by</p>
      <img src="/img/logo-hr.png" alt="uangkerja" class="w-32">
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
  body {
    background-color: #000000;
    width: 100%;
    height: 100%;
  }
</style>