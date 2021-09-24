<template>
    <div class="cariprofil">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiCariProfil />
            <Footer />
        </v-responsive>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '@/components/Footer.vue'
import IsiCariProfil from '../components/IsiCariProfil.vue'

export default {
    name: 'CariProfil',
    components: {
        Header,
        IsiCariProfil,
        Footer
    }
}
</script>