<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <!-- Image de fond et formulaire -->
        <div class="bg-center bg-cover w-[40rem] h-auto p-8 rounded-lg" :style="backgroundImage">
            <!-- Formulaire de connexion -->
            <form class="bg-white p-6 rounded-lg">
                <!-- Champ Email -->
                <div class="mb-4">
                    <label for="email" class="block text-sm font-bold mb-2">Email:</label>
                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-f6d5d2 rounded-md" placeholder="Entrez votre email">
                </div>

                <!-- Champ Mot de passe -->
                <div class="mb-4">
                    <label for="password" class="block text-sm font-bold mb-2">Mot de passe:</label>
                    <input type="password" id="password" name="password" class="w-full px-3 py-2 border border-f6d5d2 rounded-md" placeholder="Entrez votre mot de passe">
                </div>
  
                <!-- Bouton Connexion -->
                <div class="mb-4">
                    <button type="submit" class="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-300 border-4 border-f6d5d2">Connexion</button>
                </div>

                <!-- Boutons de connexion avec Google et GitHub -->
                <div class="mb-4 flex space-x-4">
                    <button class="w-1/2 bg-white text-black py-2 px-4 rounded hover:bg-gray-300 border border-f6d5d2 flex items-center justify-center space-x-2">
                        <img src="../assets/img/Google__G__Logo.png" alt="Google Logo" class="w-6 h-6"> 
                        <span>Google</span>
                    </button>
                    <button class="w-1/2 bg-white text-black py-2 px-4 rounded hover:bg-gray-300 border border-f6d5d2 flex items-center justify-center space-x-2">
                        <img src="../assets/img/github.png" alt="GitHub Logo" class="w-6 h-6"> 
                        <span>GitHub</span>
                    </button>
                </div>

                <!-- Lien vers la page d'inscription -->
                <RouterLink to="/inscription" class="nav-link text-gray-700 hover:text-black">Je n'ai pas de compte</RouterLink>
            </form>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    const backgroundImage = ref(`background-image: url('/src/assets/img/backconnex.png')`);
</script>

<style scoped>
    .border-f6d5d2 {
        border-color: #F6D5D2;
    }
</style>
