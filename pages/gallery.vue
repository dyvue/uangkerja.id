<template>
  <div class="py-64">
    <Lightbox :toggler="true" :sources="'https://i.imgur.com/fsyrScY.jpg'"
    />
  </div>
</template>

<script>
import Lightbox from '@/components/basics/Lightbox'
export default {
  layout: 'app',
  components: { Lightbox },
  data() {
    return {
      toggler: false,
    };
  },
};
</script>