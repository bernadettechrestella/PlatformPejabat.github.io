<template>
    <div class="tentangKami">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiTentangKami />
            <Footer />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import IsiTentangKami from '@/components/IsiTentangKami.vue'

export default {
    name: 'TentangKami',
    components: {
        Header,
        IsiTentangKami,
        Footer
    }
}
</script>