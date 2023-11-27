<script lang="js">
export default {
  data() {
    return {
      select: ['C++', 'Go'],
      items: [
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
      ],
      framework: [
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
      ],
      projects: [
        {
          id: 1,
          projectTitle: 'Web Chat Application',
          uploadDate: '2023-01-01',
          acceptedDate: '2023-01-10',
          language: 'JavaScript',
          framework: 'React',
          projectDesc: 'A real-time web chat application built using React and WebSocket.'
        },
        {
          id: 2,
          projectTitle: 'E-commerce Platform',
          uploadDate: '2023-02-05',
          acceptedDate: '2023-02-15',
          language: 'Python',
          framework: 'Django',
          projectDesc: 'An e-commerce platform developed using Django for backend and JavaScript for frontend.'
        },
        {
          id: 3,
          projectTitle: 'Portfolio Website',
          uploadDate: '2023-03-10',
          acceptedDate: '2023-03-20',
          language: 'TypeScript',
          framework: 'React',
          projectDesc: 'Personal portfolio website built with React and TypeScript.'
        },
        {
          id: 4,
          projectTitle: 'Blog Platform',
          uploadDate: '2023-04-15',
          acceptedDate: '2023-04-25',
          language: 'Node.js',
          framework: 'Express.js',
          projectDesc: 'A simple blog platform with Node.js backend and Express.js for API.'
        },
        {
          id: 5,
          projectTitle: 'Task Management App',
          uploadDate: '2023-05-20',
          acceptedDate: '2023-05-30',
          language: 'Java',
          framework: 'Spring Boot',
          projectDesc: 'Task management application using Java and Spring Boot.'
        },
        {
          id: 6,
          projectTitle: 'Weather App',
          uploadDate: '2023-06-25',
          acceptedDate: '2023-07-05',
          language: 'JavaScript',
          framework: 'Vue.js',
          projectDesc: 'Weather application built with Vue.js and consuming a weather API.'
        },
        {
          id: 7,
          projectTitle: 'Social Media Dashboard',
          uploadDate: '2023-08-01',
          acceptedDate: '2023-08-10',
          language: 'JavaScript',
          framework: 'React',
          projectDesc: 'Dashboard for managing social media accounts using React.'
        },
        {
          id: 8,
          projectTitle: 'Recipe App',
          uploadDate: '2023-09-15',
          acceptedDate: '2023-09-25',
          language: 'Python',
          framework: 'Flask',
          projectDesc: 'Recipe application with Python backend using Flask framework.'
        },
        {
          id: 9,
          projectTitle: 'Job Board',
          uploadDate: '2023-10-20',
          acceptedDate: '2023-10-30',
          language: 'JavaScript',
          framework: 'Angular',
          projectDesc: 'Job board application built with Angular for the frontend.'
        },
        {
          id: 10,
          projectTitle: 'Movie Database',
          uploadDate: '2023-11-05',
          acceptedDate: '2023-11-15',
          language: 'JavaScript',
          framework: 'React',
          projectDesc: 'Database of movies created with React and fetching data from a movie API.'
        },
      ],
    }
  },
}


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
        <v-card class="pb-2">
          <v-card-title v-text="project.projectTitle"></v-card-title>
          <v-card-subtitle> {{ project.language }} | {{ project.framework }} </v-card-subtitle>
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