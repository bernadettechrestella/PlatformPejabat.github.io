<template>
  <div>
    <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
      <v-col cols="12" sm="6" md="8"
        v-if="!viewMoreActivated"> <!-- col berita -->
        <h3 class="red--text">Berita Terbaru</h3>
        <v-divider style="background-color:red; height: 20px; width:17%;"></v-divider>
        <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>
        <br />
        <v-row align="center"
          v-for="(item,i) in items.slice(0,2)"
          :key="i">
          <v-col cols="4"><!-- col gambar -->
            <router-link to="/detailBerita">
            <v-img
             :src="item.src"
             height="150"/></router-link>
          </v-col>
          <v-col cols="8" class="pl-2"> <!-- col judul berita -->
            <router-link style="text-decoration: none; color: black;" to="/detailBerita"><h3 class="font-weight-bold" v-text="item.title"></h3></router-link>
            <h5 class="font-weight-light" v-text="item.time"></h5>
          </v-col>
        </v-row>
        <br />
        <v-btn
          color="red"
          block
          outlined
          rounded
          v-on:click="viewMore"
        >Lihat lebih banyak</v-btn>
      </v-col>
      <!-- col berita sesudah view more-->
      <v-col cols="12" sm="6" md="8"
        v-if="viewMoreActivated"> 
        <h3 class="red--text">Berita Terbaru</h3>
        <v-divider style="background-color:red; height: 20px; width:17%;"></v-divider>
        <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>
        <br />
        <v-row align="center"
          v-for="(item,i) in items"
          :key="i">
          <v-col cols="4"><!-- col gambar -->
            <v-img
             :src="item.src"
             height="150"/>
          </v-col>
          <v-col cols="8" class="pl-2"> <!-- col judul berita -->
            <h3 class="font-weight-bold" v-text="item.title"></h3>
            <h5 class="font-weight-light" v-text="item.time"></h5>
          </v-col>
        </v-row>
        <br />
      </v-col>

      <v-col cols="6" md="4"> <!-- profil populer-->
        <h3 class="red--text">Profil Teratas</h3>
        <v-divider style="background-color:red; height: 20px; width:33%;"></v-divider>
        <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>
        <br />
        <v-row align="center"
          v-for="(item,i) in itempopuler"
          :key="i">
          <v-col cols="1">
            <h3 class="font-weight-bold red--text" v-text="i+1"></h3>
          </v-col>
          <v-col cols="3"> <!-- col foto profil -->
            <v-img
              :src="item.src"
              contain
              height="100"/>
          </v-col>
          <v-col cols="6" class="pl-2"> <!-- col nama profil -->
            <h3 class="font-weight-bold" v-text="item.title"></h3>
            <h5 class="font-weight-light" v-text="item.rating"></h5>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </div>
</template>

<script>
export default {
  name: "IsiHomePage",
  data() {
    return {
      items: [
        {
          src: require("../assets/background.jpeg"),
          title: "Wewenang Baru Megawati Usai Jokowi Teken Perpres Baru BRIN",
          time: "2 jam yang lalu"
        },
        {
          src: require("../assets/background.jpeg"),
          title: "Wewenang Baru Megawati Usai Jokowi Teken Perpres Baru BRIN",
          time: "2 jam yang lalu"
        },
        {
          src: require("../assets/background.jpeg"),
          title: "Wewenang Baru Megawati Usai Jokowi Teken Perpres Baru BRIN",
          time: "2 jam yang lalu"
        },
        {
          src: require("../assets/background.jpeg"),
          title: "Wewenang Baru Megawati Usai Jokowi Teken Perpres Baru BRIN",
          time: "2 jam yang lalu"
        },
        {
          src: require("../assets/background.jpeg"),
          title: "Wewenang Baru Megawati Usai Jokowi Teken Perpres Baru BRIN",
          time: "2 jam yang lalu"
        }
      ],
      viewMoreActivated: false,
      itempopuler: [
        {
          src: require("../assets/JokoWi.jpg"),
          title: "Joko Widodo",
          rating: "13.231 kunjungan"
        },
        {
          src: require("../assets/JokoWi.jpg"),
          title: "Joko Widodo",
          rating: "13.231 kunjungan"
        },
        {
          src: require("../assets/JokoWi.jpg"),
          title: "Joko Widodo",
          rating: "13.231 kunjungan"
        },
        {
          src: require("../assets/JokoWi.jpg"),
          title: "Joko Widodo",
          rating: "13.231 kunjungan"
        },
        {
          src: require("../assets/JokoWi.jpg"),
          title: "Joko Widodo",
          rating: "13.231 kunjungan"
        },
      ]
    };
  },
  methods: {
    viewMore(){
      this.viewMoreActivated = true;
    }
  }
};
</script>