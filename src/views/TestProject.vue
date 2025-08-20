<template>
  <NavigationBar></NavigationBar>
  <div class="Foryoupage container-fluid w-screen h-screen flex_centered flex-row! gap-5 mt-20 px-5">
    <div
      class="flex_full h-[768px] self-start whitespace-nowrap overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray-300 "
    >
      <SideBar></SideBar>
    </div>
    <div class="flex-[2.5] flex_full flex_centered justify-start gap-5">
      <PostLayout>
        <div class="card-body">
          <div class="flex space-x-4">
          <img
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
            alt="User avatar" class="w-10 h-10 rounded-md" />
          <textarea rows="2" placeholder="Share something with your classmates…"
            class="flex-1 resize-none bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
          </div>
          <div class="mt-3 flex justify-end space-x-3">
          <button class="flex items-center text-gray-600 hover:text-indigo-600">
            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M3 15a4 4 0 018 0h6a4 4 0 018 0m-9-4V2m0 0h4m-4 0H7" />
            </svg>
            Photo/Video
          </button>
          <button class="flex items-center text-gray-600 hover:text-indigo-600">
            <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Poll
          </button>
          <button class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">Post</button>
          </div>
        </div>
      </PostLayout>
      <PostOutput>
        <h6>Hello World</h6>
      </PostOutput>
      <CommonLayout :props="assign" title="Assignments"></CommonLayout>
      <CommonLayout color="bg-blue-500" :props="events" title="Events"></CommonLayout>

    </div>
    <div class="flex_full bg-red-500">
      <RightSideBar></RightSideBar>
    </div>
  </div>
</template>

<script setup>
  //Component Imports
  import NavigationBar from '@/components/NavigationBar.vue'
  import SideBar from '@/components/SideBar.vue'

  // Layout Imports

  import PostOutput from '@/components/PostOutput.vue';
  import CommonLayout from '@/layouts/CommonLayout.vue';
  import PostLayout from '@/layouts/PostLayout.vue';

  //JSON FILES
  import assign from '@/data/Assignment.json';
  import events from '@/data/Events.json';
import RightSideBar from '@/components/RightSideBar.vue';

</script>

<style>

.Foryoupage {
  @apply 'w-[clamp(300px,100vw,1440px)]';
}

</style>
