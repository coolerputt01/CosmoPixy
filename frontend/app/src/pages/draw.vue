<script setup lang="ts">
    import { initPad, loop , setColor, lazyDownload } from '../utils/drawingPad';
    import { onMounted, ref, watch } from 'vue';
    import { AiOutlineDownload } from 'vue-icons-plus/ai'

    import tinycolor from "tinycolor2";

    let palette : Array<string> = [];
    for(let x = 0;x < 15;x++){
        palette.push(tinycolor.random().toHexString());
    }
    //console.log(palette);
    const colors = ref<string[]>(palette);
    const currentColorRef = ref<string>(palette[0] || "000000");

    onMounted(() => {
        initPad();
        setColor(currentColorRef.value);
        loop();
    });

    watch(currentColorRef, (newColor) => {
        setColor(newColor);
    });

</script>

<template>
    <main class="flex">
        <section class="w-150 h-150 m-4">
            <canvas class="drawingPad border border-3 rounded"></canvas>
        </section>
        <nav class="p-4">
            <ul class="flex flex-wrap gap-4 w-64">
                <li v-for="(color, index) in colors" :key="index">
                    <div
                        class="w-12 h-12 rounded-md border border-black shadow-sm hover:scale-105 transition cursor-pointer p-5"
                        :style="{ backgroundColor: color ,borderWidth: currentColorRef === color ? '3px' : '1px' }"
                        @click="currentColorRef = color">
                    </div>
                </li>
            </ul>
        </nav>
        <aside class="absolute bottom-20 right-15">
            <div class="cursor-pointer hover:opacity-75 border rounded-md w-25 flex flex-col justify-center p-3" @click="lazyDownload()">
                <AiOutlineDownload class="mx-auto"/>
                <span class="text-bold text-center">Save</span>
            </div>
        </aside>
    </main>
</template>