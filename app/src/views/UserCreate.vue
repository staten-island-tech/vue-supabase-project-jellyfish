<template>
    <div class="auth">
        <h1>Login</h1>
        
        <form @submit.prevent="login">
            <input v-model="email" type="email" placeholder="email" required />
            <input v-model="password" placeholder="password" required />
            <button type="submit">Login</button>
        </form>
        
        <p v-if="error" class="error">{{ error }}</p>
 
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router'
    import { supabase } from '@/Supabase'
    
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    
    async function login(){
        error.value = null

        const { data, error: err } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        })

        if (err) {
            error.value = err.message
            return
        }

        router.push('/shows')
    }


</script>

<style scoped>

</style>