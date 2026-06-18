<!-- src/components/SearchBar.vue -->
<!-- COMPONENTE 1: La barra de búsqueda de la parte superior. -->
<template>
  <q-input
    v-model="texto"
    filled
    rounded
    clearable
    bg-color="white"
    placeholder="Buscar personaje... (ej: Goku, Vegeta, Cell)"
    class="search-bar"
  >
    <!-- Iconito de lupa al inicio del input -->
    <template #prepend>
      <q-icon name="search" color="orange-9" />
    </template>
  </q-input>
</template>

<script setup>
// defineModel crea un v-model de doble vía con el componente padre.
// Cuando el usuario escribe, el texto sube automáticamente a la página.
const texto = defineModel({ type: String, default: '' })
</script>

<style scoped>
.search-bar {
  max-width: 520px;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
}
</style>