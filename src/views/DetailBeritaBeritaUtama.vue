<template>
    <div class="detailberita">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiDetailBeritaUtama />
            <Footer />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import IsiDetailBeritaUtama from '@/components/IsiDetailBeritaUtama.vue'

export default {
    name: 'DetailBeritaBeritaUtama',
    components: {
        Header,
        IsiDetailBeritaUtama,
        Footer
    }
}
</script>