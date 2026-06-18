<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="dbz-header">
      <q-toolbar>
        <q-icon name="sports_martial_arts" size="28px" class="q-mr-sm" />
        <q-toolbar-title class="dbz-header__title"> Dragon Ball App </q-toolbar-title>
        <div class="dbz-header__badge">Vue + Quasar</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
//
</script>

<style scoped>
.dbz-header {
  background: #1a1a1a;
}
.dbz-header__title {
  font-weight: 800;
  letter-spacing: 1px;
}
.dbz-header__badge {
  font-size: 12px;
  font-weight: 700;
  background: #fac02d;
  color: #1a1a1a;
  padding: 4px 10px;
  border-radius: 999px;
}
</style>