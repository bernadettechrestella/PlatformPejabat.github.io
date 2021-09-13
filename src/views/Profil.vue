<template>
    <div class="profil">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiProfil />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IsiProfil from '@/components/IsiProfil.vue'

export default {
    name: 'HomePage',
    components: {
        Header,
        IsiProfil,
    }
}
</script>