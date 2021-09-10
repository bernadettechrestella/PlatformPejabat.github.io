<template>
    <v-app-bar app color="white" flat>
        <!-- <v-toolbar flat class="mainHeader"> -->
            <v-toolbar-title>
                <div class="header">
                    <v-img
                    :src="require('../assets/logo.png')"
                    class="logo"
                    contain
                    height="50"
                />
                </div>
            </v-toolbar-title>

            <v-toolbar-items class="hidden-xs-only">
                <v-btn text color="red"><router-link tag=btn to="/">Berita</router-link></v-btn>
                <v-btn text color="red"><router-link tag=btn to="/">Cari Profil</router-link></v-btn>
                <v-btn text color="red"><router-link tag=btn to="/">Tentang Kami</router-link></v-btn>
            </v-toolbar-items>

            <v-spacer></v-spacer>

            <!-- <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn> -->

            <!-- <v-toolbar-items class="hidden-xs-only"> -->
                <v-btn class="hidden-xs-only" color="red" outlined rounded><router-link tag=btn to="/login">Masuk</router-link></v-btn>
                <p>&emsp;</p>
                <v-btn class="hidden-xs-only" color="red" outlined rounded><router-link tag=btn to="/register">Daftar</router-link></v-btn>
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
export default {
    name: "Header"
}
</script>

<style>
</style>