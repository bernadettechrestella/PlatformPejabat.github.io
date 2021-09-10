<template>
    <div>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pl-10 pr-10 pt-5">
            <v-col cols="12" sm="6" md="8"> <!-- kolom kiri -->
                <h1 class="font-weight-bold">Haji Lulung Keluar PAN Balik ke PPP: Desakan para Ulama</h1>
                <h5 class="font-weight-light">Selasa, 7 September 2021 15:16 WIB</h5>
            </v-col>
            <v-col cols="6" md="4"> <!-- kolom kanan -->
            </v-col>
        </v-row>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pl-10 pr-10">
            <v-col cols="12" sm="6" md="8"> <!-- kolom kiri -->
                <!-- gambar berita -->
                <v-img
                    :src="require('../assets/background.jpeg')"
                    height="400"/>
                <br />
                <!-- isi berita -->
                <p>Jakarta, CNN Indonesia -- Abraham Lunggana atau yang akrab disapa Haji Lulung resmi menyatakan berhenti dari keanggotaan Partai Amanat Nasional (PAN) untuk kembali ke partai lamanya, PPP.
                    Lulung mengaku sudah membuat surat menyatakan berhenti dari PAN pada 1 September 2021 yang diserahkan kepada Ketum PAN Zulkifli Hasan (Zulhas).
                    "Bukan pindah, tapi balik ke PPP. Kalau pindah kesannya saya loncat-loncat. Mulai tanggal 1 September saya sudah buat surat ke Pak Zulhas. Surat itu menyatakan berhenti, bukan pengunduran diri ya," kata Lulung kepada CNNIndonesia.com, Selasa (7/9).
                    Diketahui, Lulung sempat pindah dari PPP ke PAN pada medio 2018. Lulung menyebut kalau itu dipecat PPP lantaran enggan mendukung Basuki Tjahaja Purnama atau Ahok pada Pilkada DKI 2017.
                    Lulung mengklaim alasan utama kembali ke PPP semata-mata karena desakan dari para ulama. Ulama-ulama itu, kata dia, meminta agar dirinya membesarkan kembali PPP. Lulung mengklaim tak memiliki masalah dengan jajaran petinggi PAN selama ini. Ia mengatakan Zulhas sudah mengizinkan dirinya untuk kembali ke PPP.
                    "Saya permisi ke Pak Zul saya kembali ke PAN. Karena desakan ulama. Saya dikasih jempol ama Pak Zulhas," kata dia.
                    Terpisah, Sekretaris Jendral PAN Eddy Soeparno membenarkan bahwa Lulung sudah menyatakan pengunduran dirinya dari PAN. Surat pengunduran diri Lulung itu sudah ia terima pada Jumat (3/9).
                    "Benar pak Haji Lulung kembali ke PPP. Beliau mengirimkan surat pengunduran dirinya menyampaikan niatnya kembali ke PPP. Memimpin PPP Jakarta," kata Eddy kepada CNNIndonesia.com.
                    Eddy mengucapkan selamat kepada Lulung atas amanah barunya tersebut. Ia mengklaim merasa kehilangan Lulung karena sama-sama bersama di Komisi VII DPR sejak awal periode 2019.
                    Eddy pun memastikan PAN akan melakukan pergantian Antarwaktu (PAW) untuk menggantikan posisi Lulung di DPR RI usai kembali ke PPP. Diketahui, Lulung lolos menjadi anggota DPR RI dari PAN pada pemilu 2019.
                    "Meski saya merasa kehilangan karena Haji Lulung rekan saya di komisi 7. Saya hormati keputusan Haji Lulung. Sebagai saudara kita akan tetap silaturahmi," kata Eddy.</p>
                <!--komentar -->
                <h3 class="red--text">Komentar</h3>
                <v-divider style="background-color:red; height: 20px; width:17%;"></v-divider>
                <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>
                <br />
                <v-textarea
                    label="Tulis Komentar Publik.."
                    auto-grow
                    outlined
                    color="red"
                    rows="2"
                    row-height="30"
                    ></v-textarea>
                <v-spacer></v-spacer>
                <v-btn
                    width="100px"
                    color="red"
                    class="d-flex align-right justify-center pa-4 mx-auto white--text">
                    Kirim
                </v-btn>
                <br />
                <v-sheet rounded outlined color="red">
                <v-card
                    class="mx-auto"
                    elevation="3"
                    outlined>
                    <v-list-item>
                        <v-list-item-avatar
                            size="40"
                            color="grey">
                            <span class="white--text text-h5">B</span>
                        </v-list-item-avatar>
                        <v-list-item-title class="text-h7 mb-1">
                            Bambang Prakasa
                        </v-list-item-title>
                    </v-list-item>
                    <p class="pl-4">Desakan ulama? PPP aja yang emang dah ga kuat tanpa Haji Lulung</p>
                    <v-card-actions>
                        <v-btn plain color="red" class="text-h7 pl-1" @click="show2 = !show2">
                            Lihat 1 Balasan
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn plain color="black" class="text-h7 ma-1" @click="show = !show">
                            BALAS
                        </v-btn>
                        <v-btn
                            class="ma-1"
                            text
                            icon
                            color="red lighten-2"
                        >
                            <v-icon>mdi-thumb-up</v-icon>
                        </v-btn>
                        <div class="text-h7 ma-1">
                            21
                        </div>
                        <v-btn
                            class="ma-2"
                            text
                            icon
                            color="grey lighten-2"
                        >
                            <v-icon>mdi-thumb-down</v-icon>
                        </v-btn>
                        <div class="text-h7 ma-1">
                            3
                        </div>
                    </v-card-actions>
                    <v-expand-transition>
                        <div v-show="show">
                            <v-list-item align="center" justify="center">
                                <v-list-item-avatar
                                    size="30"
                                    color="grey">
                                    <span class="white--text text-h7">B</span>
                                </v-list-item-avatar>
                                <v-textarea
                                    label="Tulis Balasan Publik.."
                                    auto-grow
                                    outlined
                                    color="red"
                                    rows="1"
                                ></v-textarea>
                            </v-list-item>
                            <v-spacer></v-spacer>
                            <v-btn
                                width="100px"
                                color="red"
                                class="d-flex align-right justify-center pa-4 mx-auto white--text">
                                Balas
                            </v-btn>
                            <br />
                        </div>
                    </v-expand-transition>
                </v-card>
                </v-sheet>
                <div v-show="show2">
                    <br />
                    <v-sheet rounded outlined color="red">
                    <v-card
                    class="mx-auto"
                    elevation="3"
                    outlined>
                    <v-list-item>
                        <v-list-item-avatar
                            size="40"
                            color="grey">
                            <span class="white--text text-h5">B</span>
                        </v-list-item-avatar>
                        <v-list-item-title class="text-h7 mb-1">
                            Bambang Pamungkas
                        </v-list-item-title>
                    </v-list-item>
                    <p class="pl-4">Waduh...</p>
                    <v-list-item>    
                    <v-spacer></v-spacer>
                        <v-btn
                            class="ma-1"
                            text
                            icon
                            color="red lighten-2"
                        >
                            <v-icon>mdi-thumb-up</v-icon>
                        </v-btn>
                        <div class="text-h7 ma-1">
                            21
                        </div>
                        <v-btn
                            class="ma-2"
                            text
                            icon
                            color="grey lighten-2"
                        >
                            <v-icon>mdi-thumb-down</v-icon>
                        </v-btn>
                        <div class="text-h7 ma-1">
                            3
                        </div>
                    </v-list-item>
                    </v-card>
                    </v-sheet>
                </div>
            </v-col>
            <v-col cols="12" md="4"> <!-- kolom kanan -->
                <h3 class="red--text">Bagikan</h3>
                <v-divider style="background-color:red; height: 20px; width:17%;"></v-divider>
                <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>
                <br />
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red"
                >
                    <v-icon dark>
                        mdi-twitter
                    </v-icon>
                </v-btn>
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red"
                >
                    <v-icon dark>
                        mdi-facebook
                    </v-icon>
                </v-btn>
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red"
                >
                    <v-icon dark>
                        mdi-instagram
                    </v-icon>
                </v-btn>
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red"
                >
                    <v-icon dark>
                        mdi-whatsapp
                    </v-icon>
                </v-btn>
                <v-btn
                    class="mx-2"
                    fab
                    dark
                    small
                    color="red"
                >
                    <v-icon dark>
                        mdi-line
                    </v-icon>
                </v-btn>
                <br />
                <br />
                <h3 class="red--text">Tokoh Terkait</h3>
                <v-divider style="background-color:red; height: 20px; width:28%;"></v-divider>
                <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>
                <br />
                <v-sheet rounded outlined color="red">
                    <v-card
                    class="mx-auto"
                    outlined>
                    <v-row>
                    <v-col cols="3">
                        <v-img
                        :src="require('../assets/JokoWi.jpg')"
                        height="160"/>
                    </v-col>
                    <v-col cols="9">
                        <div class="text-h5 mb-1">
                            Abraham Lunggana
                        </div>
                        <v-row>
                        <v-col cols="6">
                        <div class="text-h7">
                            Jabatan Terakhir
                        </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="text-h7">
                            Anggota DPR RI
                        </div>
                        </v-col>
                        </v-row>
                        <v-row>
                        <v-col cols="6">
                        <div class="text-h7">
                            Mencalonkan Sebagai
                        </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="text-h7">
                            -
                        </div>
                        </v-col>
                        </v-row>
                        <v-row>
                        <v-col cols="6">
                        <div class="text-h7">
                            Fraksi
                        </div>
                        </v-col>
                        <v-col cols="6">
                            <div class="text-h7">
                            PPP
                        </div>
                        </v-col>
                        </v-row>
                    </v-col>
                    </v-row>
                    </v-card>
                </v-sheet>
                <br />
                <h3 class="red--text">Berita Terkait</h3>
                <v-divider style="background-color:red; height: 20px; width:28%;"></v-divider>
                <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>
                <v-col cols="12"> 
                    <v-row align="center"
                    v-for="(item,i) in items"
                    :key="i">
                    <v-col cols="5"><!-- col gambar -->
                        <v-img
                        :src="item.src"
                        height="100"/>
                    </v-col>
                    <v-col cols="7" class="pl-2"> <!-- col judul berita -->
                        <h3 class="font-weight-bold" v-text="item.title"></h3>
                        <h5 class="font-weight-light" v-text="item.time"></h5>
                    </v-col>
                    </v-row>
                    <br />
                </v-col>
                <br />
                <h3 class="red--text">Profil Teratas</h3>
                <v-divider style="background-color:red; height: 20px; width:28%;"></v-divider>
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
    name: "IsiDetailBerita",
    data: () => ({
        show: false,
        show2: false,
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
    })
}
</script>