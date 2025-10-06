<template>
    <div>
        <input type="password" placeholder="password" v-model="password" />
        <p v-if="error" style="color:red">{{ error }}</p>
    </div>
    
</template>


<script setup>
import { ref, watch, defineEmits } from 'vue';


//This entire block of script is to validate client passwords
//Is a component so that I can use it again in another page
const props = defineProps({
    modelValue: String
});

const emit = defineEmits(['update:modalValue', 'valid']);

const password = ref(props.modelValue || '');
const error = ref('');

//The regex: Passwords must be between 8-10 characters, should include at least one of these symbols [!, @, $, %]
const validatePassword = (pw) => {
    const regex = /^(?=.*[!@$%])[A-Za-z0-9!@$%]{8,10}$/;
    return regex.test(pw);
}

watch(password, (newVal) => {
    emit('update:modalValue', newVal);
    if (!validatePassword(newVal)) 
    {
        error.value = 'Password must be 8-10 characters and include at least one of !@$%';
        emit('valid', false);
    } else {
        error.value = '';
        emit('valid', true);
    }
})
</script>