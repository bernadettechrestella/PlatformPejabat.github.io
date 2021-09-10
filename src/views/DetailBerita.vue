<template>
    <div class="detailberita">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiDetailBerita />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IsiDetailBerita from '@/components/IsiDetailBerita.vue'

export default {
    name: 'DetailBerita',
    components: {
        Header,
        IsiDetailBerita
    }
}
</script>