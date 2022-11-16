<script setup>
    import { ref, onMounted } from 'vue'


    let username = ref("");
    let description = ref("");

    // onMounted
    onMounted(()=> {
        const apiUrl ="https://app.fakejson.com/q/UmlBvmUS?token=eo6BgPZh7dF335Os3RWu4g"
        // fetch video
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            username.value = data.videos[0].username;
            description.value = data.videos[0].description;
        })
    })
</script>

<template>
  <div> 
    <h3>{{ username }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<style scoped>

</style>