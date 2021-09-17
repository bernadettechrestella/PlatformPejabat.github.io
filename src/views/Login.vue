<template>

  <div class="reg_log">
    <router-link tag=btn to="/login">
        <v-btn class="white--text"
            depressed
            tile
            width="280px"
            height="55px"
            color="red">
                Masuk
        </v-btn>
    </router-link>
    <router-link tag=btn to="/register">
        <v-btn class="red--text"
            depressed
            tile
            width="280px"
            height="55px">
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
                            :src="require('../assets/WAKILMU.jpeg')"
                            class="my-3"
                            contain
                            height="100"
                        />

                        <v-form 
                            ref="form"
                            v-model="valid"
                            lazy-validation
                        >
                            <p>Email</p>
                            <v-text-field
                                v-model="email"
                                :rules="emailRules"
                                label=""
                                clearable
                                required
                                color="red"
                            ></v-text-field>

                            <p>Password</p>
                            <v-text-field
                                :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="show ? 'text' : 'password'"
                                label=""
                                clearable
                                required
                                color="red"
                                @click:append="show = !show"
                            ></v-text-field>

                            <v-checkbox
                                v-model="checkbox"
                                :rules="ingat"
                                label="Ingat Saya"
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
                                @click="login()"
                            >
                                Masuk
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
  height: 100vh;
}
</style>

<script>
export default {
    name: "Login",
    data() {
        return {
            show: false,
        }
    },
    methods: {
        login () {
            this.$session.start()
            this.$session.set('loginStat', true)
            this.$session.set('namaUser', 'bambang')
            this.$router.push('/')
    //   this.isLoading = true
    //   const data = await apiService.login(this.param).then((succ) => succ)
    //   console.log(data)
    //   if (data.code === 1) {
    //     var session = {
    //       dus: data.dataUser,
    //       tok: data.token,
    //       menu: data.Menu,
    //       ref: data.refreshToken
    //     }
    //     this.$session.start()
    //     this.$session.set('loginStat', true)
    //     this.$session.set('usDa', session)
    //     this.$router.push('/')
    //   } else {
    //     this.dialog = true
    //     this.dialogMsg = data.msg
        // console.log(data.msg)
    //   }
      // this.$session.set('loginStat', true)
      // this.$router.push('/Tappenas_BNI')
    //   this.isLoading = false
    }
  }
}
</script>