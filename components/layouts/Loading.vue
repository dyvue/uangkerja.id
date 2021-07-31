<template>
  <div v-if="loading" class="loading-page">
    <div class="loader"></div>
    <span class="loader-span"><0,1 detik</span>
  </div>
</template>
<script>
  export default {
    data: () => ({
      loading: false
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      }
    }
  }
</script>
<style scoped>
  .loading-page {
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fafbfd;
    color: #18dca6;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    border: 6px solid #f3f3f3;
    border-radius: 50%;
    border-top: 6px solid #18dca6;
    background-color: #dcf7f0;
    width: 150px;
    height: 150px;
    -webkit-animation: spin .3s linear infinite;
    animation: spin .3s linear infinite;
    padding: 20px;
  }

  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  .loader-span {
    position: absolute;
    font-family: 'Poppins','sans-serif'
  }
</style>