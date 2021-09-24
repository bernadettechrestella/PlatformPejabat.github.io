<template>
    <div class="gantiEmail">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiGantiEmail />
            <Footer />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import IsiGantiEmail from '@/components/IsiGantiEmail.vue'

export default {
    name: 'GantiEmail',
    components: {
        Header,
        IsiGantiEmail,
        Footer
    }
}
</script>