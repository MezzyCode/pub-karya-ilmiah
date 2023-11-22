<script setup lang="js">
const navLinks = [
  { title: 'Dashboard', href: '/dashboard', icon: 'i-mdi:view-dashboard' },
  { title: 'Project Anda', href: '/my-projects', icon: 'i-mdi:bookmark-box-multiple' },
  { title: 'Profil', href: '/profile', icon: 'i-mdi:account-box' },
  { title: 'Download', href: '/download', icon: 'i-mdi:folder-download' },
  { title: 'Upload', href: '/upload', icon: 'i-mdi:folder-upload' },
  { title: 'Login', icon: 'i-mdi:login' },
  { title: 'Logout', icon: 'i-mdi:logout' }
]
const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value;
  console.log(drawer.value)
};
</script>

<template>
  <v-app-bar density="compact" class="app-bar">
    <v-app-bar-title><nuxt-link to="/" class="logo">ReseaVue</nuxt-link></v-app-bar-title>
    <v-btn to="/" icon="i-mdi:home" rounded="0" />
    <v-btn to="/search" icon="i-mdi:search" rounded="0" />
    <v-app-bar-nav-icon icon="i-mdi:menu" @click="toggleDrawer" rounded="0" />
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list>
      <v-list-item v-for="(link, i) in navLinks" :key="i" :value="link" :title="link.title" :to="link.href"
        color="primary">
        <template v-slot:prepend> <v-icon :icon="link.icon" /> </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.logo {
  text-decoration: none;
  font-weight: 500;
  color: rgb(var(--v-theme-primary));
  animation: glow 1.5s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    text-shadow: 0 0 0px rgb(var(--v-theme-primary-darken-1));
  }

  to {
    text-shadow: 0 0 1px rgb(var(--v-theme-primary-darken-2));
  }
}

.app-bar {
  border-bottom: 1px solid rgb(var(--v-theme-primary));
}
</style>