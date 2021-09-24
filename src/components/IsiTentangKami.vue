<template>
    <div>
        <v-row no-gutters
        class="pa-10">
          <v-col
            cols="12"
            md="4"
          >
            <v-img
              :src="require('../assets/image.png')"
              sizes="400"
              class="mt-1"
            />
          </v-col>

          <v-col
            cols="12"
            sm="6"
            md="8"
          >
            <div class="pa-16">
              <br>
              <h1 class="red--text mt-4">Wakilmu.id</h1>
              <p>
                Wakilmu.id adalah platform penyedia layanan informasi seputar pejabat publik di seluruh Indonesia mulai dari profil hingga berita mengenai calon wakil rakyat yang kredibel dan akurat
              </p>
            </div>
          </v-col>
        </v-row>

        <v-row class="pa-10">
          <v-col
            cols="12"
            sm="6"
            md="8"
          >
            <div class="px-16">
              <br>
            <h1 class="red--text mt-4">Berdiri Tahun 2021</h1>
            <p class>
              Wakilmu.id berawal dari sebuah project bootcamp yang kemudian menjadi sebuah startup yang terdiri dari 6 anggota tim pengembang
            </p>
            </div>
          </v-col>

          <v-col
            cols="12"
            md="4"
          >
            <v-img
              :src="require('../assets/2021.png')"
              sizes="400"
              class="mr-5"
            />
          </v-col>
        </v-row>
        
        <v-row class="pa-10 d-flex align-center justify-center">
          <div class="px-16">
          <h1 class="red--text mt-16">Tim Pengembang</h1>
          </div>
        </v-row>

        <v-row>
          <v-col>
            <v-img
              :src="require('../assets/person.png')"
              width="60"
              class="mx-auto"
            />
            
            <v-col>
            <h2 class="red--text d-flex align-center justify-center">Muhammad Fahmi Adji</h2>
            <p class="d-flex align-center justify-center"><i>Product Manager</i></p>
            </v-col>
          </v-col>

          <v-col>
            <v-img
              :src="require('../assets/person.png')"
              width="60"
              class="mx-auto"
            />
            
            <v-col>
            <h2 class="red--text d-flex align-center justify-center">Shubhan Hasanuddin</h2>
            <p class="d-flex align-center justify-center"><i>Product Manager</i></p>
            </v-col>
          </v-col>

          <v-col>
            <v-img
              :src="require('../assets/person.png')"
              width="60"
              class="mx-auto"
            />
            
            <v-col>
            <h2 class="red--text d-flex align-center justify-center">Farhan Rizkyafandi</h2>
            <p class="d-flex align-center justify-center"><i>UI/UX Designer</i></p>
            </v-col>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-img
              :src="require('../assets/person.png')"
              width="60"
              class="mx-auto"
            />
            
            <v-col>
            <h2 class="red--text d-flex align-center justify-center">Bernadette Chrestella</h2>
            <p class="d-flex align-center justify-center"><i>Front-End Developer</i></p>
            </v-col>
          </v-col>

          <v-col>
            <v-img
              :src="require('../assets/person.png')"
              width="60"
              class="mx-auto"
            />
            
            <v-col>
            <h2 class="red--text d-flex align-center justify-center">Orchidia Angelica Puspa Nirmala</h2>
            <p class="d-flex align-center justify-center"><i>Front-End Developer</i></p>
            </v-col>
          </v-col>

          <v-col>
            <v-img
              :src="require('../assets/person.png')"
              width="60"
              class="mx-auto"
            />
            
            <v-col>
            <h2 class="red--text d-flex align-center justify-center">Muhammad Iqbal</h2>
            <p class="d-flex align-center justify-center"><i>Back-End Developer</i></p>
            </v-col>
          </v-col>
        </v-row>
    </div>
</template>


<script>
export default {
    name: "IsiTentangKami"
}
</script>