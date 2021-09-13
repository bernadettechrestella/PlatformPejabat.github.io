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
            <v-col cols="6">
                <v-form 
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                <h3>Username</h3>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label=""
                    clearable
                    required
                    color="red"
                ></v-text-field>

                <h3>Tanggal Lahir</h3>
                <v-text-field
                    v-model="password"
                    :rules="password"
                    label=""
                    clearable
                    required
                    color="red"
                ></v-text-field>

                <h3>Email</h3>
                <v-text-field
                    v-model="password"
                    :rules="password"
                    label=""
                    clearable
                    required
                    color="red"
                ></v-text-field>

                <h3>No. Telepon</h3>
                <v-text-field
                    v-model="password"
                    :rules="password"
                    label=""
                    clearable
                    required
                    color="red"
                ></v-text-field>
                <p>&emsp;</p>
                <v-row>
                <v-btn
                    color="red"
                    outlined
                    rounded
                >Batal</v-btn>
                <p>&emsp;</p>
                <v-btn
                    color="red"
                    outlined
                    rounded
                >Simpan</v-btn>
                </v-row>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "IsiEditProfil"
}
</script>