<template>
        <div class="bg-orange-500 text-white p-4 rounded shadow-lg w-full md:w-2/3 mx-auto mt-5 text-center">
    Soyez parmi les 50 premiers à vous inscrire aujourd'hui et remportez un bon d'achat de 10€ à utiliser immédiatement.
</div>
     <div class="min-h-screen flex items-center justify-center bg-white sm:px-6 lg:px-8 relative">
    <img src="../assets/img/backconnex.png" class="absolute w-1/2 h-1/2 object-cover rounded-3xl">

    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-8 z-10">
        <div v-if="currentUser">
          <h1 class="text-2xl font-semibold text-gray-700">Welcome {{ currentUser?.name }}</h1>
          <div>
            <button @click="doLogout" class="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-500 rounded-full text-white font-semibold">Logout</button>
          </div>
        </div>
        <div v-else>
          <h1 class="text-2xl font-semibold text-gray-700">{{ loginMode ? "Connexion" : "Inscription" }}</h1>
          <div class="space-y-4">
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700">Email</label>
              <input v-model="username" type="text" name="username" id="username" autocomplete="none" placeholder="Enter Email Address" class="w-full px-3 py-2 border rounded-md placeholder-gray-500">
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label>
              <input v-model="password" type="password" name="password" id="password" autocomplete="none" placeholder="Enter Password" class="w-full px-3 py-2 border rounded-md placeholder-gray-500">
            </div>
            <div v-if="loginMode" class="space-y-4">
              <button @click="doLogin" class="w-full py-2 px-4 bg-white text-black hover:bg-orange-100 border-4 border-f6d5d2 rounded-full font-semibold">Login</button>
              <button @click="loginMode = false" class="w-full py-2 px-4 bg-white text-black hover:bg-orange-100 border-4 border-f6d5d2 rounded-full font-semibold">Créer Compte</button>
               

              <div class="mb-4 flex flex-col space-y-4">
                    <button v-on:click="logingoogle()" class="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-300 border border-f6d5d2 flex items-center justify-center space-x-2">
                      <img src="../assets/img/Google__G__Logo.png" alt="Google Logo" class="w-6 h-6">
                   <span>Google</span>
                   </button>
                   <button v-on:click="githublogin()" class="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-300 border border-f6d5d2 flex items-center justify-center space-x-2">
                  <img src="../assets/img/github.png" alt="GitHub Logo" class="w-6 h-6">
                    <span>GitHub</span>
                  </button>
             </div>


            </div>
            <div v-else class="space-y-4">
              <div>
                <label for="fullName" class="block text-sm font-medium text-gray-700">Nom</label>
                <input v-model="fullName" type="text" name="fullName" id="fullName" autocomplete="none" placeholder="Enter Full Name" class="w-full px-3 py-2 border rounded-md placeholder-gray-500">
              </div>
              <button @click="doCreateAccount" class="w-full py-2 px-4 bg-white text-black hover:bg-orange-100 border-4 border-f6d5d2 rounded-full font-semibold">Enregistrer nouvel utilisateur</button>
              <button @click="loginMode = true" class="w-full py-2 px-4 bg-red-600 hover:bg-red-500 rounded-full text-white font-semibold">Annuler</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script setup>

const logingoogle = async () => {
  await pb.collection("users").authWithOAuth2({ provider: "google" });
  if (pb.authStore.isValid) {
    document.getElementById("status").innerHTML = "You are now logged in";
    connected.value = true;
    currentUser.value = pb.authStore.model;
  }
};

const githublogin = async () => {
  await pb.collection("users").authWithOAuth2({ provider: "github" });
  if (pb.authStore.isValid) {
    document.getElementById("status").innerHTML = "You are now logged in";
    connected.value = true;
    currentUser.value = pb.authStore.model;
    document.getElementById("signOut").style.visibility = "hidden";
  }
};



  import { onMounted, ref } from 'vue';
  import PocketBase from 'pocketbase';
  
  let pb = null;
  const currentUser = ref();
  const username = ref("");
  const password = ref("");
  const fullName = ref("");
  
  const loginMode = ref(true);
  
  onMounted(async () => {
    pb = new PocketBase('http://127.0.0.1:8090');
  
    pb.authStore.onChange(() => {
      currentUser.value = pb.authStore.model
    }, true)
  
  });
  
  const doLogout = () => {
    pb.authStore.clear();
    currentUser.value = null;
  }
  
  const doLogin = async () => {
    try {
      const authData = await pb.collection('users')
        .authWithPassword(username.value, password.value);
  
      // after the above you can also access the auth data from the authStore
      console.log(pb.authStore.isValid);
      console.log(pb.authStore.token);
      console.log(pb.authStore.model);
      // currentUser.value = pb.authStore.model
    } catch (error) {
      alert(error.message)
    }
  }
  
  const doCreateAccount = async () => {
    try {
      const data = {
        "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
        "email": username.value,
        "emailVisibility": true,
        "password": password.value,
        "passwordConfirm": password.value,
        "name": fullName.value
      };
  
      const record = await pb.collection('users').create(data);
  
      await doLogin();
    } catch (error) {
      alert(error.message)
    }
  }
  
  </script>

  <style scoped>
  .border-f6d5d2 {
border-color: #F6D5D2;
}
</style>