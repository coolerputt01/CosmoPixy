<script setup lang="ts">
    import { onMounted } from 'vue';
    import { init ,loop } from '../utils/world.js';

    onMounted(()=>{
        init('./tiles/grass.png');
        loop();
    });

</script>

<template>
    <main>
        <canvas></canvas>
    </main>
</template>
<style scoped>

</style>