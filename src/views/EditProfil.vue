<template>
    <div class="editProfil">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiEditProfil />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IsiEditProfil from '@/components/IsiEditProfil.vue'

export default {
    name: 'HomePage',
    components: {
        Header,
        IsiEditProfil,
    }
}
</script>