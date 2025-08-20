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
        <div class="card-header">
          <div class="px-4 py-3 border-b flex justify-between items-center">
            <div class="flex items-center space-x-3">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Contact"
                class="w-8 h-8 rounded-full"
              />
              <span class="font-medium text-gray-800">John Smith</span>
            </div>
            <button class="text-gray-400 hover:text-gray-600">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div class="card-body">
                    <div class="flex-1 p-4 overflow-y-auto space-y-3">
            <div class="flex">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Avatar"
                class="w-6 h-6 rounded-full mr-2"
              />
              <div class="bg-gray-100 rounded-md p-2 max-w-xs text-sm">
                Hey Alex! Are you joining the study session later?
              </div>
            </div>
            <div class="flex justify-end">
              <div class="bg-indigo-600 text-white rounded-md p-2 max-w-xs text-sm">
                Yes, I'll be there! See you at 5 PM.
              </div>
            </div>
            <div class="flex">
              <img
                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                alt="Avatar"
                class="w-6 h-6 rounded-full mr-2"
              />
              <div class="bg-gray-100 rounded-md p-2 max-w-xs text-sm">
                Great! Don't forget to bring the notes.
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer">
             <div class="p-3 border-t">
            <form class="flex items-center">
              <input
                type="text"
                placeholder="Type a message…"
                class="flex-1 bg-gray-100 border border-gray-300 rounded-full py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button type="submit" class="ml-2 text-indigo-600 hover:text-indigo-800 focus:outline-none ">
                <Icon class="i-fluent-color-send-32 w-5 h-5"></Icon >
              </button>
            </form>
          </div>
        </div>
      </PostLayout>
    </div>
    <div class="flex_full">
      <RightSideBar :showRequest="false"></RightSideBar>
    </div>
  </div>
</template>

<script setup>
  import NavigationBar from '@/components/NavigationBar.vue';
  import SideBar from '@/components/SideBar.vue';
  import PostLayout from '@/layouts/PostLayout.vue';
  import RightSideBar from '@/components/RightSideBar.vue';
import { Icon } from '@iconify/vue';


</script>
