<template>
  <a
    v-for="(nav, index) in Navigation"
    :key="index"
    :href="nav.link"
    class="flex justify-start gap-1 items-center text-gray-600"
    :class="nav.color"
  >
    <Icon :class="nav.svg" class="flex flex_centered w-36px h-36px mr-2.5"></Icon>
    <p class="font-semibold">{{ nav.name }}</p>
  </a>
</template>

<script setup>
import { Icon } from '@iconify/vue'

const Navigation = [
  {
    link: '/',
    name: 'Jason Begornia',
    color: 'hover:text-blue-500',
    svg: 'i-fluent-color-person-starburst-32',
  },
  {
    link: '/',
    name: 'Ligma AI',
    color: 'hover:text-blue-500',
    svg: 'i-material-icon-theme-gemini-ai',
  },
  {
    link: '/',
    name: 'Feed',
    color: 'hover:text-blue-500',
    svg: 'i-fluent-color-news-28',
  },
  {
    link: 'community',
    name: 'Communities',
    color: 'hover:text-green-500',
    svg: 'i-fluent-color-people-20',
  },
  {
    link: 'assignments',
    name: 'Assignments',
    color: 'hover:text-orange-500',
    svg: 'i-fluent-color-notebook-24',
  },
  {
    link: 'events',
    name: 'Events',
    color: 'hover:text-purple-500',
    svg: 'i-fluent-color-calendar-24',
  },
  {
    link: 'messenger',
    name: 'Chat',
    color: 'hover:text-cyan-500',
    svg: 'i-fluent-color-chat-more-24',
  },
]
</script>

