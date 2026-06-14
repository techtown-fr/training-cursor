<script setup>
import logo from 'slidev-theme-techtown/public/techtown-logo.svg?url'
</script>

<template>
  <header v-if="$slidev.nav.currentLayout !== 'cover' && $slidev.nav.currentLayout !== 'intro' && $slidev.nav.currentLayout !== 'end'" class="slide-header">
    <img :src="logo" class="header-logo" />
  </header>
</template>

<style scoped>
.slide-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  padding: 12px 24px;
  z-index: 10;
}

.header-logo {
  height: 18px;
  opacity: 0.6;
}
</style>
