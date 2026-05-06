import { ref, onMounted } from 'vue'
import { supabase } from './supabase'

const transactions = ref([])
const error = ref(null)

onMounted(async () => {
  let { data: reviewData, error: err } = await supabase
    .from('reviews')
    .select('*')
  if (err) {
    error.value = err.message
  } else {
    reviews.value = reviewData
  }
})