<template>
    <div class="detailberita">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiDetailBeritaKategori />
            <Footer />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import IsiDetailBeritaKategori from '@/components/isiDetailBeritaKategori.vue'

export default {
    name: 'DetailBeritaKategori',
    components: {
        Header,
        IsiDetailBeritaKategori,
        Footer
    }
}
</script>