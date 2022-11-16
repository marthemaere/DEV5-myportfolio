<script setup>
    import { ref, onMounted, reactive } from 'vue'
    import 'animate.css';


    let videos = reactive({data: []});
    let videoSrc = ref("");
    let counter = ref(0);
    let animation = ref("");

    // onMounted
    onMounted(() => {
        const apiUrl ="https://app.fakejson.com/q/UmlBvmUS?token=eo6BgPZh7dF335Os3RWu4g"
        // fetch video
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            videos.data = data.videos;
            videoSrc.value = data.videos[0].video;
        })
    })

    const nextVideo = () => {
        animation.value = "animate__fadeOut";
        counter.value++;
        setTimeout(() => {
            videoSrc.value = videos.data[counter.value].video;
            animation.value = "animate__fadeIn";
        }, 1000);
        
        
    }

</script>

<template>
  <div class="blur"> 
    {{counter}}
    <div class="controls">
        <a @click.prevent="nextVideo" href="#">⬇</a>

    </div>

    <video
        :src="videoSrc"
        :class="animation"
        class="animate__animated"
        autoplay
        muted
    ></video>
  </div>
</template>

<style scoped>
    video{
        max-width: 100%;
        max-height: 100vh;
    }

    .blur{
        background-image: url("../assets/befunky_2022-10-3_15-40-18.jpg");
        background-size: cover;
        text-align: center;
        position: relative;
    }

    .controls {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    align-items: center;
}

    .controls a {
        color: #fff;
        text-decoration: none;
        padding: 1em;
        font-size: 2em;
    }

</style>