<template>
    <div class="home-container flex flex-col items-center justify-center">
        <!-- Image -->
        <img src="../assets/img/accueil.png" alt="Description of the Image" class="w-full h-auto">
  
        <!-- Texte centré en dessous de l'image -->
        <div class="text-center bg-white bg-opacity-60 p-4 rounded-md max-w-4xl">
            <h1 class="font-rhd  text-4xl font-bold">TaVue : L'Essence du Raffinement Français</h1>
            <p class="mt-2">
                Plongez dans l'univers de TaVue, une marque de lunetterie qui célèbre l'excellence de la fabrication française. Chaque paire est le fruit d'un savoir-faire ancestral, mêlant passion, précision et une quête inlassable de perfection. La philosophie de TaVue est simple : offrir des lunettes d'une qualité irréprochable, tout en préservant un style raffiné, minimaliste et épuré.
                Chez TaVue, nous croyons que le véritable luxe réside dans les détails, dans la pureté des lignes et dans l'authenticité des matériaux. Nous nous engageons à créer des pièces intemporelles, reflétant l'élégance discrète et le charme sans effort qui caractérisent le chic français.
            </p>
  
                      <!-- Structure ajoutée en dessous du paragraphe -->
          <div class="flex mt-16 items-center justify-center">
            <!-- Image à gauche -->
            <img src="../assets/svg/lunettes_cadre_carre.svg" alt="Image Description" class="w-1/2 h-auto mr-6">

            <!-- Contenu à droite de l'image -->
            <div class="flex flex-col">
              <h2 class="font-bold text-3xl mb-4">Square space</h2>
              <p class="text-gray-700 mb-4 leading-relaxed">
                Inspirées par la modernité et l'architecture contemporaine, les "Square space" offrent une touche audacieuse à l'individu moderne. Leur design carré audacieux fait une déclaration audacieuse, tout en restant adapté à la vie urbaine trépidante.
              </p>
              <RouterLink to="/personnalisation"><Buttonperso/></RouterLink>




            </div>
          </div>

                                <!-- Structure ajoutée en dessous du paragraphe -->
                                <div class="flex mt-16 items-center justify-center">
            <!-- Image à gauche -->
            <img src="../assets/svg/lunettes_petit.svg" alt="Image Description" class="w-1/2 h-auto mr-6">

            <!-- Contenu à droite de l'image -->
            <div class="flex flex-col">
              <h2 class="font-bold text-3xl mb-4">Minimalisme Épuré</h2>
              <p class="text-gray-700 mb-4 leading-relaxed">
                Pour ceux qui préfèrent la simplicité avec une touche d'élégance, ces lunettes offrent un design épuré sans fioritures inutiles. Leur forme douce et leur construction légère garantissent un confort maximal tout en étant un complément parfait à n'importe quelle tenue.
              </p>
              <Buttonpanier/>




            </div>
          </div>

          
                                <!-- Structure ajoutée en dessous du paragraphe -->
                                <div class="flex mt-16 items-center justify-center">
            <!-- Image à gauche -->
            <img src="../assets/svg/lunettes_pont.svg" alt="Image Description" class="w-1/2 h-auto mr-6">

            <!-- Contenu à droite de l'image -->
            <div class="flex flex-col">
              <h2 class="font-bold text-3xl mb-4">Fusion Rétro-Moderne</h2>
              <p class="text-gray-700 mb-4 leading-relaxed">
                Ces lunettes combinent la nostalgie des styles rétro avec une touche moderne, offrant le meilleur des deux mondes. Parfait pour ceux qui apprécient le charme d'antan tout en voulant rester à la pointe de la mode actuelle.
              </p>
              <Buttonpanier/>




            </div>
          </div>


      </div>
      <div class="mt-8 text-center">
    <h2 class="text-5xl font-bold mb-4 underline">Création récente</h2>
    <p class="text-xl text-gray-600">3 personnes ont déjà créé leurs lunettes personnalisables !</p>

    



</div>
  </div>
  <Map/>
  </template>
  
  <script>
  import Map from '../components/Map.vue';
import Buttonpanier from '../components/buttonpanier.vue';
import Buttonperso from '../components/buttonperso.vue'

  export default {
    name: 'HomeComponent'
    // Vous pouvez ajouter des méthodes, des données, etc. ici si nécessaire.
    ,
    components: { Buttonpanier, Buttonperso, Map }
}
  </script>
  
  <style scoped>
  /* Vous pouvez ajouter des styles CSS supplémentaires ici si nécessaire. */
  </style>
  