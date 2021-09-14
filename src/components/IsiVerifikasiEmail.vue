<template>
    <div>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
            <v-col cols="5">
                <h2 class="red--text">Ganti Email</h2>
                <p>&emsp;</p>
                <v-form 
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                <h3>Masukkan Kode Verifikasi yang Dikirimkan ke Email Anda</h3>
                <v-text-field
                    label="Masukkan Kode Verifikasi"
                    clearable
                    required
                    color="red"
                ></v-text-field>

                <p>&emsp;</p>
                <v-row align="end" justify="end">
                    <v-btn
                        color="red"
                        rounded
                        class="white--text"
                    >Konfirmasi</v-btn>
                </v-row>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "IsiVerifikasiEmail"
}
</script>