<template>
    <div class="editProfil">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiEditProfil />
            <Footer />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import IsiEditProfil from '@/components/IsiEditProfil.vue'

export default {
    name: 'HomePage',
    components: {
        Header,
        IsiEditProfil,
        Footer
    }
}
</script>