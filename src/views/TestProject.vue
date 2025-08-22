<script setup>
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../main.js";
import { reactive, ref } from "vue";

const posts = reactive([]);
const newContent = ref("");

// Load existing posts
async function loadPosts() {
  const querySnapshot = await getDocs(collection(db, "post"));
  posts.splice(0);
  querySnapshot.forEach((doc) => {
    posts.push({ id: doc.id, ...doc.data() });
  });
}

// Add new post
async function addPost() {
  if (  !newContent.value) return;
  try{
    const docRef = await addDoc(collection(db, "post"), {

    content: newContent.value,
    });
  // optional: update local list
    posts.push({
    id: docRef.id,

    content: newContent.value,
  });
  }catch(error){
    alert("Something went wrong please Try again!" + error)
  } finally{

    newContent.value = "";
  }
}



loadPosts();
</script>

<template>
  <div>
    <h2>Posts</h2>
    <form @submit.prevent="addPost">
      <input v-model="newTitle" placeholder="Title" class="border m-1" />
      <input v-model="newContent" placeholder="Content" class="border m-1" />
      <button type="submit" class="bg-blue-500 text-white p-1 rounded">
        Add Post
      </button>
    </form>

    <ul>
      <li v-for="p in posts" :key="p.id" class="bg-green m-2 scale-up-center">
        <a href="">{{ p.title }}</a> <br />
        <span>{{ p.content }}</span>
        <button @click="deleteSub(index)" class="bg-red">delete</button>
      </li>
    </ul>
  </div>
</template>

<style>
.scale-up-center {
	animation: scale-up-center 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
}

@keyframes scale-up-center {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

</style>
