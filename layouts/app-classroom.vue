<template>
  <div>
    <Header/>
    <Nuxt/>
    <br>
    <br>
    <br>
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