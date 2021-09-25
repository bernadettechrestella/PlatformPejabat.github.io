<template>  
    <div>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
            <v-col>
                <v-col>
                    <v-row>
                        <v-col>
                            <h1 class="red--text ml-3" v-text="item.title"></h1>
                        </v-col>
                    </v-row>

                    <v-row class="mt-0">
                        <v-col>
                            <v-col>
                                <v-img
                                :src="item.src"
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
                            <v-col v-text="item.title"></v-col>
                            <v-col v-text="item.ttl"></v-col>
                            <v-col v-text="item.daerah"></v-col>
                            <v-col v-text="item.mejabat"></v-col>
                            <v-col v-text="item.mencalonkan"></v-col>
                            <v-col v-text="item.fraksi"></v-col>
                            <v-col v-text="item.agama"></v-col>
                            </b>
                        </v-col>
                    
                        <v-col class="ml-16">
                            <v-col>
                                <v-row align="center">
                                <v-icon 
                                dark
                                fab
                                large
                                color="red">
                                    mdi-twitter
                                </v-icon>
                                <p>&emsp;</p>
                                <h4 v-text="item.twitter"></h4>
                                </v-row>
                            </v-col>
                            <v-col>
                                <v-row align="center">
                                <v-icon 
                                dark
                                fab
                                large
                                color="red">
                                    mdi-facebook
                                </v-icon>
                                <p>&emsp;</p>
                                <h4 v-text="item.fb"></h4>
                                </v-row>
                            </v-col>
                            <v-col>
                                <v-row align="center">
                                <v-icon 
                                dark
                                fab
                                large
                                color="red">
                                    mdi-instagram
                                </v-icon>
                                <p>&emsp;</p>
                                <h4 v-text="item.ig"></h4>
                                </v-row>
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
                                    <v-row
                                        v-for="(data,i) in item.pendidikan"
                                        :key="i">
                                        <v-col>
                                            <h4 class="red--text" v-text="data.data"></h4>
                                            <h5 class="text--secondary" v-text="data.periode"></h5>
                                            <v-divider class="mt-3"></v-divider>
                                        </v-col>
                                    </v-row>
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
                                    <v-row
                                        v-for="(data,i) in item.pengalaman"
                                        :key="i">
                                        <v-col>
                                            <h4 class="red--text" v-text="data.data"></h4>
                                            <h5 class="text--secondary" v-text="data.periode"></h5>
                                            <v-divider class="mt-3"></v-divider>
                                        </v-col>
                                    </v-row>
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
                                    <v-row
                                        v-for="(data,i) in item.prestasi"
                                        :key="i">
                                        <v-col>
                                            <h4 class="red--text" v-text="data.data"></h4>
                                            <h5 class="text--secondary" v-text="data.periode"></h5>
                                            <v-divider class="mt-3"></v-divider>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-card>
                        </v-col>
                    </v-row>

                    <v-row class="mt-10">
                        <v-col>
                            <h3 class="red--text">Biografi</h3>
                            <v-divider style="background-color:red; height: 20px; width:5%;"></v-divider>
                            <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>

                            <v-col v-text="item.biografi">
                            </v-col>
                        </v-col>
                        
                        
                    </v-row>

                    <v-row class="mt-10">
                        <v-col>
                            <h3 class="red--text">Berita Terkait</h3>
                            <v-divider style="background-color:red; height: 20px; width:8%;"></v-divider>
                            <v-divider style="background-color:red; height: 5px; width:100%;"></v-divider>

                            <v-col> <!-- ini kolom slidernya -->
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
                                        v-for="(berita, i) in items"
                                        :key="i"
                                        v-slot="{ active}"
                                        >

                                        <v-card
                                            class="ma-4"
                                            height="300"
                                            width="250"
                                            
                                            :color="active ? undefined : 'white'"
                                            >
                                                <v-row>
                                                    <v-img
                                                        :src="berita.urlToImage"
                                                        max-width="250"
                                                        class="ml-3"
                                                        @click="redirectDetailBerita(berita)"></v-img>
                                                </v-row>
                                                <v-row>
                                                    <a class="font-weight-bold black--text text-h6 pl-4 pr-4" v-text="berita.title" @click="redirectDetailBerita(berita)"></a>
                                                </v-row>
                                                <v-row>    
                                                    <v-card-subtitle>{{ berita.publishedAt | moment("DD MMMM YYYY, HH:mm") }}</v-card-subtitle>
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
import {Services} from '../services/Services'
const APIServices = new Services()

export default {
    name: "IsiProfilPejabat",
    data() {
        return {
            item: [],
            items: [],
        }
    },
    async mounted() {
        this.item = this.$session.get('dataPejabat')
        console.log(this.item)
        this.getnews().then((data) => {
            this.items = data
        })
        window.scrollTo(0,0)
    },
    methods: {
        redirectDetailBerita(item){
                this.$session.start()
                this.$session.set('newsDaUtama', item)
                this.$router.push('/DetailBeritaBeritaUtama')
        },
        async getnews() {
            const param = {
                filter: this.item.panggilan,
                from: new Date(Date.now()-518400000).toJSON().slice(0,10),
                to: new Date().toJSON().slice(0,10)
            }
            console.log(param)
            const data = await APIServices.news(param)
            .then((succ) => succ)
            .catch((error) => error)
            console.log(data)
            if (data.status === "ok") {
                console.log(data.articles)
                return data.articles
            } else {
                return data.articles
            }
        },
    }
}
</script>