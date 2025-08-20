<template>
  <PostLayout>
    <h4 class="text-lg font-semibold mb-4 text-start"> {{title }}</h4>
    <div class="card-body">
        <ul class="space-y-3 text-start">
          <li class="flex items-center justify-between" v-for="(item, index) in props" :key="index">
            <div>
              <p class="font-medium text-gray-800">{{ item.title }}</p>
              <small class="text-sm text-gray-500">{{ item.date }}</small>
            </div>
            <button :class="`bg-${color}-500 hover:bg-${color}-600`" class=" text-white text-sm px-3 py-1 rounded-md ">Submit</button>
          </li>
        </ul>
    </div>
  </PostLayout>
</template>

<script setup>
import PostLayout from './PostLayout.vue';

const { props } = defineProps({
  props: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'green'
  }
});

</script>
