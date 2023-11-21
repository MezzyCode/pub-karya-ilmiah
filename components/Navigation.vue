<script setup lang="js">
const drawer = ref(false)
const toggleDrawer = () => {
  drawer.value = !drawer.value;
  console.log(drawer.value)
};

const navLinks = [
  { text: 'Dashboard', icon: 'i-mdi:view-dashboard' },
  { text: 'Project Anda', icon: 'i-mdi:bookmark-box-multiple' },
  { text: 'Profil', icon: 'i-mdi:account-box' },
  { text: 'Download', icon: 'i-mdi:folder-download' },
  { text: 'Upload', icon: 'i-mdi:folder-upload' },
]
</script>

<template>
  <v-app-bar>
    <v-app-bar-title>ReseaVue</v-app-bar-title>
    <v-app-bar-nav-icon icon="i-mdi:menu" @click="toggleDrawer" />
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list>
      <v-list-item v-for="(item, i) in navLinks" :key="i" :value="item" color="primary">
        <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>