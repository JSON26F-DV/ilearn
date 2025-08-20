<template>
  <PostLayout>
      <div class="card-title ">
        <div class="flex space-x-4 items-center">
          <img
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
            alt="User avatar" class="w-10 h-10 rounded-full" />
          <div class="flex_centered items-start">
            <h6><strong>Joe Mama</strong></h6>
            <small>posted 5 mins ago</small>
          </div>
          <Icon class="i-fluent-color:options-32 w-5 h-5 ml-auto"></Icon>
        </div>
      </div>
      <div class="card-body flex items-start ">
        <slot></slot>
      </div>
      <div class="card-footer">
        <span class="flex justify-evenly border-(y-1px gray-300 solid) py-2 ">
          <p class="social"> <Icon class="i-mdi-thumb-up-outline w-5 h-5"></Icon> Likes</p>
          <p class="social"> <Icon class="i-mdi-comment-text-multiple-outline w-5 h-5"></Icon> Comment</p>
          <p class="social"> <Icon class="i-mdi-share-variant w-5 h-5 "></Icon> Share</p>
        </span>
      </div>
  </PostLayout>
</template>
<script setup>
import PostLayout from '@/layouts/PostLayout.vue';
import { Icon } from '@iconify/vue';

</script>

<style scoped>
  .social {
    @apply 'flex gap-2 justify-center items-center font-semibold text-gray-700';
  }
</style>
