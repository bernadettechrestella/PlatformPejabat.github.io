<template>
    <div class="verifikasiEmail">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiVerifikasiEmail />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IsiVerifikasiEmail from '@/components/IsiVerifikasiEmail.vue'

export default {
    name: 'VerifikasiEmail',
    components: {
        Header,
        IsiVerifikasiEmail,
    }
}
</script>