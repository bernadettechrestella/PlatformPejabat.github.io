<template>
    <div class="detailberita">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiDetailBeritaHomePage />
            <Footer />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import IsiDetailBeritaHomePage from '@/components/IsiDetailBeritaHomePage.vue'

export default {
    name: 'DetailBeritaHomePage',
    components: {
        Header,
        IsiDetailBeritaHomePage,
        Footer
    }
}
</script>