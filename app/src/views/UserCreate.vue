<template>
    <div class="auth">
        
        <input v-model="email" type="email" placeholder="email" required />
        <input v-model="password" type="password" placeholder="password" required />
        <button v-if="submit">Login</button> 
        
        <button @click="login">Login</button>
        <button @click="signup">Sign Up</button>
        <p v-if="error" class="error">{{ error }}</p>
 
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router'
    import { supabase } from '@/utils/supabase'
    
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const error = ref(null)

    async function login(){
        error.value = null

        const { error: err } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value
        })

        if (err) {
            error.value = err.message
            return
        }

        router.push('/shows')
    }

    async function signup(){
        error.value = null

        const { error: err } = await supabase.auth.signUp({
            email: email.value,
            password: password.value
        })

        if (err) {
            error.value = err.message
            return
        }
    }


</script>

<style scoped>

</style>