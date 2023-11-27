<script setup lang="js">
const heroSlogans = [
  'Berkarya, Berbagi, Bertumbuh dengan ReseaVue',
  'Slogan 2',
  'Slogan 3',
  'Slogan 4',
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid class="pa-0">
      <div>
        <v-img src="/hero-image.jpg" alt="Hero Image" height="400px">
          <v-row class="fill-height align-center">
            <v-col>
              <v-carousel cycle hide-delimiters>
                <v-carousel-item v-for="slogan in heroSlogans" :key="slogan">
                  <v-row justify="center">
                    <v-col>
                      <v-card class="pa-5" color="rgba(0, 0, 0, 0.5)">
                        <v-text class="white--text text-h2">{{ slogan }}</v-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-carousel-item>
              </v-carousel>
            </v-col>
          </v-row>
        </v-img>
      </div>
      <v-sheet class="d-flex align-center justify-center flex-wrap text-center pa-4">
        <v-row>
          <v-col cols="12">
            <div class="mx-auto" style="max-width: 600px;">
              <h2 class="mb-4">Kenapa ReseaVue Berbeda</h2>
              <p class="text-body-2 mb-4">
                ReseaVue lahir dari keinginan untuk memberdayakan mahasiswa dalam berbagi
                pengetahuan mereka dengan dunia, sambil memastikan bahwa setiap karya ilmiah diakui sebanding dengan
                kualitas dan signifikansinya.
              </p>
              <v-btn color="primary" to="/search">Ayo Coba Sekarang!</v-btn>
            </div>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="12" md="6">
                <div>
                  <h2 class="mb-4">Memudahkan Publikasi Ilmiah</h2>
                  <p class="text-body-2 mb-4">
                    Publikasikan karya ilmiah Anda dengan mudah dan dapatkan pengakuan yang sebanding.
                  </p>
                </div>
                <div>
                  <h2 class="mb-4">Membantu Dokumentasi</h2>
                  <p class="text-body-2 mb-4">
                    Manfaatkan ReseaVue untuk pengelolaan karya ilmiah yang efisien oleh dosen dan BAAK.
                  </p>
                </div>
                <div>
                  <h2 class="mb-4">Mendorong Pertukaran Ide</h2>
                  <p class="text-body-2 mb-4">
                    ReseaVue diciptakan untuk memfasilitasi pertukaran pengetahuan dan kolaborasi di antara mahasiswa.
                  </p>
                </div>
              </v-col>
              <v-col cols="12" md="6">
                <h2>Image Here</h2>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>

