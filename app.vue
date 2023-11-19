<script>
export default {
  data: () => ({
    items: [
      { text: 'Dashboard', icon: 'i-mdi:view-dashboard' },
      { text: 'Project Anda', icon: 'i-mdi:bookmark-box-multiple' },
      { text: 'Profil', icon: 'i-mdi:account-box' },
      { text: 'Download', icon: 'i-mdi:folder-download' },
      { text: 'Upload', icon: 'i-mdi:folder-upload' },
    ],
  }),
}
</script>

<template>
  <div>
    <v-layout class="rounded rounded-md">
      <v-app-bar title="Application bar"></v-app-bar>

      <v-navigation-drawer>
        <v-list>
          <v-list-item v-for="(item, i) in items" :key="i" :value="item" color="primary">
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <NuxtPage />
      </v-main>
    </v-layout>
  </div>
</template>
