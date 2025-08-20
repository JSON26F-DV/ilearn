<script setup>
import CommunityList from '@/layouts/CommunityList.vue'

import NavList from '../layouts/NavList.vue'
import communities from '@/data/Community.json'
</script>

<template>
  <aside class="flex_full flex-col hidden lg:block lg:w-64 px-4 py-6 space-y-8">
    <!-- Navigation links -->
    <div>
      <nav class="space-y-3 pl-3">
        <NavList></NavList>
      </nav>
    </div>
    <!-- Communities list -->
    <div class="border-(t-2 gray-400 solid) mb-2">
      <p class="text-(start lg gray-600) font-bold mb-4 ml-2">Communities</p>
      <ul>
        <li class="space-y-3 pl-2">
          <CommunityList
            v-for="(com, index) in communities"
            :key="index"
            :name="com.title"
            :logo="com.logo"
          ></CommunityList>
        </li>
      </ul>
    </div>
  </aside>
</template>
