<template>

  <div class="reg_log">
    <router-link tag=btn to="/login">
        <v-btn class="red--text"
            depressed
            tile
            width="280px"
            height="55px">
                Masuk
        </v-btn>
    </router-link>
    <router-link tag=btn to="/register">
        <v-btn class="white--text"
            depressed
            tile
            width="280px"
            height="55px"
            color="red">
                Daftar
        </v-btn>
    </router-link>

    <v-row 
        no-gutters
        class="spacing-playground pa-10"
        fluid>
        <v-col
            cols="12"
            md="4"
        >
            <v-col md="20">
                <v-row>
                    <v-col md="20">
                        <v-img
                            :src="require('../assets/logologin.png')"
                            contain
                            height="75"
                        />
                        <br />
                        <v-form 
                            v-model="valid"
                            class="mt-5"
                        >
                            <p class="font-weight-bolt">NAMA LENGKAP</p>
                                <v-text-field
                                    v-model="param.name"
                                    :rules="nameRules"
                                    label=""
                                    clearable
                                    required
                                    color="red"
                                ></v-text-field>

                            <p></p>
                            <p class="font-weight-bolt">USERNAME</p>
                                <v-text-field
                                    v-model="param.username"
                                    :rules="usernameRules"
                                    label=""
                                    clearable
                                    required
                                    color="red"
                                ></v-text-field>

                            <p></p>
                            <p class="font-weight-bolt">EMAIL</p>
                                <v-text-field
                                    v-model="param.email"
                                    :rules="emailRules"
                                    label=""
                                    clearable
                                    required
                                    color="red"
                                ></v-text-field>

                            <p></p>
                            <p class="font-weight-bolt">PASSWORD</p>
                                <v-text-field
                                    v-model="param.password"
                                    :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                    :type="show ? 'text' : 'password'"
                                    label=""
                                    clearable
                                    required
                                    color="red"
                                    @click:append="show = !show"
                                    :rules="passwordRules"
                                ></v-text-field>

                                    <p></p>
                                    <p class="font-weight-bolt">KONFIRMASI PASSWORD</p>
                                    <v-text-field
                                        v-model="confirmPassword"
                                        :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                        :type="show ? 'text' : 'password'"
                                        label=""
                                        clearable
                                        required
                                        color="red"
                                        :rules="[v => !!v || 'Confirm Password is required', v => (this.param.password === this.confirmPassword) || 'Password not match']"
                                        @click:append="show = !show"
                                    ></v-text-field>

                                    <div>
                                        <v-row justify="center" class="mt-3">
                                            <v-dialog
                                            v-model="dialog"
                                            width="600px"
                                            >
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-btn
                                                    plain
                                                    text
                                                    v-bind="attrs"
                                                    v-on="on"
                                                    color="transparent"
                                                    >
                                                        <v-checkbox
                                                            v-model="checkbox"
                                                            :rules="[v => !!v || 'You must agree to continue!']"
                                                            label="Saya menyetujui kebijakan dan persyaratan pengguna"
                                                            required
                                                            color="red"
                                                        >
                                                        </v-checkbox>
                                                    </v-btn>
                                                </template>
                                                <v-card>
                                                    <v-card-title>
                                                    <span class="text-h5">Syarat dan Ketentuan Umum</span>
                                                    </v-card-title>
                                                    <v-card-text>
                                                    Syarat dan Ketentuan Umum ini dianggap sebagai bagian tidak terpisahkan dan harus ditafsirkan secara bersamaan
                                                    <br><br>
                                                    <b>PERSYARATAN KONTEN</b>
                                                    <ol>
                                                        <li>Aktifitas User adalah mencari profil pejabat, membaca artikel berita, dan  memberi komentar terhadap pejabat ataupun berita</li>
                                                        <li>User adalah pengguna dari konten yang tersedia. User dapat mengakses informasi dan berkomentar sesuai dengan aturan pada hak cipta</li>
                                                        <li>User bertanggung jawab atas perilaku komentar yang dilakukan. Ini termasuk memastikan bahwa User bijak dalam berkomentar, dilarang berkomentar berkaitan dengan SARA ( suku, agama, ras dan antar golongan)</li>
                                                        <li>User dilarang mengirim komentar berupa atau dimaksudkan sebagai pesan berantai (spamming), dengan/atau tanpa disertai tautan tertentu</li>
                                                        <li>User yang berkomentar tidak baik dan berkaitan dengan SARA akan dihapus akunnya secara otomatis</li>
                                                        <li>Apabila User berniat mengajukan permintaan untuk menghapus akun dan informasi pribadi User yang kami kumpulkan, User dapat mengirimkan email ke alamat rajawali@gmail.com</li>
                                                    </ol>
                                                    <br>
                                                    <b>HAK CIPTA</b>
                                                    <ol>
                                                        <li>User tidak diperkenankan menggunakan sebagian atau seluruh rancangan produk Platform untuk tujuan apapun tanpa seizin Platform</li>
                                                        <li>User tidak diperkenankan untuk memodifikasi, menyalin, mengubah atau menambah rancangan produk Platform dalam keadaan atau kondisi apapun</li>
                                                        <li>User, Pembaca atau Pengakses Platform tidak diperkenankan mengambil, mengunduh, menautkan dan/atau melekatkan Konten tanpa mencantumkan nama pemilik Konten berikut sumbernya seperti tercantum pada alamat URL konten</li>
                                                        <li>Penggunaan Konten di Platform untuk keperluan komersial hanya boleh dilakukan atas seizin User dan pihak yang memiliki Konten tersebut</li>
                                                        <li>Penggunaan nama, logo dan/atau atribut Platform lainnya untuk tujuan apapun harus atas seizin Platform</li>
                                                    </ol>
                                                    </v-card-text>
                                                    <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn
                                                        color="red darken-1"
                                                        text
                                                        @click="dialog = false"
                                                    >
                                                        Batal
                                                    </v-btn>
                                                    <v-btn
                                                        color="red darken-1"
                                                        text
                                                        @click="dialog = false"
                                                    >
                                                        Setuju
                                                    </v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-dialog>
                                        </v-row>
                                    </div>
                                    
                                    <br><br>

                                    <v-btn 
                                        rounded
                                        width="229px"
                                        height="40px"
                                        color="red"
                                        class="d-flex align-center justify-center pa-4 mx-auto white--text"
                                        @click="register()"
                                        :disabled="!valid"
                                    >
                                        Daftar
                                    </v-btn>
                        </v-form>
                    </v-col>
                </v-row>
            </v-col>
      </v-col>
    </v-row>
    </div>
</template>

<style scoped>
.reg_log {
  background: url('../assets/background2.jpeg');
  background-size: cover;
}
</style>

<script>
import {Services} from '../services/Services'
const APIServices = new Services()
export default {
    name: "Register",
    data() {
        return {
            show: false,
            param: {
                name: '',
                username: '',
                email: '',
                password: ''
            },
            alert: {
                message: '',
                display: false,
                type: ''
            },
            valid: false,
            nameRules: [
                v => !!v || 'Name is required',
                v => v.length <= 20 || 'Name must be less than 20 characters',
            ],
            usernameRules: [
                v => !!v || 'Username is required',
                v => v.length <= 20 || 'Username must be less than 20 characters',
            ],
            emailRules: [
                v => !!v || 'Email is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length >= 8 || 'Password must be at least 8 characters'
            ],
            checkbox: false,
            dialog: false,
        }
    },
    methods: {
        async register() {
            const data = await APIServices.register(this.param)
            .then((succ) => succ)
            .catch((error) => error)
            if (data.code === 1) {
                this.$swal({
                    icon: 'success',
                    title: 'Success',
                    text: data.message,
                    type: 'success'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.$session.start()
                        this.$session.set('loginStat', true)
                        this.$router.push('/login')
                    }
                })
            } else {
                console.log(data)
                this.$swal({
                    icon: 'error',
                    title: 'Error',
                    text: data.message,
                    type: 'error'
                });
            }
        },
    },
}
</script>