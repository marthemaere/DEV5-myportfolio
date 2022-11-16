<script setup>
// import VideoPlayer.vue
import VideoPlayer from './components/VideoPlayer.vue'
import VideoDetails from './components/VideoDetails.vue'
import VideoMessages from './components/VideoMessages.vue'

</script>

<template>
  <div class="app"> 
    <VideoPlayer />
    <VideoDetails />
    <VideoMessages />

  </div>
</template>

<style scoped>
  .app{
    display: grid;
    grid-template-columns: 8fr 4fr;
  }
</style>
