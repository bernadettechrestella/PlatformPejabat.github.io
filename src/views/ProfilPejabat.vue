<template>
    <div class="profilpejabat">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiProfilPejabat />
        </v-responsive>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import IsiProfilPejabat from '../components/IsiProfilPejabat.vue'
export default {
    name: 'ProfilPejabat',
    components: {
        Header,
        IsiProfilPejabat,
    }
}
</script>