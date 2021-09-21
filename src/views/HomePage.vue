<template>
    <div class="homepage">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <!-- <BannerUtama /> -->
            <IsiHomePage />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
// import BannerUtama from '@/components/BannerUtama.vue'
import IsiHomePage from '@/components/IsiHomePage.vue'

export default {
    name: 'HomePage',
    components: {
        Header,
        // BannerUtama,
        IsiHomePage,
    }
}
</script>