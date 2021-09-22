<template>
    <div class="detailberita">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiDetailBeritaUtama />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IsiDetailBeritaUtama from '@/components/IsiDetailBeritaUtama.vue'

export default {
    name: 'DetailBeritaBeritaUtama',
    components: {
        Header,
        IsiDetailBeritaUtama
    }
}
</script>