<script setup>
import ConfigurateurView from '../components/configView.vue';

import { RouterLink, RouterView } from "vue-router";


// Import éléments de vue
import { ref, onMounted } from 'vue';

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketbase
const pb = new PocketBase("http://127.0.0.1:8090");

let colors = ref([])

onMounted(async() => {
  getColors()

});

const getColors = async()=>{
  colors.value = await pb.collection('couleur').getFullList()

}



</script>

<template>

  <p class="font-rhd  text-4xl font-bold text-center mt-8" > Plus que 5 paires personnalisable restante !</p>
     <ConfigurateurView />
    <div class="flex"> </div>
    <RouterView />
    
    <main>
    </main>
  </template>

<style scoped>
</style>