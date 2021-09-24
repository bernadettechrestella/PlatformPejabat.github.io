<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="red lighten-4 black--text"
      width="100%"
    >
        <v-row class="mt-2">
            <v-col>
                <v-img
                    :src="require('../assets/logologin.png')"
                    max-width="300"
                    class="ma-15"
                    />
            </v-col>
            
            <v-col cols="2">
                <h3 class="red--text">Menu</h3>
                
                <p><a href="#" class="text-decoration-none black--text">
                    Home
                </a></p>
                <p><a href="#" class="text-decoration-none black--text">
                    Berita
                </a></p>
                <p><a href="#" class="text-decoration-none black--text">
                    Cari Profil
                </a></p>
                <p><a href="#" class="text-decoration-none black--text">
                    Tentang Kami
                </a></p>
            </v-col>

            <v-col cols="5">
                <h3 class="red--text">Office</h3>
                <p>Jl. Bahagia No.34, RT 20 RW 08, Kel. Cokrokusuman, Kec. Jetis</p> 
                <p>Yogyakarta, Daerah istimewa Yogyakarta</p><br>
                <h3 class="red--text">Contacts</h3>
                <p>+628xxxxxxxxxx</p>
                <p>business@wakilmu.id</p>
            </v-col>

            <v-col>
                <v-icon 
                dark
                fab
                large
                color="red">
                    mdi-twitter
                </v-icon>
                &emsp;
                <v-icon 
                dark
                fab
                large
                color="red">
                    mdi-facebook
                </v-icon>
                &emsp;
                <v-icon 
                dark
                fab
                large
                color="red">
                    mdi-instagram
                </v-icon>        
            </v-col>
        </v-row>
    
        <v-divider></v-divider>

        <v-card-text class="black--text text-center">
            <strong>Copyright © 2021 Rajawali Team YLabs</strong>
        </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    name: "Footer",
    data (){
        return {
            item: [],
        }
    },
}
</script>