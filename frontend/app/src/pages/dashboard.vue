<template>
  <main class="h-screen bg-gray-100">
    <div class="flex h-full">
      <!-- Sidebar -->
      <nav class="w-64 text-black flex flex-col p-4">
        <ul class="space-y-4">
          <li>
            <RouterLink
              to="/dashboard"
              class="block py-2 px-4 rounded hover:bg-blue-500 transition-colors"
            >
              Dashboard
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/worlds"
              class="block py-2 px-4 rounded hover:bg-blue-500 transition-colors"
            >
              Worlds
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/draw"
              class="block py-2 px-4 rounded hover:bg-blue-500 transition-colors"
            >
              Draw
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/collection"
              class="block py-2 px-4 rounded hover:bg-blue-500 transition-colors"
            >
              Collection
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Main content -->
      <section class="flex-1 bg-white p-6 overflow-auto">
        <h1 class="text-2xl font-bold mb-4">CosmsoPixy</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Example cards / info panels -->
          <div class="bg-gray-100 p-4 rounded shadow">Panel 1</div>
          <div class="bg-gray-100 p-4 rounded shadow">Panel 2</div>
          <div class="bg-gray-100 p-4 rounded shadow">Panel 3</div>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
