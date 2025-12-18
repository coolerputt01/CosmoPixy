<template>
  <main class="w-full min-h-screen flex items-center justify-center bg-gray-100">
    <div class="stage flex flex-col gap-4 w-full max-w-sm p-6">

      <h2 class="text-xl font-bold text-center">
        {{ stepTitle }}
      </h2>

      <input
        :type="inputType"
        :placeholder="placeholder"
        v-model="form[currentField]"
        class="border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        class="bg-blue-500 rounded-full text-white py-3 font-bold hover:opacity-80 transition"
        @click="nextStep"
      >
        {{ buttonText }}
      </button>

      <div class="text-center mt-10">
        <p>
          Already have an account?
          Sign in
          <RouterLink to="/signin" class="underline text-blue-800">here</RouterLink>
        </p>
      </div>

    </div>
  </main>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, computed } from "vue"

const step = ref(0)

const form = ref({
  username: "",
  email: "",
  password: ""
})

const steps = ["username", "email", "password"]

const currentField = computed(() => steps[step.value])

const placeholder = computed(() => {
  if (step.value === 0) return "Username"
  if (step.value === 1) return "Email"
  return "Password"
})

const inputType = computed(() => {
  if (step.value === 2) return "password"
  if (step.value === 1) return "email"
  return "text"
})

const stepTitle = computed(() => {
  if (step.value === 0) return "Choose a Username"
  if (step.value === 1) return "Enter your E-mail"
  return "Create a Password"
})

const buttonText = computed(() =>
  step.value === steps.length - 1 ? "Finish" : "Next"
)

function nextStep() {
  if (!form.value[currentField.value]) return

  if (step.value < steps.length - 1) {
    step.value++
  } else {
    console.log("Form complete:", form.value)
    // submit to backend here
  }
}
</script>
