<script setup>
import CommunityList from '@/layouts/CommunityList.vue'


import users from '@/data/Users.json'
</script>

<template>
  <aside class="flex_full flex-col hidden lg:block lg:w-64 px-4 py-6 space-y-8">
    <!-- Communities list -->
    <div class="border-(t-2 gray-400 solid) mb-2">
      <p class="text-(start lg gray-600) font-bold mb-4 ml-2">Chats</p>
      <ul>
        <li class="space-y-3 pl-2">
          <CommunityList
            v-for="(user, index) in users"
            :key="index"
            :name="user.name"
            :logo="user.logo"
          ></CommunityList>
        </li>
      </ul>
    </div>
  </aside>
</template>
