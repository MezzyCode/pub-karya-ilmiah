<script setup lang="js">
const navLinks = [
  { text: 'Dashboard', href: '/dashboard', icon: 'i-mdi:view-dashboard' },
  { text: 'Project Anda', href: '/my-projects', icon: 'i-mdi:bookmark-box-multiple' },
  { text: 'Profil', href: '/profile', icon: 'i-mdi:account-box' },
  { text: 'Download', href: '/download', icon: 'i-mdi:folder-download' },
  { text: 'Upload', href: '/upload', icon: 'i-mdi:folder-upload' },
]

const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value;
  console.log(drawer.value)
};
</script>

<template>
  <v-app-bar density="compact" class="app-bar">
    <v-app-bar-title><nuxt-link to="/">ReseaVue</nuxt-link></v-app-bar-title>
    <v-btn to="/" icon="i-mdi:home" rounded="0"/>
    <v-btn to="/search" icon="i-mdi:search" rounded="0" />
    <v-app-bar-nav-icon icon="i-mdi:menu" @click="toggleDrawer" rounded="0"/>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list>
      <v-list-item v-for="(link, i) in navLinks" :key="i" :value="link" :to="link.href" color="primary">
        <template v-slot:prepend> <v-icon :icon="link.icon" /> </template>
        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style>
.app-bar {
  border-bottom: 1px solid var(--v-theme-primary);
}
</style>