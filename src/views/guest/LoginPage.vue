<template>
  <AuthLayout>
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <a href="/registration" class="font-medium text-indigo-600 hover:text-indigo-500"
            >create a new account</a
          >
        </p>
      </div>
      <p v-if="noErr" class="scale-up-ver-top">{{ errMsg }}</p>
      <form class="mt-8 space-y-6" @submit.prevent="SignInUser" method="POST">
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              v-model="email"
              autocomplete="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email address"
            />
          </div>
          <div class="mt-4">
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              v-model="password"
              type="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"
              >Forgot your password?</a
            >
          </div>
        </div>
        <div>
          <button
            type="submit"
            v-if="!isSigning"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
          <button
            type="submit"
            v-if="isSigning"
            class="group animate-pulse relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled
          >
            Signing...
          </button>
        </div>
      </form>
    </div>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'


import { ref } from 'vue'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const router = useRouter()

const noErr = ref(false)

const isSigning = ref(false)
const errMsg = ref('')

// const errors = [isSigning, noErr]

async function SignInUser() {
  const auth = getAuth()
  try {
    isSigning.value = true
    await signInWithEmailAndPassword(auth, email.value, password.value)
    alert('Login Successfully!')
    router.push('/')
  } catch (error) {
    if (error.code) {
      errMsg.value = 'Wrong username or password'
      noErr.value = true
    }
  } finally{
    isSigning.value = false
    setInterval(() => {
      errMsg.value = ""
      noErr.value = false
    }, 4000)
  }
}
</script>

<style>
.scale-up-ver-top{animation:scale-up-ver-top .4s ease-in-out both}

@keyframes scale-up-ver-top{0%{transform:scaleY(.4);transform-origin:100% 0}100%{transform:scaleY(1);transform-origin:100% 0}}

.scale-down {
  animation: scale-down .4s ease-in-out both;
}

@keyframes scale-down {
  0% {
    transform: scaleY(1);
    transform-origin: 100% 0;
  }
  100% {
    transform: scaleY(.4);
    transform-origin: 100% 0;
  }
}

</style>

