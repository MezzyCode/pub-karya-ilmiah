<script setup lang="js">
const heroSlogans = [
  'Berkarya, Berbagi, Bertumbuh dengan ReseaVue',
  // Add more slogans as needed
];
</script>

<template>
  <div>
    <!-- Hero Section -->
    <v-container fluid>
      <v-row align="center">
        <v-col>
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
        </v-col>
      </v-row>
    </v-container>

    <!-- Main Features Section -->
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="text-h4">Main Feature: Memudahkan Publikasi Ilmiah</v-card-title>
            <v-card-text>
              Publikasikan karya ilmiah Anda dengan mudah dan dapatkan pengakuan yang sebanding.
            </v-card-text>
          </v-card>
        </v-col>
        <!-- Add similar v-col blocks for other main features -->
      </v-row>
    </v-container>

    <!-- Benefits Section -->
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="text-h4">Keuntungan ReseaVue</v-card-title>
            <v-card-text>
              Manfaatkan ReseaVue untuk pengelolaan karya ilmiah yang efisien oleh dosen dan BAAK.
            </v-card-text>
          </v-card>
        </v-col>
        <!-- Add similar v-col blocks for other benefits -->
      </v-row>
    </v-container>

    <!-- About ReseaVue Section -->
    <v-container>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title class="text-h4">Tentang ReseaVue</v-card-title>
            <v-card-text>
              <v-row>
                <v-col>
                  <v-card-title class="text-h5">Vision and Mission</v-card-title>
                  <v-card-text>
                    ReseaVue diciptakan untuk memfasilitasi pertukaran pengetahuan dan kolaborasi di antara mahasiswa.
                  </v-card-text>
                </v-col>
                <v-col>
                  <v-card-title class="text-h5">Why ReseaVue</v-card-title>
                  <v-card-text>
                    Platform inovatif yang mengutamakan aksesibilitas dan pengakuan karya ilmiah mahasiswa.
                  </v-card-text>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>

