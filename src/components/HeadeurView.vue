<template>
    <div class="header-container bg-white shadow-md p-4 flex items-center justify-between">
      <!-- Logo -->
      <img src="../assets/img/logo.jpg" alt="Logo" class="header-logo w-12" />

      <!-- Wrapper for navigation links, separator, and profile icon -->
      <div class="flex items-center">
          <!-- Navigation Links -->
          <div class="nav-links flex space-x-4">
            <RouterLink to="/" class="nav-link text-gray-700 hover:text-black">Accueil</RouterLink>
            <RouterLink to="/personnalisation" class="nav-link text-gray-700 hover:text-black">Personnaliser</RouterLink>
            <RouterLink to="/inscription" class="nav-link text-gray-700 hover:text-black">Profil</RouterLink>
            <!-- ... Ajoutez d'autres liens au besoin -->
          </div>
      
          <!-- Séparateur -->
          <div class="separator h-5 border-l-2 mx-4"></div>
      
          <!-- Icône Personnage -->
          <a href="/inscription" class="profile-icon">
            <img src="../assets/icone/compte.png" alt="Profile Icon" class="w-6 h-6" />
          </a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
  // Vous pouvez ajouter des méthodes, des données, etc. ici si nécessaire.
}
</script>
