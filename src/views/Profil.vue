<template>
    <div class="profil">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiProfil />
            <Footer />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import IsiProfil from '@/components/IsiProfil.vue'

export default {
    name: 'HomePage',
    components: {
        Header,
        IsiProfil,
        Footer
    }
}
</script>