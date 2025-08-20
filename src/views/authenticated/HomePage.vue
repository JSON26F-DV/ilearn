<template>
  <NavigationBar></NavigationBar>
  <section class="Foryoupage container-fluid w-screen h-screen flex_centered flex-row! gap-5 pt-20 px-5 ">
    <aside
      class="NavBar flex_full h-[768px] self-start whitespace-nowrap overflow-x-hidden overflow-y-auto scrollbar scrollbar-thumb-gray-300 sm:hidden md:hidden lg:block"
    >
      <SideBar></SideBar>
    </aside>
    <div
    flex=""
    class="flex-[3] flex_full flex_centered flex-row justify-start items-start h-auto overflow-hidden">
      <router-view></router-view>
      <template v-if="router.name === 'HomePage'">
        <div class="content flex_full flex_centered" flex="[2]" gap-4>
            <PostLayout>
              <form @submit.prevent="UserPost" method="get">
                <div class="card-body">
                  <div class="flex space-x-4">
                    <img
                      src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                      alt="User avatar" class="w-10 h-10 rounded-md" />
                    <textarea rows="2" placeholder="Share something with your classmates…" v-model="content"
                      class="flex-1 resize-none bg-gray-100 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
                  </div>
                <div class="mt-3 flex justify-end space-x-3">
                  <button class="flex items-center text-gray-600 hover:text-indigo-600">
                    <Icon class="i-fluent-color-image-32 mr-1"></Icon>
                    Photo/Video
                  </button>
                  <button class="flex items-center text-gray-600 hover:text-indigo-600">
                    <Icon class="i-fluent-color-document-add-20 mr-1"></Icon>
                    Poll
                  </button>
                    <button type="submit" class="btn">
                      <div class="svg-wrapper-1">
                        <div class="svg-wrapper">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path
                              fill="currentColor"
                              d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <span>Post</span>
                    </button>
                  </div>
              </div>
              </form>
            </PostLayout>
            <div v-for="(text,index) in array" :key="index" class="User_Post">
                <PostLayout>
                  <div class="card-title ">
                    <div class="flex space-x-4 items-center">
                      <img
                        src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                        alt="User avatar" class="w-10 h-10 rounded-full" />
                      <div class="flex_centered items-start">
                        <h6><strong>Jason Begornia</strong></h6>
                        <small>posted 6 mins ago</small>
                      </div>
                      <Icon class="i-fluent-color:options-32 w-5 h-5 ml-auto"></Icon>
                    </div>
                  </div>
                  <div class="card-body flex items-start ">
                    {{ text }}
                  </div>
                  <div class="card-footer">
                    <span class="flex justify-evenly border-(y-1px gray-300 solid) py-2 ">
                      <p class="social">👍 Likes</p>
                      <p class="social"> <Icon class="i-fluent-color-comment-32 w-5 h-5"></Icon> Comment</p>
                      <p class="social"> <Icon class="i-fluent-color-share-android-32 w-5 h-5 "></Icon> Share</p>
                    </span>
                  </div>
                </PostLayout>
            </div>
            <CommonLayout :props="assign" title="Assignments"></CommonLayout>
            <CommonLayout color="bg-blue" :props="events" title="Events"></CommonLayout>
        </div>
        <aside class="NavBar flex-[1] flex_full ">
          <RightSideBar></RightSideBar>
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
  // Layout Imports
  import PostLayout from '@/layouts/PostLayout.vue';
  import CommonLayout from '@/layouts/CommonLayout.vue';
  import { Icon } from '@iconify/vue';

  //JSON FILES
  import assign from '@/data/Assignment.json';
  import events from '@/data/Events.json';
  import RightSideBar from '@/components/RightSideBar.vue';
  import { ref } from 'vue';

  const content = ref('');
  const array = ref([])

  function UserPost(){
    if(content.value.trim()!==""){
      array.value.unshift(content.value);
      content.value = "";
    }else{
      alert('No Content')
    }
  }

  // const posts = reactive(
  //   [
  //     {
  //       user: "Jason",
  //       time: "5",
  //       content: "hello world"
  //     },
  //     {
  //       user: "shelly",
  //       time: "5",
  //       content: "jason Love Shelly"
  //     },
  //     {
  //       user: "Jason",
  //       time: "6",
  //       content: "Shannel mapag mahal"
  //     }
  //   ]
  // )


</script>


<style scoped>
  .social {
    @apply 'flex gap-2 justify-center items-center font-semibold text-gray-700';
  }
  .btn {
    font-family: inherit;
    font-size: 20px;
    background: royalblue;
    color: white;
    padding: 0.5em 1em;
    padding-left: 0.6em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 13px;
    overflow: hidden;
    transition: all 0.2s;
    cursor: pointer;
  }

  button span {
    font-size: 15px;
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  button:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }

  button:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }

  button:hover span {
    transform: translateX(5em);
  }

  button:active {
    transform: scale(0.95);
  }

  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }

</style>
