<template>
    <div class="footer-container bg-sky-100 text-black p-4 flex items-center justify-between">
      <!-- Logo -->
      <a href="/home" class="footer-logo">
        <img src="../assets/svg/Logo.svg" alt="Footer Logo" class="w-28 h-auto" />
      </a>
  
      <!-- Liens cliquables au milieu à gauche -->
      <div class="footer-links-left flex flex-col space-y-8">
        <RouterLink to="/" class="text-center text-black hover:text-gray-300">Accueil</RouterLink>
        <RouterLink to="/personnalisation" class="text-center text-black hover:text-gray-300">Personnalisation</RouterLink>
        <RouterLink to="/inscription" class="text-center text-black hover:text-gray-300">Profil</RouterLink>
      </div>
      
      <!-- Liens cliquables au milieu à droite -->
      <div class="footer-links-right flex flex-col space-y-8">
        <a href="/another-link" class="text-center text-black hover:text-gray-300">Conditions générales de vente</a>
        <a href="/another-link" class="text-center text-black hover:text-gray-300">Politique de confidentialité & utilisation des cookies</a>
        <a href="/another-link" class="text-center text-black hover:text-gray-300">Paramètres des cookies</a>
      </div>
  
      <!-- Espace vide pour respecter la mise en forme -->
      <div></div>
    </div>
</template>

<script>
export default {
  name: 'FooterView'
  // Vous pouvez ajouter des méthodes, des données, etc. ici si nécessaire.
}
</script>

<style scoped>
/* Vous pouvez ajouter des styles CSS supplémentaires ici si nécessaire. */
</style>
