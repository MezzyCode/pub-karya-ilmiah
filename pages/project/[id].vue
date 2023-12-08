<script setup lang="js">
import projectsData from '~/static/userData.json';

const route = useRoute();
const data = ref({});
console.log(data)

onMounted(() => {
  const projectId = route.params.id;
  fetchProjectData(projectId);
})

async function fetchProjectData(projectId) {
  // Find the project with the matching ID
  const project = projectsData.find((p) => p.id.toString() === projectId);

  // Check if the project is found
  if (project) {
    // Assign the project data to the reactive 'data' property
    data.value = project;
  } else {
    // Handle case where project is not found (e.g., redirect or show an error)
    console.error(`Project with ID ${projectId} not found`);
    // Optionally, you can redirect the user or show an error message here
  }
}

</script>

<template>
  <v-card>
    <v-row>
      <v-col>
        <v-card-title v-text="data.projectTitle" />
        <v-card-subtitle>
          <template v-if="Array.isArray(data.language)">
            <!-- Display a v-chip for each language in the array -->
            <v-chip v-for="item in data.language" :key="item" class="mr-2">
              {{ item }}
            </v-chip>
          </template>
          <template v-else>
            <!-- Display a single v-chip for a non-array language -->
            <v-chip :key="data.language" class="mr-2">
              {{ data.language }}
            </v-chip>
          </template>
          <span class="mr-2">|</span>
          <template v-if="Array.isArray(data.framework)">
            <!-- Display a v-chip for each language in the array -->
            <v-chip v-for="item in data.framework" :key="item" class="mr-2">
              {{ item }}
            </v-chip>
          </template>
          <template v-else>
            <!-- Display a single v-chip for a non-array language -->
            <v-chip :key="data.framework" class="mr-2">
              {{ data.framework }}
            </v-chip>
          </template>
        </v-card-subtitle>
        <v-card-text v-text="data.projectDesc" />
        <v-card-text class="d-flex">
          <div class="mr-2">
            <p>Di Upload pada</p>
            <p>Di Update pada</p>
            <p>Mata Kuliah</p>
            <p>Nilai</p>
            <p>Jumlah Download</p>
          </div>
          <div>
            <p>: 01 Januari 2000</p>
            <p>: 01 Januari 2000</p>
            <p>: Pemrograman Web</p>
            <p>: 80</p>
            <p>: 200</p>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-space-between">
          <div>
            <v-btn color="primary" variant="outlined">Download</v-btn>
            <v-btn color="primary" variant="outlined">Review</v-btn>
            <v-btn color="error">Report</v-btn>
          </div>
          <div>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>
            <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
          </div>
        </v-card-actions>
      </v-col>
      <v-col>
        <v-carousel>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
          <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-card>
</template>