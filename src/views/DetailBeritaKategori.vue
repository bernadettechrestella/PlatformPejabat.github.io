<template>
    <div class="detailberita">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiDetailBeritaKategori />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IsiDetailBeritaKategori from '@/components/isiDetailBeritaKategori.vue'

export default {
    name: 'DetailBeritaKategori',
    components: {
        Header,
        IsiDetailBeritaKategori
    }
}
</script>