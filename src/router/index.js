import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView.vue'
import Personnalisation from '../views/Personnalisation.vue'
import inscription from '../views/inscription.vue'
import connexion from '../views/connexion.vue'

// Import pocketbase
import PocketBase from 'pocketbase'
// Objet pocketBase
const pb = new PocketBase("http://127.0.0.1:8090");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     { path: '/',              name: 'AccueilView',           component: AccueilView },
     { path: '/personnalisation',              name: 'Personnalisation',           component: Personnalisation },
     { path: '/inscription',              name: 'inscription',           component: inscription },
     { path: '/connexion',              name: 'connexion',           component: connexion },
  ]
})

// Vérification de route demandée
// to : où il veut aller
// from : d'où il vient 
// next : s'il peut y aller
router.beforeEach( (to, from, next) =>{
  if(to.name == "HomeView"){ // Si page d'accueil demandée, on autorise
    next()
  }else{  // Si une autre route est demandée, on vérifie si l'utilisateur est connecté        
    if(pb.authStore.model != null){ // Utilisateur connecté => OK
      next()
    }else{ // Utilisateur non connecté, redirection sur la page d'acceuil
      router.push({name:"HomeView"})
    }
  }
})

export default router
