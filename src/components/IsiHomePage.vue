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
            <!-- <h5 class="font-weight-light" v-text="item.isoDate"></h5> -->
            <h5 class="font-weight-light">{{ item.isoDate | moment("DD MMMM YYYY, HH:mm") }}</h5>
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
            <h5 class="font-weight-light">{{ item.isoDate | moment("DD MMMM YYYY, HH:mm") }}</h5>
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
              height="125"
              width="90"
              v-on:click="redirectProfilPejabat(item)"/>
          </v-col>
          <v-col cols="8"> <!-- col nama profil -->
            <a v-on:click="redirectProfilPejabat(item)" class="font-weight-bold black--text text-h6" v-text="item.title"></a>
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
          title: "Ir. H. Joko Widodo",
          panggilan: "jokowi",
          rating: "231.231 kunjungan",
          ttl: "Surakarta, 21 Juni 1961",
          daerah: "DKI Jakarta",
          mejabat: "Presiden",
          mencalonkan: "-",
          fraksi: "PDIP",
          agama: "Islam",
          pendidikan: [
            {
              data: "SDN 112 Tirtoyoso",
              periode: "1973",
            },
            {
              data: "SMPN 1 Surakarta",
              periode: "1976"
            },
            {
              data: "SMAN 1 Surakarta",
              periode: "1980"
            },
            {
              data: "S1 Kehutanan",
              periode: "Fakultas Kehutanan (UGM)"
            }
          ],
          pengalaman: [
            {
              data: "Wali Kota Surakarta",
              periode: "28 Juli 2005 – 1 Oktober 2012",
            },
            {
              data: "Gubernur DKI Jakarta",
              periode: "15 Oktober 2012"
            },
            {
              data: "Presiden Indonesia",
              periode: "2014 - 2019"
            },
            {
              data: "Presiden Indonesia",
              periode: "2019 - 2024"
            }
          ],
          prestasi: [],
          biografi: "Ir. H. Joko Widodo adalah Presiden ke-7 Republik Indonesia yang mulai menjabat sejak 20 Oktober 2014. Lahir di Surakarta, Jawa Tengah, pada 21 Juni 1961, Joko Widodo pertama kali terjun ke pemerintahan sebagai Wali Kota Surakarta (Solo) pada 28 Juli 2005 hingga 1 Oktober 2012 Selepas itu, Joko Widodo menjabat sebagai Gubernur DKI Jakarta pada 15 Oktober 2012 sebelum terpilih sebagai Presiden Republik Indonesia pada Pemilihan Presiden (Pilpres) 2014. Saat Pilpres tersebut Joko Widodo terpilih bersama pasangannya, Jusuf Kalla. Dalam Pilpres 2019, Joko Widodo kembali terpilih sebagai Presiden Republik Indonesia untuk masa jabatannya yang kedua. Kali ini, Joko Widodo didampingi oleh Wakil Presiden K.H. Ma’ruf Amin dan dilantik pada 20 Oktober 2019 untuk masa jabatan 2019 hingga 2024 mendatang. Pembangunan infrastruktur menjadi program prioritas di masa kepemimpinannya yang pertama. Pembangunan yang dilakukan secara merata hingga ke daerah terluar Indonesia ini dilakukan untuk mengejar ketertinggalan Indonesia dalam sektor ini dibandingkan negara-negara lain. Program prioritas tersebut dibarengi dengan program berupa bantuan sosial seperti Kartu Indonesia Pintar (KIP), Kartu Indonesia Sehat (KIS), hingga Program Keluarga Harapan (PKH). Selain itu, sejak awal masa jabatannya, Joko Widodo juga mengupayakan reforma agraria dengan salah satunya melakukan percepatan penerbitan sertifikat hak atas tanah untuk mengurangi terjadinya sengketa lahan oleh karena ketiadaan sertifikat. Di masa jabatannya yang kedua, Joko Widodo mengalihkan fokus pemerintahan pada pembangunan dan peningkatan kapasitas sumber daya manusia Indonesia untuk dapat bersaing dengan negara-negara lainnya. Adapun program pembangunan infrastruktur masih terus dilanjutkan bersamaan dengan itu.",
          twitter: "@jokowidodo",
          fb: "Joko Widodo",
          ig: "joko_widodo",
        },
        {
          src: require("../assets/irmawan.jpg"),
          title: "H. Irmawan, S.Sos., M.M.",
          panggilan: "irmawan",
          rating: "131.231 kunjungan",
          ttl: "Aceh Tenggara / 21 Desember 1967",
          daerah: "-",
          mejabat: "-",
          mencalonkan: "-",
          fraksi: "-",
          agama: "-",
          pendidikan: [],
          pengalaman: [],
          prestasi: [],
          biografi: "-",
          twitter: "-",
          fb: "-",
          ig: "-",
        },
        {
          src: require("../assets/kadafi.jpg"),
          title: "Dr. H. Muhammad Kadafi, S.H., M.H.",
          panggilan: "muhammad kadafi",
          rating: "100.231 kunjungan",
          ttl: "Banda Aceh, 08 Oktober 1983",
          daerah: "-",
          mejabat: "-",
          mencalonkan: "-",
          fraksi: "-",
          agama: "-",
          pendidikan: [],
          pengalaman: [],
          prestasi: [],
          biografi: "-",
          twitter: "-",
          fb: "-",
          ig: "-",
        },
        {
          src: require("../assets/sofyan.jpg"),
          title: "Sofyan Ali, S.Ag., S.H., M.Pd.",
          panggilan: "sofyan ali",
          rating: "80.231 kunjungan",
          ttl: "Kota Jambi, 20 Oktober 1973",
          daerah: "-",
          mejabat: "-",
          mencalonkan: "-",
          fraksi: "-",
          agama: "-",
          pendidikan: [],
          pengalaman: [],
          prestasi: [],
          biografi: "-",
          twitter: "-",
          fb: "-",
          ig: "-",
        },
        {
          src: require("../assets/eem.jpg"),
          title: "Neng Eem Marhamah Zulfa Hiz., M.M.",
          panggilan: "neng eem",
          rating: "13.231 kunjungan",
          ttl: "Cianjur, 08 Mei 1979",
          daerah: "-",
          mejabat: "-",
          mencalonkan: "-",
          fraksi: "-",
          agama: "-",
          pendidikan: [],
          pengalaman: [],
          prestasi: [],
          biografi: "-",
          twitter: "-",
          fb: "-",
          ig: "-",
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
    redirectDetailBerita(item){
      this.$session.start()
      this.$session.set('newsDa', item)
      this.$router.push('/detailBeritaHomePage')
    },
    redirectProfilPejabat(item){
      this.$session.start()
      this.$session.set('dataPejabat', item)
      this.$router.push('/profilPejabat')
    },
    async getnews() {
      const data = await APIServices.newsAntara()
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