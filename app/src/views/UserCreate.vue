<template>
    <div>
        <h1>Login Page</h1>
        <form action="submit" @submit.prevent="login(user)">
            <label for="username"> Username </label>
            <input v-model="username" required placeholder="username">
            <label for="password"> Password </label>
            <input v-model="password" required placeholder="password">
            <button type="submit"> Login </button>
        </form>
        <div>
            <h2 v-if="loggedIn">Welcome {{ user.name }} </h2>
            
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref} from 'vue';
    import { useRouter } from 'vue-router'
    
    const router = useRouter()
    const user = reactive({'username': '', 'password':''})
    const loggedIn = ref(false)
    function login(user) {
        loggedIn.value = true
        router.push('/shows')
    }
</script>

<style scoped>

</style>