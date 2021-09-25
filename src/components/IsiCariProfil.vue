<template>
    <div>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-card
        class="banner_cari"
        >
            <v-row class="d-flex align-center justify-center pa-16 mx-auto white--text">
                <h1> Cari profil politikus di database terlengkap se-Indonesia!</h1></v-row>
                <v-row>
                    <v-col></v-col>
                    <v-col cols="8">
                        <v-text-field
                        v-model="search"
                        clearable
                        flat
                        solo
                        hide-details
                        append-icon="mdi-magnify"
                        label="Tulis sesuatu.."
                        class="white"
                        color="red"
                        >
                        </v-text-field>
                    </v-col>
                    <v-col></v-col>
                </v-row>
        </v-card>

        <v-row
        class="pa-12"
        no-gutters
        >
            <v-col md="3">
                <v-card flat>
                    <v-card-text>
                        <v-row>
                            <v-col
                            cols="12"
                            >
                                <b><h3 class="red--text">Urutkan</h3></b>
                                
                                <v-checkbox
                                v-model="ex4"
                                label="Paling sesuai"
                                color="red"
                                value="sesuai"
                                hide-details
                                ></v-checkbox>
            
                                <v-checkbox
                                v-model="ex4"
                                label="Paling populer"
                                color="red"
                                value="populer"
                                hide-details
                                ></v-checkbox>

                                <v-checkbox
                                v-model="ex4"
                                label="Pengalaman terbanyak"
                                color="red"
                                value="terbanyak"
                                hide-details
                                ></v-checkbox>

                                <br /><br />

                                <b><h3 class="red--text">Kategori</h3></b>
            
                                <v-checkbox
                                v-model="ex4"
                                label="Presiden"
                                color="red"
                                value="presiden"
                                hide-details
                                ></v-checkbox>

                                <v-checkbox
                                v-model="ex4"
                                label="DPR"
                                color="red"
                                value="dpr"
                                hide-details
                                ></v-checkbox>

                                <v-checkbox
                                v-model="ex4"
                                label="DPD"
                                color="red"
                                value="dpd"
                                hide-details
                                ></v-checkbox>

                                <v-checkbox
                                v-model="ex4"
                                label="Gubernur"
                                color="red"
                                value="gubernur"
                                hide-details
                                ></v-checkbox>
            
                                <v-checkbox
                                v-model="ex4"
                                label="Walikota / Bupati"
                                color="red"
                                value="walikota-bupati"
                                hide-details
                                ></v-checkbox>

                                <v-checkbox
                                v-model="ex4"
                                label="DPRD"
                                color="red"
                                value="dprd"
                                hide-details
                                ></v-checkbox>

                                <br /><br />

                                <b><h3 class="red--text">Daerah Pilihan</h3></b><br />
            
                                <v-select
                                :items="dapil"
                                label="Semua daerah"
                                outlined
                                rounded
                                ></v-select>

                                <br />

                                <b><h3 class="red--text">Fraksi</h3></b><br />
                                
                                <v-select
                                :items="fraksi"
                                label="Semua fraksi"
                                outlined
                                rounded
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col class="ml-12">
                <v-card
                class="rounded-lg mt-5"
                max-width="900"
                max-height="260"
                to="/profilPejabat"
                >
                    <v-card-text>
                        <v-row>
                            <v-col>
                                <v-col>
                                    <v-img
                                    :src="require('../assets/logo.svg')"
                                    height="200"
                                    width="150"
                                    class="ml-4"
                                    />
                                </v-col>
                            </v-col>
                    
                            <v-col>
                                <v-col><h2 class="red--text">Nama lengkap</h2></v-col>
                                <v-col>Daerah Pilihan</v-col>
                                <v-col>Jabatan terakhir</v-col>
                                <v-col>Mencalonkan sebagai</v-col>
                                <v-col>Fraksi</v-col>
                            </v-col>
                            
                            <v-col class="mt-5">
                                <b>
                                <v-col></v-col>
                                <v-col>Daerah Pilihan</v-col>
                                <v-col>Jabatan terakhir</v-col>
                                <v-col>Mencalonkan sebagai</v-col>
                                <v-col>Fraksi</v-col>
                                </b>
                            </v-col>
                    
                            <v-col>
                                <v-col></v-col>
                                <v-col></v-col>
                                <v-col>
                                    <v-img
                                    :src="require('../assets/logo.svg')"
                                    height="100"
                                    width="100"
                                    class="ml-16"
                                    />
                                </v-col>
                            
                                <v-col></v-col>
                            </v-col>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.banner_cari {
  background: url('../assets/banner_cari.jpg');
  background-size: cover;
  height: 400px;
}
</style>

<script>
export default {
    name: "IsiCariProfil",
    data: () => ({
      dapil: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      fraksi: ['A', 'B', 'C', 'D'],
    })
}
</script>