<template>
  <div class="bg-white-hover">
    <Nuxt/>
    <br>
    <div class="border-t border-secondary-hover flex justify-center items-center text-center gap-4">
      <br>
      <br>
      <br>
      <p>Ruang Kelas by</p>
      <img src="/img/logo-hr.png" alt="uangkerja" class="w-32">
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