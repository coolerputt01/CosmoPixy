<script setup lang="ts">
import { BsFillCaretRightFill } from 'vue-icons-plus/bs';
</script>

<template>
  <div class="absolute inset-0 flex justify-center items-center">
    <div class="w-120 h-115 p-4 rounded-lg shadow-lg bg-white">
      <img src="/tiles/drawTiles.gif" alt="Draw grass" width="512" height="512">
      <p class="text-center py-10 italic">Please draw grass to get started with creating your universe!</p>
      <div class="flex justify-end">
        <button class="flex gap-2 bg-blue-500 rounded-md p-2 w-20 text-white cursor-pointer">
            Next
            <BsFillCaretRightFill />
        </button>
      </div>
    </div>
  </div>
</template>
