<template>
    <div>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
            <v-col cols="4">
                <v-row>
                    <v-avatar
                        color="primary"
                        size="200"
                        class="d-flex spacing-around"
                    ></v-avatar>
                </v-row>
                <p>&emsp;</p>
                <v-row>
                    <h1 class="red--text">Adji Bayu Nugroho</h1>
                </v-row>
            </v-col>
            <v-row>
                <v-col>
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
                        <router-link to="/editProfil" tag="btn"><v-btn
                            color="red"
                            outlined
                            rounded
                        >Edit Profil</v-btn></router-link>
                    </v-row>
                </v-col>
                <v-col>
                    <v-row>
                        <h3>Email</h3>
                    </v-row>
                    <v-row>
                        <h3 class="font-weight-light">adjinug@rajawali.id</h3>
                    </v-row>
                    <p>&emsp;</p>
                    <v-row>
                        <h3>No. Telepon</h3>
                    </v-row>
                    <v-row>
                        <h3 class="font-weight-light">14045</h3>
                    </v-row>
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