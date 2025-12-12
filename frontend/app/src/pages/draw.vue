<script setup lang="ts">
    import { initPad, loop} from '../utils/drawingPad';
    import { onMounted } from 'vue';

    onMounted(() => {
        initPad();
        loop();
    });

</script>

<template>
    <main class="flex">
        <section class="w-200 h-150 m-4">
            <canvas class="drawingPad"></canvas>
        </section>
        <nav class="p-4">
            <ul class="flex flex-wrap gap-4 w-64">
                <li>
                    <div class="w-12 h-12 rounded-md bg-red-400 border border-gray-300 shadow-sm hover:scale-105 transition cursor-pointer"></div>
                </li>

                <li>
                    <div class="w-12 h-12 rounded-md bg-blue-400 border border-gray-300 shadow-sm hover:scale-105 transition cursor-pointer"></div>
                </li>

                <li>
                    <div class="w-12 h-12 rounded-md bg-green-400 border border-gray-300 shadow-sm hover:scale-105 transition cursor-pointer"></div>
                </li>

                <li>
                    <div class="w-12 h-12 rounded-md bg-black border border-gray-300 shadow-sm hover:scale-105 transition cursor-pointer"></div>
                </li>

                <li>
                    <div class="w-12 h-12 rounded-md bg-yellow-400 border border-gray-300 shadow-sm hover:scale-105 transition cursor-pointer"></div>
                </li>
            </ul>
        </nav>

    </main>
</template>