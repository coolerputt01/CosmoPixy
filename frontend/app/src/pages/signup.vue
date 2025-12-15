<template>
  <div class="min-h-screen flex items-center justify-center bg-white text-gray-900">
    <!-- Card -->
    <div class="relative w-full max-w-md p-8 rounded-3xl bg-white backdrop-blur-xl shadow-2xl border border-gray-200">
      <!-- Glow -->
      <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/40 to-blue-500 opacity-30 blur"></div>

      <div class="relative">
        <!-- Logo / Title -->
        <div class="text-center mb-6">
          <h1 class="text-4xl font-extrabold tracking-widest text-gray-900">COSMOPIXY</h1>
          <p class="mt-2 text-sm text-gray-600">Create your pixel explorer</p>
        </div>

        <!-- Progress Bar (gamified feel) -->
        <div class="mb-6">
          <div class="flex justify-between text-xs text-gray-600 mb-1">
            <span>Signup Progress</span>
            <span>1 / 3</span>
          </div>
          <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div class="h-full w-1/3 bg-gradient-to-r from-white to-blue-500"></div>
          </div>
        </div>

        <!-- Form -->
        <form class="space-y-4">
          <div>
            <label class="text-xs text-gray-600">Username</label>
            <input
              type="text"
              placeholder="PixelHero"
              class="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="text-xs text-gray-600">Email</label>
            <input
              type="email"
              placeholder="hero@cosmopixy.io"
              class="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="text-xs text-gray-600">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              class="w-full mt-1 px-4 py-3 rounded-xl bg-gray-100 border border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <!-- CTA -->
          <button
            type="submit"
            class="group w-full mt-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-bold tracking-wide shadow-lg shadow-blue-500/40"
          >
            <span class="group-hover:tracking-widest transition-all">START ADVENTURE</span>
          </button>
        </form>

        <!-- Footer -->
        <p class="mt-6 text-center text-xs text-gray-500">
          Already have an account?
          <span class="text-blue-500 hover:underline cursor-pointer">Login</span>
        </p>
      </div>
    </div>
  </div>
</template>
