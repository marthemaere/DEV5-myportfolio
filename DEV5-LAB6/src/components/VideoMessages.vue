<script setup>
import { ref, onMounted, reactive } from 'vue'

let messages = reactive({data: []});
let messageSrc = ref("");

onMounted(() =>{
    const apiUrl="https://lab5-p379.onrender.com/api/v1/messages/"
    fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        messages.data = data.messages;
    })
})

</script>

<template>
  <div> 
    <h3>{{ username }}</h3>
    <p>{{ comment }}</p>
  </div>
</template>

<style scoped>

</style>