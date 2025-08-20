<template>
  <li class="flex items-center justify-between px-1">
    <div class="flex items-center space-x-2">
      <span
        class="w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold p-2"
        >{{ logo }}</span
      >
      <span class="text-black-700">{{ name }}</span>
    </div>
    <button class="text-xs text-indigo-600 hover:underline">Join</button>
  </li>
</template>

<script>
export default {
  props: {
    name: String,
    logo: String,
  },
}
</script>
