<template>
    <div>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
            <v-col cols="4">
                <v-row class="align-center justify-center">
                    <v-avatar
                        color="primary"
                        size="200"
                        class="d-flex spacing-around"
                    ></v-avatar>
                </v-row>
                <p>&emsp;</p>
                <v-row class="align-center justify-center">
                    <h1 class="red--text">Adji Bayu Nugroho</h1>
                </v-row>
            </v-col>
            <v-row>
                <v-col cols="6">
                    <v-row>
                        <h3>Username</h3>
                    </v-row>
                    <v-row>
                        <h3 class="font-weight-light">MasPejabat</h3>
                    </v-row>
                    <p>&emsp;</p>
                    <v-row>
                        <h3>Tanggal Lahir</h3>
                    </v-row>
                    <v-row>
                        <h3 class="font-weight-light">4 Juli 2005</h3>
                    </v-row>
                    <p>&emsp;</p>
                    <v-row>
                        <h3>Email</h3>
                    </v-row>
                    <v-row>
                        <h3 class="font-weight-light">adjinug@rajawali.id</h3>
                    </v-row>
                    <p>&emsp;</p>
                </v-col>
                <v-col cols="3">
                        <router-link to="/editProfil" tag="btn"><v-btn
                            color="green"
                            block
                            outlined
                            rounded
                        >Edit Profil</v-btn></router-link>
                    <p>&emsp;</p>
                        <router-link to="/gantiEmail" tag="btn"><v-btn
                            color="blue"
                            outlined
                            block
                            rounded
                        >Ganti Email</v-btn></router-link>
                    <p>&emsp;</p>
                        <router-link to="/gantiPassword" tag="btn"><v-btn
                            color="red"
                            outlined
                            block
                            rounded
                        >Ganti Password</v-btn></router-link>
                    
                </v-col>
            </v-row>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "IsiProfil"
}
</script>