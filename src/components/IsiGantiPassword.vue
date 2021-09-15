<template>
    <div>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
            <v-col>
                <h2 class="red--text">Ganti Password</h2>
                <p>&emsp;</p>
                <v-form 
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                <h3>Password Lama</h3>
                <v-text-field
                    label=""
                    clearable
                    required
                    color="red"
                ></v-text-field>

                <h3>Password Baru</h3>
                <v-text-field
                    label=""
                    clearable
                    required
                    color="red"
                ></v-text-field>

                <p>&emsp;</p>
                <v-row align="end" justify="end">
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
    name: "IsiGantiPassword"
}
</script>