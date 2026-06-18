<!-- src/components/CharacterCard.vue -->
<!-- COMPONENTE 2: La tarjeta de UN personaje (imagen + nombre + datos). -->
<template>
  <q-card class="character-card" flat bordered>
    <!-- Imagen del personaje -->
    <div class="character-card__img-wrap">
      <q-img
        :src="character.image"
        :alt="character.name"
        fit="contain"
        class="character-card__img"
        loading="lazy"
      />
    </div>

    <!-- Datos -->
    <q-card-section class="character-card__body">
      <div class="character-card__name">{{ character.name }}</div>

      <div class="character-card__tags">
        <q-badge color="orange-9" :label="character.race" rounded />
        <q-badge outline color="grey-8" :label="character.gender" rounded />
      </div>

      <div class="character-card__ki">
        <q-icon name="bolt" size="16px" color="orange-9" />
        Ki: {{ character.ki }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
// El padre nos pasa el personaje a través de la "prop" character.
defineProps({
  character: { type: Object, required: true },
})
</script>

<style scoped>
.character-card {
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background: #ffffff;
  height: 100%;
}
.character-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(255, 157, 0, 0.35);
}
.character-card__img-wrap {
  background: radial-gradient(circle at 50% 30%, #fff3d6 0%, #fac02d 100%);
  padding: 12px;
}
.character-card__img {
  height: 220px;
}
.character-card__body {
  text-align: center;
}
.character-card__name {
  font-size: 20px;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 8px;
}
.character-card__tags {
  display: flex;
  gap: 6px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 8px;
}
.character-card__ki {
  font-size: 14px;
  color: #555;
  font-weight: 600;
}
</style>