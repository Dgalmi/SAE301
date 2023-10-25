<script setup>
import HeadeurView from './components/HeadeurView.vue';
import FooterView from './components/FooterView.vue';
import AccueilView from './views/AccueilView.vue';
import buttonpanier from './components/buttonpanier.vue';

</script>

<template>
<HeadeurView/>
<Suspense>
    <RouterView/>
</Suspense>
<FooterView/>
</template>

<style scoped>
</style>
