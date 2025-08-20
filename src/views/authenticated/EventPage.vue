<template>
  <main class="flex_full flex-col h-auto gap-5 pb-100">
    <h2 class="text-2xl font-bold mb-4">Explore Communities</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Community card template repeated for multiple communities -->
    <PostLayout v-for="(event, index) in events" :key="index" class="w-auto">
      <div class="card-header flex items-center space-x-3 text-start">
        <span
          class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-semibold"
          > {{ event.logo }}</span
        >
      <div>
          <h6 class="font-semibold text-gray-800  ">
            {{ event.title }}
          </h6>
          <small class="text-xs text-gray-500">1.2K members</small>
        </div>
      </div>
      <div class="card-body">
        <p class="text-sm text-gray-600 flex-1 text-start">
          {{ event.content }}
        </p>
        <div class="mt-4 flex justify-between items-center">
          <a href="#" class="text-indigo-600 hover:underline text-sm"
            >View</a
          >
          <button
            class="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
          >
            Join
          </button>
        </div>
      </div>
    </PostLayout>
    </div>

  </main>
</template>

<script setup>
  import PostLayout from '@/layouts/PostLayout.vue';
  import events from '@/data/Events.json'
</script>
