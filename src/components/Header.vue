<template>
    <v-app-bar app color="white" flat>
        <!-- <v-toolbar flat class="mainHeader"> -->
            <v-toolbar-title>
                <div class="header">
                    <v-img
                        :src="require('../assets/logoWakilmu.png')"
                        class="logo"
                        height="45"
                        width="200"
                        contain
                        v-on:click="redirect"
                    />
                </div>
            </v-toolbar-title>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn text color="red" to="/berita">Berita</v-btn>
                <v-btn text color="red" to="/cariProfil">Cari Profil</v-btn>
                <v-btn text color="red" to="/tentangKami">Tentang Kami</v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <!-- <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn> -->

                    <v-btn
                        class="hidden-xs-only white--text"
                        color="red"
                        rounded
                        v-if="this.$session.has('loginStat') == false"
                        to="/login"
                    >Masuk</v-btn>

                    <v-menu
                        top
                        :close-on-click="closeOnClick"
                        v-if="this.$session.get('loginStat') == true"
                    >
                        <template v-slot:activator="{on, attrs}">
                            <!-- <v-btn
                                class="hidden-xs-only"
                                color="red"
                                outlined
                                rounded
                                v-bind="attrs"
                                v-on="on"
                            ><span v-text="this.$session.get('namaUser')"></span></v-btn> -->
                            <v-avatar
                                color="red"
                                size="45"
                                v-bind="attrs"
                                v-on="on"
                            ><v-icon dark>
                                mdi-account-circle
                            </v-icon></v-avatar>
                        </template>

                        <v-list>
                            <v-row align="center" justify="center" class="pt-5 pb-1">
                                <v-avatar
                                color="red"
                                size="30"
                                v-bind="attrs"
                                v-on="on"
                                ><v-icon dark>
                                mdi-account-circle
                                </v-icon></v-avatar>
                            </v-row>
                            <v-row align="center" justify="center">
                                <router-link to="/profil" tag="btn"><a
                                    text
                                    v-text="item.name"
                                    class="hidden-xs-only red--text"
                                ></a></router-link>
                            </v-row>
                            <v-row align="center" justify="center">
                                <router-link to="profil" tag="btn"><a
                                    text
                                    v-text="item.username"
                                    class="hidden-xs-only black--text"
                                ></a></router-link>
                            </v-row>
                            <br />
                            <v-divider></v-divider>
                            <v-list-item>
                                <v-btn
                                    text
                                    class="hidden-xs-only"
                                    to="/gantiEmail"
                                >Ganti Email</v-btn>
                            </v-list-item>
                            <v-list-item>
                                <v-btn
                                    text
                                    class="hidden-xs-only"
                                    to="/gantiPassword"
                                >Ganti Password</v-btn>
                            </v-list-item>
                                <v-divider></v-divider>
                            <v-list-item>
                                <v-btn
                                    text
                                    class="hidden-xs-only"
                                    @click="logout()"
                                >Logout</v-btn>
                            </v-list-item>
                        </v-list>
                    </v-menu>

                <p>&emsp;</p>

                    <v-btn
                        class="hidden-xs-only"
                        color="red"
                        outlined
                        rounded
                        v-if="this.$session.has('loginStat') == false"
                        to="/register"
                    >Daftar</v-btn>
                    
            <!-- </v-toolbar-items> -->

            <div class="hidden-sm-and-up">
                <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
                </template>
                <v-list class="responsiveMenu">
                    <v-list-item>
                        <v-btn><router-link tag=btn to="/">Berita</router-link></v-btn>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title><router-link tag=btn to="/">Cari Profil</router-link></v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title><router-link tag=btn to="/">Tentang Kami</router-link></v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title><router-link tag=btn to="/">Masuk</router-link></v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title><router-link tag=btn to="/">Daftar</router-link></v-list-item-title>
                    </v-list-item>
                </v-list>
                </v-menu>
            </div>
        <!-- </v-toolbar> -->
    </v-app-bar>
</template>

<script>
// import {Services} from '../services/Services'
// const APIServices = new Services()

export default {
    name: "Header",
    data (){
        return {
            item: [],
        }
    },
    async mounted() {
        this.item = this.$session.get('dataUser')
        // console.log(this.item)
        window.scrollTo(0,0)
    },
    methods : {
        logout(){
            this.$session.destroy()
            if (this.$route.name !== 'HomePage') {
                this.$router.push('/')
            } else {
                window.location.reload()
            }
        },
        redirect(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
</style>