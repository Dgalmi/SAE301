<template>
    <div class="flex flex-col items-center space-y-4">
      <p class="text-xl font-bold">Seulement 5 paires personnalisable restantes !</p>
      
      <div class="flex items-center space-x-4">
        <img src="../assets/svg/lunettes_base.svg" alt="Glasses" class="w-48">
  
        <div class="flex flex-col space-y-2">
          <div class="flex space-x-4 items-center">
            <p class="text-lg font-semibold">Forme</p>
            <button class="bg-gray-200 px-4 py-2 rounded-md">Arche</button>
            <button class="bg-gray-200 px-4 py-2 rounded-md">Carré</button>
          </div>
  
          <div v-for="item in items" :key="item.label" class="flex space-x-4 items-center">
            <p class="text-lg font-semibold">{{ item.label }}</p>
            <div v-for="color in item.colors" :key="color" class="w-8 h-8 rounded-full" :class="`bg-${color}-400`"></div>
          </div>
        </div>
      </div>
  
      <button class="bg-orange-500 text-white px-6 py-2 rounded-md">Ajouter au panier</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const items = ref([
    { label: 'Verre', colors: ['gray', 'blue', 'yellow'] },
    { label: 'Monture', colors: ['red', 'gray', 'cyan'] },
    { label: 'Branche', colors: ['gray', 'pink'] }
  ]);
  </script>
  
  <style>
  /* You can add any custom styles here if needed */
  </style>
  