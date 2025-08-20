<template>
  <header class="bg-white shadow-md rounded-sm fixed top-0 inset-x-0 z-50">
    <div class="max-w-7xl mx-auto h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8">
      <!-- Logo and search -->
      <div class="flex items-center space-x-4">
        <a href="#" class="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
          LMS
        </a>
        <div class="hidden md:block">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="🔍 Search "
            class="w-64 bg-gray-100 border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all duration-200"
            @keyup.enter="handleSearch"
          />
        </div>
      </div>

      <!-- Actions & profile -->
      <div class="flex items-center space-x-4">
        <!-- Notification icon -->
        <button
          class="relative text-gray-600 hover:text-indigo-600 focus:outline-none transition-colors duration-200"
          @click="handleNotifications"
        >
        <Icon class="i-fluent-color-alert-48" w-6 h-6></Icon>
          <!-- Notification badge -->
          <span
            v-if="notificationCount > 0"
            class="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center animate-pulse"
          >
            {{ notificationCount }}
          </span>
        </button>

        <!-- Messages icon (mobile) -->
        <button
          class="relative text-gray-600 hover:text-indigo-600 focus:outline-none md:hidden transition-colors duration-200"
          @click="toggleMobileChat"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2H7l-4 4V10a2 2 0 012-2h2"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 3h2a2 2 0 012 2v7a2 2 0 01-2 2H9l-4 4V5a2 2 0 012-2h2"
            />
          </svg>
          <span
            v-if="messageCount > 0"
            class="absolute -top-1 -right-1 bg-red-500 text-xs text-white rounded-full w-4 h-4 flex items-center justify-center animate-pulse"
          >
            {{ messageCount }}
          </span>
        </button>

        <!-- Profile picture dropdown -->
        <div class="relative" ref="profileDropdown">
          <button
            @click="toggleProfileDropdown"
            class="flex items-center focus:outline-none hover:ring-2 hover:ring-indigo-200 rounded-full transition-all duration-200"
          >
            <img
              :src="user.avatar"
              :alt="user.name"
              class="w-8 h-8 rounded-full border-2 border-transparent hover:border-indigo-300 transition-all duration-200"
            />
          </button>

          <!-- Profile dropdown menu -->
          <Transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <div
              v-if="isProfileDropdownOpen"
              class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-10"
            >
              <div class="px-4 py-2 border-b border-gray-100">
                <p class="text-sm font-medium text-gray-900">{{ user.name }}</p>
                <p class="text-xs text-gray-500">{{ user.email }}</p>
              </div>

              <a
                href="#profile"
                @click="handleMenuClick('profile')"
                class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                View Profile
              </a>

              <a
                href="#settings"
                @click="handleMenuClick('settings')"
                class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </a>

              <hr class="my-2 border-gray-100">

              <button
                @click="handleLogout"
                class="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <svg class="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Log Out
              </button>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
// Reactive data
const searchQuery = ref('')
const isProfileDropdownOpen = ref(false)
const notificationCount = ref(4)
const messageCount = ref(2)
const profileDropdown = ref(null)

// User data
const user = ref({
  name: 'John Doe',
  email: 'john@facebonk.com',
  avatar: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80'
})

// Emits
const emit = defineEmits([
  'search',
  'notifications-clicked',
  'mobile-chat-toggled',
  'profile-clicked',
  'settings-clicked',
  'logout-clicked'
])

// Methods
const handleSearch = () => {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value)
    console.log('Searching for:', searchQuery.value)
  }
}

const handleNotifications = () => {
  emit('notifications-clicked')
  console.log('Notifications clicked')
}

const toggleMobileChat = () => {
  emit('mobile-chat-toggled')
  console.log('Mobile chat toggled')
}

const toggleProfileDropdown = () => {
  isProfileDropdownOpen.value = !isProfileDropdownOpen.value
}

const handleMenuClick = (action) => {
  isProfileDropdownOpen.value = false
  emit(`${action}-clicked`)
  console.log(`${action} clicked`)
}

const handleLogout = () => {
  isProfileDropdownOpen.value = false
  emit('logout-clicked')
  router.push({path: '/Login'})
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (profileDropdown.value && !profileDropdown.value.contains(event.target)) {
    isProfileDropdownOpen.value = false
  }
}

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})


</script>
