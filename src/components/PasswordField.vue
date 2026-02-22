<template>
<!--Password Field is supposed to handle the ui stuff when it comes to password validation-->

<!--Password Field-->
<div class="password-field">
    <label>
        <input
            :type="showPassword ? 'text' : 'password'"
            :placeholder="placeholder"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            required
        />
        <button type="button" @click="togglePassword">
            {{ showPassword ? 'Hide' : 'Show' }}
        </button>
    </label>
</div>
</template> 

<script setup>
import {ref, watch, defineProps, defineEmits} from 'vue';


//Defining props
const props = defineProps({
    modelValue: String,
    placeholder: {
        type: String,
        default: 'Enter password'
    }
    
});

//Defining emit events
const emit = defineEmits(['update:modelValue']);


//Variables for internal state

const showPassword = ref(false);

//Toggle password function
const togglePassword = () => {
    showPassword.value = !showPassword.value;
}


//Sync model value
//watch(internalValue, (val) => emit ('update:modelValue', val));
//watch(() => props.modelValue, (val) => (internalValue.value = val));

</script>
<style scoped>

.password-field input {
    width: 100%;
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin-bottom: 1rem;
    font-size: 0.9rem;
}
.password-field button {
    position: absolute;
    right: 0.5rem;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    background: none;
    cursor: pointer;
    font-size: 0.8rem;
    color: pink; 
}
</style>