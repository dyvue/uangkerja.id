<template>
  <transition name="fade">
    <div v-if="toggler" class="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
      <div class="absolute top-0 left-0 w-full h-full opacity-60" style="background-color: #000000; z-index: -1" @click="closeLightbox()"></div>
      <div class="absolute top-0 right-0 p-6">
        <button @click="closeLightbox()">
          <i class="fi fi-close-a text-xl text-white"></i>
        </button>
      </div>
      <template v-if="sources">
        <img :src="sources" :alt="alt" class="object-cover rounded-xl" style="width: 80%; height: 500px">
      </template>
      <template v-else>
        <h5 class="text-xl ft-h">Image cannot display</h5>
      </template>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    toggler: {
      type: Boolean,
      default: false,
    },
    sources: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
  },
  methods: {
    closeLightbox: function () {
      this.toggler = false
      console.clear()
    }
  }
}
</script>

<style>

</style>