<template>
  <div>
    <v-card class="banner" outlined>
      <v-row class="d-flex align-center justify-left mx-auto red--text pt-10 mt-10">
      <h1 class="pt-15 mt-15 pl-10 ml-10">Kenali Calon Pilihanmu Sebelum Pilih!</h1>
      </v-row>
      <v-row class="d-flex align-center justify-left mx-auto black--text">
      <h3 class="pt-5 pl-10 ml-10">Temukan informasi terlengkap terkait pejabat publik di seluruh Indonesia hanya di Wakilmu.id</h3>
      </v-row>
    </v-card>
    <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
      <v-col cols="12" sm="6" md="8"
        v-if="!viewMoreActivated"> <!-- col berita -->
        <h3 class="red--text">Berita Terbaru</h3>
        <v-divider style="background-color:red; height: 20px; width:17%;"></v-divider>
        <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>
        <br />
        <v-row align="center"
          v-for="(item,i) in items.slice(0,5)"
          :key="i"
          >
          <v-col cols="4"><!-- col gambar -->
            <v-img
              @click="redirectDetailBerita(item)"
              :src="item.image"
              height="150"/>
          </v-col>
          <v-col cols="8" class="pl-2"> <!-- col judul berita -->
            <!-- <router-link style="text-decoration: none; color: black;" to="/detailBerita"><h3 class="font-weight-bold" v-text="item.title"></h3></router-link> -->
            <a @click="redirectDetailBerita(item)" class="font-weight-bold black--text text-h6" v-text="item.title"></a>
            <h5 class="font-weight-light" v-text="item.isoDate"></h5>
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
          v-for="(item,i) in items.slice(0,10)"
          :key="i">
          <v-col cols="4"><!-- col gambar -->
            <router-link to="/detailBerita">
            <v-img
             :src="item.image"
             @click="redirectDetailBerita(item)"
             height="150"/></router-link>
          </v-col>
          <v-col cols="8" class="pl-2"> <!-- col judul berita -->
            <a @click="redirectDetailBerita(item)" class="font-weight-bold black--text text-h6" v-text="item.title"></a>
            <h5 class="font-weight-light" v-text="item.isoDate"></h5>
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
              height="100"
              v-on:click="redirect"/>
          </v-col>
          <v-col cols="6" class="pl-2"> <!-- col nama profil -->
            <router-link to="/profilPejabat" style="text-decoration: none; color: black;"><h3 class="font-weight-bold" v-text="item.title"></h3></router-link>
            <h5 class="font-weight-light" v-text="item.rating"></h5>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import {Services} from '../services/Services'

const APIServices = new Services()

export default {
  name: "IsiHomePage",
  data() {
    return {
      items: [],
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
  async mounted() {
    this.getnews().then((data) => {
      this.items = data.data
    })
    console.log(this.items)
  },
  methods: {
    viewMore(){
      this.viewMoreActivated = true;
    },
    redirect(){
      this.$router.push('/profilPejabat')
    },
    redirectDetailBerita(item){
      this.$session.start()
      this.$session.set('newsDa', item)
      this.$router.push('/DetailBerita')
    },
    async getnews() {
      const data = await APIServices.news2()
      .then((succ) => succ)
      .catch((error) => error)
      if (data.status === "ok") {
        return data
      } else {
        return data
      }
    }
  }
};
</script>

<style scoped>
  .banner {
      background: url('../assets/banner.png');
      background-size: cover;
      height: 500px;
  }
</style>