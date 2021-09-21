<template>
    <div class="detailberita">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiBerita />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IsiBerita from '@/components/IsiBerita.vue'

export default {
    name: 'Berita',
    components: {
        Header,
        IsiBerita
    }
}
</script>