<template>
  <footer v-if="$slidev.nav.currentLayout !== 'cover' && $slidev.nav.currentLayout !== 'intro'" class="slide-footer">
    <span class="footer-left">© TechTown — {{ $slidev.configs.title }} — {{ new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) }}</span>
    <span class="footer-right">{{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}</span>
  </footer>
</template>

<style scoped>
.slide-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 0.7rem;
  color: #6b7280;
  z-index: 10;
}

.footer-left {
  opacity: 0.7;
}

.footer-right {
  opacity: 0.7;
  font-variant-numeric: tabular-nums;
}
</style>
