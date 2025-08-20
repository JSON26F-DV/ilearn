<template>
  <NavigationBar></NavigationBar>
  <section class="Foryoupage container-fluid w-screen h-screen flex_centered flex-row! gap-5 pt-20 px-5 ">
    <aside
      class="flex_full h-[768px] self-start whitespace-nowrap overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray-300 "
    >
      <SideBar></SideBar>
    </aside>
    <div class="flex-[3]  flex_full flex_centered justify-start h-auto overflow-hidden flex-row">
      <router-view></router-view>
      <template v-if="router.name === 'HomePage'">
        <div class="content flex_full flex-[2] bg-green">
        <h1>hello world</h1>
      </div>
      <aside class="flex-[1] bg-blue flex_full">
        <h2>rose</h2>
      </aside>
      </template>

    </div>
  </section>
</template>

<script setup>
  //Component Imports
  import NavigationBar from '@/components/NavigationBar.vue'
  import SideBar from '@/components/SideBar.vue'
import { useRoute } from 'vue-router';


  const router = useRoute()
//   // Layout Imports

//   import PostOutput from '@/components/PostOutput.vue';
//   import CommonLayout from '@/layouts/CommonLayout.vue';
//   import PostLayout from '@/layouts/PostLayout.vue';

//   //JSON FILES
//   import assign from '@/data/Assignment.json';
//   import events from '@/data/Events.json';
// import RightSideBar from '@/components/RightSideBar.vue';

</script>

