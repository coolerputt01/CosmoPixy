<template>
  <aside class="top-4 left-4 w-16 rounded-2xl mr-5">
    <nav class="h-full flex flex-col items-center py-4">
      <ul class="flex flex-col gap-3 w-full">
        <li class="cursor-pointer" @click="setTool('pencil')">
          <div
            class="mx-auto w-10 h-10 rounded-xl flex items-center justify-center active:scale-105 transition"
            :class="{
              'bg-black text-white': currentTool === 'pencil',
              'hover:bg-zinc-500 hover:text-white': currentTool !== 'pencil'
            }"
          >
            <TiPencil class="w-5 h-5 transition" />
          </div>
        </li>

        <li class="cursor-pointer" @click="setTool('eraser')">
          <div
            class="mx-auto w-10 h-10 rounded-xl flex items-center justify-center 
                   hover:bg-zinc-500 active:scale-105 transition gap-1"
            :class="{
              'bg-black text-white': currentTool === 'eraser',
              'hover:bg-zinc-800 hover:text-white': currentTool !== 'eraser'
            }"
          >
            <BsEraser class="w-5 h-5" />
          </div>
        </li>
        <li class="cursor-pointer" @click="setTool('fill')">
          <div
            class="mx-auto w-10 h-10 rounded-xl flex items-center justify-center active:scale-105 transition"
            :class="{
              'bg-black text-white': currentTool === 'fill',
              'hover:bg-zinc-500 hover:text-white': currentTool !== 'fill'
            }"
          >
            <LuPaintBucket class="w-5 h-5 transition" />
          </div>
        </li>

      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { TiPencil } from 'vue-icons-plus/ti';
import { BsEraser } from 'vue-icons-plus/bs';
import { setTool, currentTool } from '@/utils/drawTools';
import { LuPaintBucket } from 'vue-icons-plus/lu';
</script>
