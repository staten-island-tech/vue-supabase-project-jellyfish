<template>
    <div>
        <h1>Login Page</h1>
        <form action="submit" @submit.prevent="login(user)">
            <label for="username"> Username </label>
            <input type="text" v-model="user.name">
            <label for="password"> Password </label>
            <input type="password" v-model="user.password"/>
            <button type="submit"> Login </button>
        </form>
        <div>
            <h2 v-if="loggedIn">Welcome {{ user.name }}</h2>
            <h2 v-else>Login</h2>
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref} from 'vue';
    const user = reactive({'username': '', 'password':''})
    const loggedIn = ref(false)
    function login(user) {
        loggedIn.value = true
        const router = useRouter()
        const goToMovieData = () => router.push('/movies')
        return { goToMovieData }
    }
</script>

<style scoped>

</style>