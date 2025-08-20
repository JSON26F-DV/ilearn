<template>
 <main class="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        <h2 class="text-2xl font-bold mb-6">Your Assignments</h2>
        <!-- Upcoming assignments -->
        <section class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold mb-4">Upcoming Assignments</h3>
          <div class="space-y-4">
            <!-- Assignment card -->
            <div class="flex items-start text-start justify-between bg-gray-50 p-4 rounded-md" v-for="(assign, index) in assigns" :key="index">
              <div>
                <h5 class="font-medium text-gray-800"><strong>{{ assign.title }}</strong></h5>
                <p class="text-sm text-gray-500">{{ assign.date }}</p>
                <p class="text-sm text-gray-600 mt-1">{{ assign.content }}</p>
              </div>
              <div class="flex flex-col items-end space-y-2">
                <span class="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">{{ assign.status }}</span>
                <button class="bg-indigo-600 text-white text-sm px-3 py-1 rounded-md hover:bg-indigo-700">Submit</button>
              </div>
            </div>

          </div>
        </section>
        <!-- Completed assignments -->
        <section class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-semibold mb-4">Completed Assignments</h3>
          <div class="space-y-4">
            <div class="flex items-start justify-between bg-gray-50 p-4 rounded-md text-start">
              <div>
                <h5 class="font-medium text-gray-800">Physics Lab Report</h5>
                <p class="text-sm text-gray-500">Physics – Submitted Jul 29, 2025</p>
                <p class="text-sm text-gray-600 mt-1">Experiment on projectile motion with detailed data analysis.</p>
              </div>
              <div class="flex flex-col items-end space-y-2">
                <span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">Graded: 95%</span>
                <button class="bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-md cursor-not-allowed" disabled>View</button>
              </div>
            </div>
          </div>
        </section>
      </main>
</template>

<script setup>

  import assigns from '@/data/Assignment.json'
</script>
