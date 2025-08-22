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
                <p class="text-sm e font-medium text-gray-900">{{ user.name }}</p>
                <small class="text-xs text-gray-500">{{ user.email }}</small>
              </div>

              <a v-for="(toggle, index) in toggled" :key="index"
                href="#profile"
                @click="handleMenuClick('profile')"
                class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <Icon :class="`${toggle.logo} w-5 h-5 mr-2`"></Icon>
                {{toggle.name }}
              </a>


              <hr class="my-2 border-gray-100">

              <button
                @click="handlerSignOut"
                class="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <Icon class="i-mdi-logout w-5 h-5 mr-2"></Icon>
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
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'

const router = useRouter()



const toggled = [
  {logo: "i-fluent-color-person-32", name: "View Profile", link: "/profile"},
  {logo: "i-fluent-color-settings-32", name: "Settings", link: "/setting"},
]

const isLoggedIn = ref(false)

let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
    } else {
      isLoggedIn.value = false
    }
  })
})


// Reactive data
const searchQuery = ref('')
const isProfileDropdownOpen = ref(false)
const notificationCount = ref(4)
const messageCount = ref(2)
const profileDropdown = ref(null)


//Log Out
async function handlerSignOut() {
  isProfileDropdownOpen.value = false
  emit('logout-clicked')
  try {
    await signOut(auth)
    router.push('/login')
    console.log(auth.currentUser)
  } catch (error) {
    alert('Something went wrong' + error)
  }
}


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
function handleSearch() {
  if (searchQuery.value.trim()) {
    emit('search', searchQuery.value)
    console.log('Searching for:', searchQuery.value)
  }
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
