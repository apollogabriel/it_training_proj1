<template>
    <div>
        <h1>Login Page</h1>
        <p>{{ credentials }}</p>
    </div>
</template>
<script>
import getCredentials from '../services/getCredentials.js'
//import PostList from '../components/PostList.vue'
//import getPosts from '../services/getPosts'

export default {
  
  setup() {
    const { credentials, error, load } = getCredentials()

    load()

    return { credentials, error }
  }
}

</script>