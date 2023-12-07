<script setup lang="js">
const userRole = ref('user'); // Set this dynamically based on the user role

const commonLinks = [
  { title: userRole.value, props: { prependIcon: 'i-mdi:account', to: '/profile' } },
  { type: 'divider' },
  { title: 'Dashboard', props: { prependIcon: 'i-mdi:view-dashboard', to: '/dashboard' } },
  { title: 'Download', props: { prependIcon: 'i-mdi:folder-download', to: '/download' } },
];

const roleLinks = {
  user: [
    { title: 'Project Anda', props: { prependIcon: 'i-mdi:bookmark-box-multiple', to: '/my-projects' } },
    { title: 'Upload', props: { prependIcon: 'i-mdi:folder-upload', to: '/upload' } },
  ],
  admin: [
    { title: 'Kelola Akun', props: { prependIcon: 'i-mdi:account-group' } },
    { title: 'Cek Report', props: { prependIcon: 'i-mdi:file-check' } },
    { title: 'Kelola Karya Ilmiah', props: { prependIcon: 'i-mdi:file-document-edit' } },
  ],
  dosen: [
    { title: 'Cek Report', props: { prependIcon: 'i-mdi:file-check' } },
    { title: 'Cek Review', props: { prependIcon: 'i-mdi:eye-check' } },
  ],
};

const navLinks = computed(() => {
  const roleSpecificLinks = roleLinks[userRole.value] || [];
  return [...commonLinks, { type: 'divider' }, ...roleSpecificLinks];
});


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
    <v-list :items="navLinks">
    </v-list>
    <template v-slot:append>
      <v-btn class="pa-2" block color="primary" rounded="0" prepend-icon="i-mdi:logout">Logout</v-btn>
    </template>
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