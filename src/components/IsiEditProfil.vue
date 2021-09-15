<template>
    <div>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-divider style="background-color:#EEEEEE; height: 20px; width:100%;"></v-divider>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
            <v-col cols="4">
                <v-row class="justify-center align-center">
                    <!-- <v-avatar
                        color="primary"
                        size="200"
                        class="d-flex spacing-around"
                    ></v-avatar> -->
                    <div class="container">
                        <div class="large-12 medium-12 small-12 cell">
                            <label>Upload Photo
                                <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
                            </label>
                                <button v-on:click="submitFile()">Submit</button>
                        </div>
                    </div>
                </v-row>
            </v-col>
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
export default {
    name: "IsiEditProfil",
    methods: {
        handleFileUpload(){
            this.file = this.$refs.file.files[0];
        },
        // submitFile(){
        //     let formData = new FormData();
        //     formData.append('file, this.file');
        //     axios.post('/single-file',
        //         formData,
        //         {
        //             headers: {
        //                 'Content-Type' : 'multipart/form-data'
        //             }
        //         }
        //     ).then(function(){
        //         console.log('SUCCESS!!');
        //     })
        //     .catch(function(){
        //         console.log('FAILURE!!');
        //     });
        // },
    },
    data() {
        return {
            file: ''
        }
    },
}
</script>