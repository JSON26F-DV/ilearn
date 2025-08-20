<template>
  <PostLayout>
    <h1>hello</h1>
    <h2>{{ name }}</h2>
    <p :class="`bg-${color}`">{{ about }}</p>
  </PostLayout>
</template>

<script setup>
import PostLayout from '@/layouts/PostLayout.vue';

  defineProps({
    name: String,
    about: String,
    color: String
  })
</script>
