<script setup lang="ts">
    import { onMounted } from 'vue';
    import { init } from '../utils/world.js';

    onMounted(()=>{
        init('./tiles/grass.png');
    });

</script>

<template>
    <main>
        <canvas></canvas>
    </main>
</template>
<style scoped>

</style>