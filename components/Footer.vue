<script setup lang="js">
const icons = [
  'i-mdi:facebook',
  'i-mdi:twitter',
  'i-mdi:linkedin',
  'i-mdi:instagram',
]
</script>

<template>
  <v-footer class="footer pa-0 d-flex flex-column justify-space-between" style="height: 10%;">
    <v-container fluid>
      <v-row justify="space-around">
        <v-col cols="12" md="4" class="footer-item">
          <strong>Temui Kami</strong>
          <p>Kampus STTI NIIT</p>
          <p>Jalan Asem II No.22, RT.3/RW.4, Cipete Sel., Kec. Cilandak, Kota Jakarta Selatan, Daerah Khusus Ibukota
            Jakarta
            12410</p>
        </v-col>
        <v-col cols="12" md="4" class="footer-item">
          <strong>ReseaVue</strong>
          <p>ReseaVue adalah tempat di mana inovasi bertemu pengetahuan! Kami adalah platform yang didedikasikan untuk
            memfasilitasi pertukaran ide dan kolaborasi di antara mahasiswa dalam masyarakat akademik.</p>
        </v-col>
        <v-col cols="12" md="4" class="footer-item">
          <strong>Cari Kami</strong>
          <div>
            <v-btn v-for="icon in icons" :key="icon" :icon="icon" variant="text"></v-btn>
          </div>
        </v-col>
      </v-row>

    </v-container>
    <v-divider></v-divider>

    <div class="trademarks">
      {{ new Date().getFullYear() }} — <strong>STTI NIIT</strong>
    </div>
  </v-footer>
</template>

<style scoped>
.footer {
  background-color: rgb(var(--v-theme-primary));
}

.footer-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}

.footer-item>p {
  text-align: center;
}

.trademarks {
  padding: 0.8rem 0;
  width: 100%;
  text-align: center;
}
</style>
