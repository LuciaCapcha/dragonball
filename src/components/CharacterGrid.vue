<!-- src/components/CharacterGrid.vue -->
<!-- COMPONENTE 3: La cuadrícula (grid) que muestra muchas tarjetas. -->
<template>
  <div class="row q-col-gutter-md justify-center">
    <!-- Por cada personaje de la lista, pintamos una CharacterCard.
         Las clases col-* hacen que sea responsive:
         1 columna en móvil, 2 en tablet, 3-4 en pantallas grandes. -->
    <div
      v-for="character in characters"
      :key="character.id"
      class="col-12 col-sm-6 col-md-4 col-lg-3"
    >
      <CharacterCard :character="character" />
    </div>
  </div>
</template>

<script setup>
import CharacterCard from '@/components/CharacterCard.vue'

// Recibimos la lista de personajes ya filtrada desde la página.
defineProps({
  characters: { type: Array, default: () => [] },
})
</script>