<template>
  <div class="bg-dark-mode fixed lg:relative w-full h-full overflow-y-auto">
    <Nuxt/>
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