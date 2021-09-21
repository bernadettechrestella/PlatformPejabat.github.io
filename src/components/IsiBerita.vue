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
                        v-on:click="viewMore"
                    >Pemilu</v-btn>
                    <p>&emsp;</p>
                    <v-btn
                        color="#BDBDBD"
                        outlined
                        rounded
                        v-on:click="viewMore"
                    >Presiden</v-btn>
                    <p>&emsp;</p>
                    <v-btn
                        color="#BDBDBD"
                        outlined
                        rounded
                        v-on:click="viewMore"
                    >Gubernur</v-btn>
                    <p>&emsp;</p>
                    <v-btn
                        color="#BDBDBD"
                        outlined
                        rounded
                        v-on:click="viewMore"
                    >DPR</v-btn>
                    <p>&emsp;</p>
                    <v-btn
                        color="#BDBDBD"
                        outlined
                        rounded
                        v-on:click="viewMore"
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
                            :src="item.image.small"
                            @click="redirectDetailBerita(item)">
                        <v-card-title @click="redirectDetailBerita(item)" class="text-h4" v-text="item.title"></v-card-title>
                        <v-card-subtitle v-text="item.isoDate"></v-card-subtitle>
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
                                :src="item.image.small"
                                @click="redirectDetailBerita(item)">
                            </v-img>
                        </v-col>
                        <v-col>
                            <a class="font-weight-bold black--text text-h6" @click="redirectDetailBerita(item)" v-text="item.title"></a>
                            <h5 class="font-weight-light" v-text="item.isoDate"></h5>
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
                            :src="item.image.small"
                            @click="redirectDetailBerita(item)">
                        <v-card-title @click="redirectDetailBerita(item)" class="text-h4" v-text="item.title"></v-card-title>
                        <v-card-subtitle v-text="item.isoDate"></v-card-subtitle>
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
                                :src="item.image.small"
                                @click="redirectDetailBerita(item)">
                            </v-img>
                        </v-col>
                        <v-col>
                            <a class="font-weight-bold black--text text-h6" @click="redirectDetailBerita(item)" v-text="item.title"></a>
                            <h5 class="font-weight-light" v-text="item.isoDate"></h5>
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
                                :src="item.image.small"
                                @click="redirectDetailBerita(item)">
                            </v-img>
                        </v-col>
                        <v-col>
                            <a class="font-weight-bold black--text text-h6" @click="redirectDetailBerita(item)" v-text="item.title"></a>
                            <h5 class="font-weight-light" v-text="item.isoDate"></h5>
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
            this.items = data.data
        })
        console.log(this.items)
    },
    methods: {
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