<template>  
    <div>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
            <v-col>
                <v-col>
                    <v-row>
                        <v-col>
                            <h1 class="red--text ml-3">Joko Widodo</h1>
                        </v-col>
                    </v-row>

                    <v-row class="mt-0">
                        <v-col>
                            <v-col>
                                <v-img
                                :src="require('../assets/JokoWi.jpg')"
                                height="300"
                                width="210"
                                class="mt-1"
                                />
                            </v-col>
                        </v-col>
                        
                        <v-col>
                            <v-col>Nama lengkap</v-col>
                            <v-col>Tempat & Tanggal Lahir</v-col>
                            <v-col>Daerah Pilihan</v-col>
                            <v-col>Menjabat sebagai</v-col>
                            <v-col>Mencalonkan sebagai</v-col>
                            <v-col>Fraksi</v-col>
                            <v-col>Agama</v-col>
                        </v-col>
                    
                        <v-col>
                            <b>
                            <v-col>Nama lengkap</v-col>
                            <v-col>Tempat & Tanggal Lahir</v-col>
                            <v-col>Daerah Pilihan</v-col>
                            <v-col>Menjabat sebagai</v-col>
                            <v-col>Mencalonkan sebagai</v-col>
                            <v-col>Fraksi</v-col>
                            <v-col>Agama</v-col>
                            </b>
                        </v-col>
                    
                        <v-col class="ml-16">
                            <v-col>
                                <v-icon 
                                dark
                                fab
                                large
                                color="red">
                                    mdi-twitter
                                </v-icon>
                                &ensp;@jokowidodo
                            </v-col>
                            <v-col>
                                <v-icon 
                                dark
                                fab
                                large
                                color="red">
                                    mdi-facebook
                                </v-icon>
                                &ensp;Joko Widodo
                            </v-col>
                            <v-col>
                                <v-icon 
                                dark
                                fab
                                large
                                color="red">
                                    mdi-instagram
                                </v-icon>
                                &ensp;joko_widodo
                            </v-col>
                        </v-col>
                    </v-row>
                    
                    <v-row class="mt-10">
                        <v-col>
                            <v-card
                            max-width="420"
                            min-height="200"
                            outlined>
                                <v-col class="d-flex red white--text align-center justify-center">Pendidikan</v-col>
                                <v-col>
                                    <h4 class="red--text">Universitas Indonesia</h4>
                                    <h5 class="text--primary">Magister Ilmu Politik</h5>
                                    <h6 class="text--secondary">2013</h6>
                                    
                                    <v-divider class="mt-3"></v-divider>

                                    <h4 class="red--text mt-3">Universitas Indonesia</h4>
                                    <h5 class="text--primary">Magister Ilmu Politik</h5>
                                    <h6 class="text--secondary">2013</h6>
                                    
                                    <v-divider class="mt-3"></v-divider>

                                    <h4 class="red--text mt-3">Universitas Indonesia</h4>
                                    <h5 class="text--primary">Magister Ilmu Politik</h5>
                                    <h6 class="text--secondary">2013</h6>
                                </v-col>
                            </v-card>
                        </v-col>
                        
                        <v-col>
                            <v-card
                            max-width="420"
                            min-height="200"
                            outlined>
                                <v-col class="d-flex red white--text align-center justify-center">Pengalaman</v-col>
                                <v-col>
                                    <h4 class="red--text">Gubernur</h4>
                                    <h6 class="text--secondary">2013-sekarang</h6>
                                    
                                    <v-divider class="mt-3"></v-divider>

                                    <h4 class="red--text mt-3">Anggota DPR</h4>
                                    <h6 class="text--secondary">2007</h6>
                                    
                                    <v-divider class="mt-3"></v-divider>

                                    <h4 class="red--text mt-3">Konsultan</h4>
                                    <h6 class="text--secondary">2001</h6>
                                </v-col>
                            </v-card>
                        </v-col>

                        <v-col>
                            <v-card
                            max-width="420"
                            min-height="200"
                            outlined>
                                <v-col class="d-flex red white--text align-center justify-center">Prestasi</v-col>
                                <v-col>
                                    <h4 class="red--text">Tokoh Penggerak Program Inklusi</h4>
                                    <h5 class="text--primary">Otoritas Jasa Keuangan</h5>
                                    <h6 class="text--secondary">2021</h6>
                                    
                                    <v-divider class="mt-3"></v-divider>

                                    <h4 class="red--text mt-3">Tokoh Penggerak Program Inklusi</h4>
                                    <h5 class="text--primary">Otoritas Jasa Keuangan</h5>
                                    <h6 class="text--secondary">2021</h6>
                                    
                                    <v-divider class="mt-3"></v-divider>

                                    <h4 class="red--text mt-3">Tokoh Penggerak Program Inklusi</h4>
                                    <h5 class="text--primary">Otoritas Jasa Keuangan</h5>
                                    <h6 class="text--secondary">2021</h6>
                                </v-col>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row class="mt-10">
                        <v-col>
                            <h3 class="red--text">Biografi</h3>
                            <v-divider style="background-color:red; height: 20px; width:5%;"></v-divider>
                            <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>

                            <v-col>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                                est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                                est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                                est laborum.
                            </v-col>
                        </v-col>
                        
                        
                    </v-row>

                    <v-row class="mt-10">
                        <v-col>
                            <h3 class="red--text">Berita Terkait</h3>
                            <v-divider style="background-color:red; height: 20px; width:8%;"></v-divider>
                            <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>

                            <v-col>
                                <v-sheet
                                class="mx-auto"
                                max-width="1275"
                                >
                                    <v-slide-group
                                    v-model="model"
                                    class="pa-4"
                                    active-class="success"
                                    show-arrows
                                    >
                                        <v-slide-item
                                        v-for="n in 15"
                                        :key="n"
                                        v-slot="{ active, toggle }"
                                        >
                                            <v-card
                                            :color="active ? undefined : 'grey lighten-1'"
                                            class="ma-4"
                                            height="300"
                                            width="250"
                                            @click="toggle"
                                            >
                                                <v-row
                                                align="center"
                                                justify="center"
                                                >
                                                    <v-scale-transition>
                                                        <v-icon
                                                        v-if="active"
                                                        color="white"
                                                        size="48"
                                                        v-text="'mdi-close-circle-outline'"
                                                        ></v-icon>
                                                    </v-scale-transition>
                                                </v-row>
                                            </v-card>
                                        </v-slide-item>
                                    </v-slide-group>
                                </v-sheet>
                            </v-col>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col>
                            <h3 class="red--text">Komentar</h3>
                            <v-divider style="background-color:red; height: 20px; width:6%;"></v-divider>
                            <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>

                            <v-col>
                                <br />
                                <v-row>
                                <v-textarea
                                label="Tulis Komentar Anda.."
                                auto-grow
                                outlined
                                color="red"
                                rows="1"
                                row-height="20"
                                ></v-textarea>

                                <p>&emsp;</p>

                                <v-btn
                                width="100px"
                                color="red"
                                class="d-flex align-right pa-4 mx-auto white--text">
                                Kirim
                                </v-btn>
                                </v-row>
                                
                                <br />
                
                                <v-row>
                                    <v-col>
                                        <v-sheet rounded outlined color="red">
                                            <v-card
                                            class="mx-auto"
                                            elevation="3"
                                            outlined>   
                                                <p class="pl-4 mt-2">Calon presiden 2024</p>
                                                <v-list-item>
                                                <v-list-item-avatar
                                                size="40"
                                                color="grey">
                                                    <!-- <span class="white--text text-h5">B</span> -->
                                                </v-list-item-avatar>
                                        
                                                <v-list-item-title class="text-h7 mb-1">
                                                    Bambang Prakasa
                                                </v-list-item-title>

                                                <v-card-actions>
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
                                                </v-list-item>
                                            </v-card>
                                        </v-sheet>
                                    </v-col>

                                    <v-col>
                                        <v-sheet rounded outlined color="red">
                                            <v-card
                                            class="mx-auto"
                                            elevation="3"
                                            outlined>   
                                                <p class="pl-4 mt-2">Calon presiden 2024</p>
                                                <v-list-item>
                                                <v-list-item-avatar
                                                size="40"
                                                color="grey">
                                                    <!-- <span class="white--text text-h5">B</span> -->
                                                </v-list-item-avatar>
                                        
                                                <v-list-item-title class="text-h7 mb-1">
                                                    Bambang Prakasa
                                                </v-list-item-title>

                                                <v-card-actions>
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
                                                </v-list-item>
                                            </v-card>
                                        </v-sheet>
                                    </v-col>

                                    <v-col>
                                        <v-sheet rounded outlined color="red">
                                            <v-card
                                            class="mx-auto"
                                            elevation="3"
                                            outlined>   
                                                <p class="pl-4 mt-2">Calon presiden 2024</p>
                                                <v-list-item>
                                                <v-list-item-avatar
                                                size="40"
                                                color="grey">
                                                    <!-- <span class="white--text text-h5">B</span> -->
                                                </v-list-item-avatar>
                                        
                                                <v-list-item-title class="text-h7 mb-1">
                                                    Bambang Prakasa
                                                </v-list-item-title>

                                                <v-card-actions>
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
                                                </v-list-item>
                                            </v-card>
                                        </v-sheet>
                                    </v-col>
                                </v-row>
                        
                                <br />
                        
                                <v-btn
                                color="red"
                                block
                                outlined
                                rounded
                                v-on:click="viewMore"
                                >
                                Lihat lebih banyak
                                </v-btn>
                            </v-col>
                        </v-col>
                    </v-row>
                </v-col>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "IsiProfilPejabat"
}
</script>