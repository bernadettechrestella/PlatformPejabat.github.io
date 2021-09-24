<template>
    <div class="detailberita">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiBerita />
            <Footer/>
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import IsiBerita from '@/components/IsiBerita.vue'

export default {
    name: 'Berita',
    components: {
        Header,
        IsiBerita,
        Footer
    }
}
</script>