<template>
  <aside class="top-4 left-4 w-16 rounded-2xl shadow-lg mr-5">
    <nav class="h-full flex flex-col items-center py-4">
      <ul class="flex flex-col gap-3 w-full">
        <li class="cursor-pointer" @click="setTool('pencil')">
          <div
            class="mx-auto w-10 h-10 rounded-xl flex items-center justify-center 
                   hover:bg-zinc-800 active:scale-105 transition hover:text-white"
          >
            <TiPencil class="w-5 h-5 transition" />
          </div>
        </li>

        <li class="cursor-pointer" @click="setTool('eraser')">
          <div
            class="mx-auto w-10 h-10 rounded-xl flex items-center justify-center 
                   hover:bg-zinc-800 active:scale-105 transition gap-1 hover:text-white"
          >
            <BsEraser class="w-5 h-5" />
          </div>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { TiPencil } from 'vue-icons-plus/ti';
import { BsEraser } from 'vue-icons-plus/bs';
import { setTool } from '@/utils/drawTools';
</script>
