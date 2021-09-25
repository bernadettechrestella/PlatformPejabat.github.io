<template>
    <div>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <br />
        <v-row class="pl-4 pr-4 ml-4 mr-4">
            <v-col cols="10">
                <v-row align="center">
                    <v-btn
                        color="#BDBDBD"
                        outlined
                        rounded
                        @click="filterNews('pemilu')"
                    >Pemilu</v-btn>
                    <p>&emsp;</p>
                    <v-btn
                        color="#BDBDBD"
                        outlined
                        rounded
                        @click="filterNews('presiden')"
                    >Presiden</v-btn>
                    <p>&emsp;</p>
                    <v-btn
                        color="#BDBDBD"
                        outlined
                        rounded
                        @click="filterNews('gubernur')"
                    >Gubernur</v-btn>
                    <p>&emsp;</p>
                    <v-btn
                        color="#BDBDBD"
                        outlined
                        rounded
                        @click="filterNews('DPR')"
                    >DPR</v-btn>
                    <p>&emsp;</p>
                    <v-btn
                        color="#BDBDBD"
                        outlined
                        rounded
                        @click="filterNews('korupsi')"
                    >Korupsi</v-btn>
                </v-row>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="2">
                <v-row>
                    <v-text-field
                        clearable
                        outlined
                        rounded
                        append-icon="mdi-magnify"
                        label="Cari berita.."
                        color="red"
                    >
                    </v-text-field>
                </v-row>
            </v-col>
        </v-row>
        <v-row class="ma-4">
        <v-col>
            <v-row class="pt-4 pl-4 pr-2 pb-2"
                v-for="(item,i) in items.slice(0,1)"
                :key="i">
                    <v-card
                        max-width="auto">
                        <v-img
                            class="white--text align-end"
                            height="315"
                            width="720"
                            :src="item.urlToImage"
                            @click="redirectDetailBerita(item)">
                        <v-card-title @click="redirectDetailBerita(item)" class="text-h4" v-text="item.title"></v-card-title>
                        <v-card-subtitle>{{ item.publishedAt | moment("DD MMMM YYYY, HH:mm") }}</v-card-subtitle>
                        <!-- <h5 class="font-weight-light">{{ item.isoDate | moment("DD MMMM YYYY, h:mm") }}</h5> -->
                        </v-img>
                    </v-card>
            </v-row>
            <v-row
                align="center"
                class="pt-3 pl-4 pb-1"
                v-for="(item,i) in items.slice(1,4)"
                :key="i">
                    <v-card
                        outlined
                        max-width="720">
                        <v-row>
                        <v-col cols="6">
                            <v-img
                                class="white--text align-end"
                                height="150"
                                width="auto"
                                :src="item.urlToImage"
                                @click="redirectDetailBerita(item)">
                            </v-img>
                        </v-col>
                        <v-col>
                            <a class="font-weight-bold black--text text-h6" @click="redirectDetailBerita(item)" v-text="item.title"></a>
                            <h5 class="font-weight-light">{{ item.publishedAt | moment("DD MMMM YYYY, HH:mm") }}</h5>
                        </v-col>
                        </v-row>
                    </v-card>
            </v-row>
            <v-row class="pt-3 pl-4 pr-2 pb-1"
                v-for="(item,i) in items.slice(4,5)"
                :key="i">
                    <v-card
                        max-width="auto">
                        <v-img
                            class="white--text align-end"
                            height="315"
                            width="720"
                            :src="item.urlToImage"
                            @click="redirectDetailBerita(item)">
                        <v-card-title @click="redirectDetailBerita(item)" class="text-h4" v-text="item.title"></v-card-title>
                        <v-card-subtitle>{{ item.publishedAt | moment("DD MMMM YYYY, HH:mm") }}</v-card-subtitle>
                        </v-img>
                    </v-card>
            </v-row>
            <v-row
                align="center"
                class="pt-3 pl-4 pb-1"
                v-for="(item,i) in items.slice(5,8)"
                :key="i">
                    <v-card
                        outlined
                        max-width="720">
                        <v-row>
                        <v-col cols="6">
                            <v-img
                                class="white--text align-end"
                                height="150"
                                width="auto"
                                :src="item.urlToImage"
                                @click="redirectDetailBerita(item)">
                            </v-img>
                        </v-col>
                        <v-col>
                            <a class="font-weight-bold black--text text-h6" @click="redirectDetailBerita(item)" v-text="item.title"></a>
                            <h5 class="font-weight-light">{{ item.publishedAt | moment("DD MMMM YYYY, HH:mm") }}</h5>
                        </v-col>
                        </v-row>
                    </v-card>
            </v-row>
        </v-col>
        <v-col>
            <v-row
                align="center"
                class="pt-4 pl-4"
                v-for="(item,i) in items.slice(8,18)"
                :key="i">
                    <v-card
                        outlined
                        max-width="720">
                        <v-row>
                        <v-col cols="6">
                            <v-img
                                class="white--text align-end"
                                height="150"
                                width="auto"
                                :src="item.urlToImage"
                                @click="redirectDetailBerita(item)">
                            </v-img>
                        </v-col>
                        <v-col>
                            <a class="font-weight-bold black--text text-h6" @click="redirectDetailBerita(item)" v-text="item.title"></a>
                            <h5 class="font-weight-light">{{ item.publishedAt | moment("DD MMMM YYYY, HH:mm") }}</h5>
                        </v-col>
                        </v-row>
                    </v-card>
            </v-row>
        </v-col>
        </v-row>
    </div>
</template>

<script>
import {Services} from '../services/Services'
const APIServices = new Services()
export default {
    name: "IsiBerita",
    data() {
        return {
            items: [],
        }
    },
    async mounted() {
        this.getnews().then((data) => {
            this.items = data
        })
        console.log(this.items)
    },
    methods: {
        async filterNews(item){
            const param = {
                filter: item,
                from: new Date(Date.now()-518400000).toJSON().slice(0,10),
                to: new Date().toJSON().slice(0,10)
            }
            console.log(param)
            const response = await APIServices.news(param)
            .then((succ) => succ)
            if (response.status === 'ok' && response.totalResults > 0) {
                this.items = response.articles
            } else {
                this.getnews().then((data) => {
                this.items = data.articles
            })
            }
        },
        redirectDetailBerita(item){
            this.$session.start()
            this.$session.set('newsDaUtama', item)
            this.$router.push('/DetailBeritaBeritaUtama')
        },
        async getnews() {
            const param = {
                filter: 'politik',
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
        }
    }
};
</script>