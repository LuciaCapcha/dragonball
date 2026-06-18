<!-- src/pages/DragonBallPage.vue -->
<!-- LA PÁGINA: une la búsqueda + la cuadrícula y pide los datos a la API. -->
<template>
  <q-page class="dbz-page">
    <!-- Encabezado con título y la BÚSQUEDA en la parte superior -->
    <section class="dbz-hero">
      <h1 class="dbz-hero__title">DRAGON BALL</h1>
      <p class="dbz-hero__subtitle">Explora a los personajes del universo Dragon Ball</p>

      <div class="dbz-hero__search">
        <SearchBar v-model="busqueda" />
      </div>
    </section>

    <!-- Mientras carga, mostramos un spinner -->
    <div v-if="cargando" class="flex flex-center q-pa-xl">
      <q-spinner-dots color="orange-9" size="60px" />
    </div>

    <!-- Si hubo un error al traer los datos -->
    <q-banner v-else-if="error" class="bg-red-1 text-red-9 q-ma-md rounded-borders">
      No se pudieron cargar los personajes. Revisa tu conexión e inténtalo de nuevo.
    </q-banner>

    <!-- Si la búsqueda no encuentra nada -->
    <div
      v-else-if="personajesFiltrados.length === 0"
      class="text-center text-grey-7 q-pa-xl text-h6"
    >
      No se encontró ningún personaje con "{{ busqueda }}".
    </div>

    <!-- La cuadrícula con los resultados -->
    <CharacterGrid v-else :characters="personajesFiltrados" class="q-pa-md q-mx-auto dbz-grid" />
  </q-page>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getCharacters } from '@/services/dragonball'
import SearchBar from '@/components/SearchBar.vue'
import CharacterGrid from '@/components/CharacterGrid.vue'

// "Estados" reactivos de la página
const personajes = ref([]) // todos los personajes traídos de la API
const busqueda = ref('') // lo que el usuario escribe en la barra
const cargando = ref(true) // true mientras esperamos a la API
const error = ref(false) // true si algo falla

// Lista filtrada: se recalcula sola cada vez que cambia "busqueda".
const personajesFiltrados = computed(() => {
  const texto = (busqueda.value || '').toLowerCase().trim()
  if (!texto) return personajes.value
  return personajes.value.filter((p) => p.name.toLowerCase().includes(texto))
})

// onMounted se ejecuta una vez, cuando la página aparece en pantalla.
onMounted(async () => {
  try {
    personajes.value = await getCharacters()
  } catch (e) {
    console.error(e)
    error.value = true
  } finally {
    cargando.value = false
  }
})
</script>

<style scoped>
.dbz-page {
  background: #f6f7fb;
}
.dbz-hero {
  text-align: center;
  padding: 40px 16px 28px;
  background: linear-gradient(135deg, #ff9d00 0%, #fac02d 100%);
  color: #1a1a1a;
}
.dbz-hero__title {
  margin: 0;
  font-size: clamp(40px, 8vw, 72px);
  font-weight: 900;
  letter-spacing: 2px;
  color: #fff;
  text-shadow: 3px 3px 0 #d35400, 6px 6px 0 rgba(0, 0, 0, 0.15);
}
.dbz-hero__subtitle {
  margin: 8px 0 24px;
  font-size: 18px;
  font-weight: 600;
}
.dbz-hero__search {
  display: flex;
  justify-content: center;
}
.dbz-grid {
  max-width: 1280px;
}
</style>