<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <!-- Image de fond et formulaire -->
        <div class="bg-center bg-cover w-[32rem] h-auto p-8 rounded-lg" :style="backgroundImage">
            <!-- Bande promotionnelle -->
            <div class="bg-FFD1A0 text-black px-4 py-2 rounded-lg translate-y-[10px] relative z-1">
    Soyez parmi les <strong>50 premiers</strong> à vous inscrire aujourd'hui et remportez un <strong>bon d'achat de 10€</strong> à utiliser immédiatement.
</div>

            <!-- Formulaire d'inscription -->
            <form class="bg-white p-6 rounded-lg">
                <!-- Champ Email -->
                <div class="mb-4">
                    <label for="email" class="block text-sm font-bold mb-2">Email:</label>
                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-f6d5d2 rounded-md" placeholder="Entrez votre email">
                </div>

                <!-- Champ Nom -->
                <div class="mb-4">
                    <label for="nom" class="block text-sm font-bold mb-2">Nom:</label>
                    <input type="text" id="nom" name="nom" class="w-full px-3 py-2 border border-f6d5d2 rounded-md" placeholder="Entrez votre nom">
                </div>

                <!-- Champ Prénom -->
                <div class="mb-4">
                    <label for="prenom" class="block text-sm font-bold mb-2">Prénom:</label>
                    <input type="text" id="prenom" name="prenom" class="w-full px-3 py-2 border border-f6d5d2 rounded-md" placeholder="Entrez votre prénom">
                </div>

                <!-- Champ Mot de passe -->
                <div class="mb-4">
                    <label for="password" class="block text-sm font-bold mb-2">Mot de passe:</label>
                    <input type="password" id="password" name="password" class="w-full px-3 py-2 border border-f6d5d2 rounded-md" placeholder="Entrez votre mot de passe">
                </div>
  
                <!-- Bouton S'inscrire -->
                <div>
                    <button type="submit" class="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-300 border-4 border-f6d5d2">S'inscrire</button>
                </div> 
                <RouterLink to="/connexion" class="nav-link text-gray-700 hover:text-black">J'ai deja un compte</RouterLink>
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

    .bg-FFD1A0 {
        background-color: #FFD1A0;
    }
</style>
