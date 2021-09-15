<template>
    <div class="cariprofil">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiCariProfil />
        </v-responsive>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import IsiCariProfil from '../components/IsiCariProfil.vue'

export default {
    name: 'CariProfil',
    components: {
        Header,
        IsiCariProfil,
    }
}
</script>