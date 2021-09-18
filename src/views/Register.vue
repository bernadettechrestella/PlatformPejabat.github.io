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
                        >
                            <h3 class="font-weight-bolt">Nama Lengkap</h3>
                                <v-text-field
                                    v-model="param.name"
                                    :rules="nameRules"
                                    label=""
                                    clearable
                                    required
                                    color="red"
                                ></v-text-field>

                            <h3 class="font-weight-bolt">Username</h3>
                                <v-text-field
                                    v-model="param.username"
                                    :rules="usernameRules"
                                    label=""
                                    clearable
                                    required
                                    color="red"
                                ></v-text-field>

                            <h3 class="font-weight-bolt">Email</h3>
                                <v-text-field
                                    v-model="param.email"
                                    :rules="emailRules"
                                    label=""
                                    clearable
                                    required
                                    color="red"
                                ></v-text-field>

                            <h3 class="font-weight-bolt">Password</h3>
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

                                    <h3 class="font-weight-bolt">Konfirmasi Password</h3>
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

                                    <v-checkbox
                                        v-model="checkbox"
                                        :rules="[v => !!v || 'You must agree to continue!']"
                                        label="Saya menyetujui kebijakan dan persyaratan pengguna"
                                        required
                                        color="red"
                                    ></v-checkbox>

                                    <p></p>
                                    
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
  height: 125vh;
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
                        this.$router.push('/')
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