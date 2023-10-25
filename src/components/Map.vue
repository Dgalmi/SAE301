<script setup>

import { onMounted, ref } from 'vue'

import * as Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'


let tileLayer = Leaflet.tileLayer

let map = ref()


let coordMe = ref({
    latitude: 0,
    longitude: 0
})

onMounted(async () => {

    tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
    );

    map = Leaflet.map('map',
        {
            zoomControl: true,
            layers: [tileLayer],
            maxZoom: 18,
            minZoom: 6
        })

        .setView([47.50967241175376, 6.800242276468972], 15)


    let myIcon = Leaflet.icon({
        iconUrl: 'images/marker-icon.png',       // Image de l'icone
        shadowUrl: 'images/marker-shadow.png',     // Ombre de l'icone
        iconSize: [25, 41],                       // Taille de l'icone
        shadowSize: [25, 41],                       // Taille de l'ombre de l'icone
        iconAnchor: [-10, -10],                      // Ancrage de l'icone
        shadowAnchor: [-10, -10],                    // Ancrage de l'ombre de l'icone
        popupAnchor: [0, 0]                         // Point de position de la popup si elle existe
    })


    let marker = Leaflet.marker([47.50967241175376, 6.800242276468972], { icon: myIcon }).addTo(map)


    marker.bindPopup('Notre boutique')


    setTimeout(
        function () {
            map.panTo([47.50133850064826, 6.807621746718467])
        }, 5000
    )

})

const locMe = () => {

    navigator.geolocation.getCurrentPosition(showLocation)
}
const showLocation = (position) => {
    console.log("postion", position)

    coordMe.value.latitude = position.coords.latitude
    coordMe.value.longitude = position.coords.longitude

    map.panTo([coordMe.value.latitude, coordMe.value.longitude])

    let markerMe = Leaflet.marker([coordMe.value.latitude, coordMe.value.longitude]).addTo(map)

    markerMe.bindPopup('Je suis la  !!!!')
}

</script>
<template>
    <div>
        <h1 class="text-3xl mb-4 text-noir text-center font-lato mt-8 font-bold underline">Où nous situons-nous ?</h1>
        <div class="container mx-auto px-4 py-8 bg-gris rounded-lg">
            <div id="map">
            </div>
        </div>
    </div>
</template>
<style scoped>
#map{
    width:100%;
    height: 70vh;
}</style>