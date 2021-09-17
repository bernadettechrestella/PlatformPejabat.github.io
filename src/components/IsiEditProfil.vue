<template>
    <div>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
            <!-- <v-col cols="4"> -->
                <!-- <v-row class="justify-center align-center"> -->
                    <!-- <v-avatar
                        color="primary"
                        size="200"
                        class="d-flex spacing-around"
                    ></v-avatar> -->
                <v-col cols="4">
                    <div class="container">
                        <div class="large-12 medium-12 small-12 cell">
                            <v-row align="center" justify="center">
                                <v-avatar size="250"
                                    v-if="showPreview">
                                    <img v-bind:src="imagePreview" v-show="showPreview" />
                                </v-avatar>
                                <v-avatar size="250"
                                    v-if="!showPreview">
                                    <img src="https://cdn.vuetifyjs.com/images/john.jpg"
                                        alt="John"/>
                                </v-avatar>
                            </v-row>
                            <p>&emsp;</p>
                            <v-row align="center" justify="center">
                                <label>
                                    <input type="file" id="file" ref="file" accept="image/*" v-on:change="handleFileUpload()"/>
                                </label>
                            </v-row>
                            <p>&emsp;</p>
                            <!-- <v-row align="center" justify="center">
                                <v-btn outlined color="red" v-on:click="submitFile()">Submit</v-btn>
                            </v-row> -->
                        </div>
                    </div>
                </v-col>
                <!-- </v-row> -->
            <!-- </v-col> -->
            <v-col cols="6">
                <v-form 
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                <h3>Nama Lengkap</h3>
                <v-text-field
                    label=""
                    clearable
                    required
                    color="red"
                ></v-text-field>

                <h3>User Name</h3>
                <v-text-field
                    label=""
                    clearable
                    required
                    color="red"
                ></v-text-field>

                <h3>Tanggal Lahir</h3>
                <br />
                <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="picker"
                    persistent
                    width="320px"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="picker"
                        append-icon="mdi-calendar"
                        dense
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        color="red"
                    ></v-text-field>
                    </template>
                    <!-- <v-date-picker v-model="date" range> -->
                    <v-date-picker v-model="picker">
                    <v-btn text color="primary" @click="resetMaxMin()"> Reset </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text color="red" @click="modal = false"> Cancel </v-btn>
                    <v-btn text color="green" @click="$refs.dialog.save(picker)">
                        OK
                    </v-btn>
                    </v-date-picker>
                </v-dialog>

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
import axios from 'axios';

export default {
    name: "IsiEditProfil",
    methods: {
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
            let reader = new FileReader();
            reader.addEventListener("load", function() {
                this.showPreview = true;
                this.imagePreview = reader.result;
            }.bind(this), false);
            if (this.file){
                if (/\.(jpe?g|png|gitf)$/i.test(this.file.name)){
                    reader.readAsDataURL(this.file);
                }
            }
        },
        // fileReader(){
        //     let reader = new Filereader();
        // },
        submitFile(){
            let formData = new FormData();
            formData.append('file', this.file);
            axios.post('/file-preview',
                formData,
                {
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                }
            ).then(function(){
                console.log('SUCCESS!!');
            })
            .catch(function(){
                console.log('FAILURE!!');
            });
        },
    },
    data() {
        return {
            file: '',
            showPreview: false,
            imagePreview: ''
        }
    },
}
</script>

<style scoped>
    div.container img {
        max-width: 200px;
        max-height: 200px;
    }
</style>