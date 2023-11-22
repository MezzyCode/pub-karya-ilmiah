<script setup>
const route = useRoute();
const title = computed(() => {
  return route.meta?.title || route.matched[0].meta?.title || ''
})

useHead({
  title,
  titleTemplate: (t) => (t ? `${t} | ReseaVue` : 'ReseaVue')
})
</script>

<template>
  <v-app>
    <Navigation />
    <v-main>
      <NuxtPage />
    </v-main>
    <Footer />
  </v-app>
</template>
