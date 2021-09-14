<template>
    <div class="gantiPassword">
        <v-responsive :aspect-ratio="16/9">
            <Header />
            <IsiGantiPassword />
        </v-responsive>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import IsiGantiPassword from '@/components/IsiGantiPassword.vue'

export default {
    name: 'GantiPasword',
    components: {
        Header,
        IsiGantiPassword,
    }
}
</script>