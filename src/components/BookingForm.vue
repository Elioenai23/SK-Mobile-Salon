
<template>
  <form @submit.prevent='handleSubmit'>
        Name:
        <label>
            <input v-model="name" type="text" />
        </label>

        <label>
            Date: 
            <input v-model="date" type="date" />
        </label>

        <button type="submit">Book</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const date = ref('')


const handleSubmit = () => {
    console.log('Booking submitted:', {name : name.value, date: date.value})
}

</script>