<template>
    <div>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
            <v-col cols="5">
                <h2 class="red--text">Ganti Email</h2>
                <p>&emsp;</p>
                <v-form 
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                <h3>Email Lama</h3>
                <v-text-field
                    label="Masukkan Email Lama Anda"
                    clearable
                    required
                    color="red"
                ></v-text-field>

                <h3>Email Baru</h3>
                <v-text-field
                    label="Masukkan Email Baru Anda"
                    clearable
                    required
                    color="red"
                ></v-text-field>

                <h3>Password</h3>
                <v-text-field
                    label="Masukkan Pasword Anda"
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
                        to="/verifikasiEmail"
                    >Kirim Kode Verifikasi</v-btn>
                </v-row>
                </v-form>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "IsiGantiEmail"
}
</script>