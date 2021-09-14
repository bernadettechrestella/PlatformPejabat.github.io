<template>
    <div>
        <v-row wrap class="d-flex align-start mb-6 spacing-playground pa-10">
            <v-col cols="4">
                <v-row class="justify-center align-center">
                    <!-- <v-avatar
                        color="primary"
                        size="200"
                        class="d-flex spacing-around"
                    ></v-avatar> -->
                    <div>
                    <picture-input
                        ref="pictureInput"
                        @change="onChanged"
                        :width="500"
                        :removable="true"
                        removeButtonClass="ui red button"
                        :height="500"
                        accept="image/jpeg, image/png, image/jpg"
                        buttonClass="ui button primary"
                        :customStrings="{
                            upload: '<h1>Upload it!</h1>',
                            drag: 'Drag and drop your image here'}"
                    >
                    </picture-input>
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
        onChanged() {
            console.log("New picture loaded");
            if (this.$refs.pictureInput.file) {
            this.image = this.$refs.pictureInput.file;
            } else {
            console.log("Old browser. No support for Filereader API");
            }
        },
    }
}
</script>