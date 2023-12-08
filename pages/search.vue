<script setup lang="js">
import projectsData from '~/static/userData.json';

const items = [
  { title: 'C', icon: 'i-mdi:language-c' },
  { title: 'C++', icon: 'i-mdi:language-cpp' },
  { title: 'Go', icon: 'i-mdi:language-go' },
  { title: 'Java', icon: 'i-mdi:language-java' },
  { title: 'JavaScript', icon: 'i-mdi:language-javascript' },
  { title: 'Kotlin', icon: 'i-mdi:language-kotlin' },
  { title: 'PHP', icon: 'i-mdi:language-php' },
  { title: 'Python', icon: 'i-mdi:language-python' },
  { title: 'Ruby', icon: 'i-mdi:language-ruby' },
  { title: 'Rust', icon: 'i-mdi:language-rust' },
  { title: 'Swift', icon: 'i-mdi:language-swift' },
  { title: 'TypeScript', icon: 'i-mdi:language-typescript' }
];

const framework = [
  { title: 'Angular', icon: 'i-mdi:angular' },
  { title: 'Django', icon: 'i-mdi:django' },
  { title: 'Express.js', icon: 'i-mdi:express' },
  { title: 'Flask', icon: 'i-mdi:flask' },
  { title: 'Laravel', icon: 'i-mdi:laravel' },
  { title: 'React', icon: 'i-mdi:react' },
  { title: 'Ruby on Rails', icon: 'i-mdi:rails' },
  { title: 'Spring Boot', icon: 'i-mdi:spring' },
  { title: 'Vue.js', icon: 'i-mdi:vuejs' },
  { title: 'ASP.NET', icon: 'i-mdi:dot-net' }
];

const projects = projectsData;

</script>

<template>
  <v-container>
    <v-row class="flex-column mb-4">
      <h1 class="text-h4 my-4">Cari Project</h1>
      <div>
        <v-text-field clearable variant="outlined" color="primary" prepend-inner-icon="i-mdi:search" density="compact" />
        <h2 class="text-h6 mb-1">Bahasa Pemrograman</h2>
        <v-chip-group multiple selected-class="text-primary" class="justify-center">
          <v-chip v-for="item in items" :key="item.title" :prepend-icon="item.icon">
            {{ item.title }}
          </v-chip>
        </v-chip-group>
        <h2 class="text-h6 mb-1">Framework</h2>
        <v-chip-group multiple selected-class="text-primary" class="justify-center">
          <v-chip v-for="item in framework" :key="item.title" :prepend-icon="item.icon">
            {{ item.title }}
          </v-chip>
        </v-chip-group>
      </div>
      <v-divider class="my-4" />
    </v-row>
    <v-row>
      <v-col v-for="project in projects" :key="project.id" cols="4">
        <v-card class="pb-2" :href="`project/${project.id}`">
          <v-card-title v-text="project.projectTitle"></v-card-title>
          <v-card-subtitle>
            <template v-if="Array.isArray(project.language)">
              <!-- Display a v-chip for each language in the array -->
              <v-chip v-for="item in project.language" :key="item" class="mr-2">
                {{ item }}
              </v-chip>
            </template>
            <template v-else>
              <!-- Display a single v-chip for a non-array language -->
              <v-chip :key="project.language" class="mr-2">
                {{ project.language }}
              </v-chip>
            </template>
            <span class="mr-2">|</span>
            <template v-if="Array.isArray(project.framework)">
              <!-- Display a v-chip for each language in the array -->
              <v-chip v-for="item in project.framework" :key="item" class="mr-2">
                {{ item }}
              </v-chip>
            </template>
            <template v-else>
              <!-- Display a single v-chip for a non-array language -->
              <v-chip :key="project.framework" class="mr-2">
                {{ project.framework }}
              </v-chip>
            </template>
          </v-card-subtitle>
          <v-card-text> {{ project.projectDesc }} </v-card-text>
          <v-card-actions>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.custom-search-bar {
  background: rgb(var(--v-theme-surface));
}
</style>