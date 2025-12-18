<template>
  <main class="w-full min-h-screen flex items-center justify-center bg-gray-100">
    <div class="stage flex flex-col gap-4 w-full max-w-sm p-6">

      <!-- TITLE -->
      <h2 class="text-2xl font-bold text-center text-gray-800">
        Sign In
      </h2>

      <!-- USERNAME -->
      <input
        type="text"
        placeholder="Username"
        v-model="form.username"
        class="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <!-- PASSWORD -->
      <input
        type="password"
        placeholder="Password"
        v-model="form.password"
        class="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <!-- BUTTON -->
      <button
        class="bg-blue-500 rounded-full text-white py-3 font-bold hover:opacity-80 transition"
        @click="signIn"
      >
        Sign In
      </button>

      <!-- FOOTER -->
      <div class="text-center mt-6 text-sm text-gray-600">
        <p>
          Don’t have an account?
          <RouterLink to="/signup" class="underline text-blue-800">
            Sign up
          </RouterLink>
        </p>
      </div>

    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  username: "",
  password: ""
});

function signIn() {
  if (!form.value.username || !form.value.password) return

  console.log("Signing in with:", form.value)
  // send to backend (Flask / Django / API)
}
</script>
