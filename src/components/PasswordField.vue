<template>
<!--Password Field is supposed to handle the ui stuff when it comes to password validation-->

<!--Password Field-->
<div class="password-field">
    <label class="field-wrapper">
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

.password-field {
    width: 100%;
    max-width: 200px;
}

.field-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.password-field input {
    flex: 1;
    padding: 0.8rem;
    border-radius: 8px;
    border: 1px solid #ddd;
    font-size: 0.9rem;
}

.password-field button {
    border: none;
    background: pink;
    padding: 0.6rem 0.8rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.8rem;
    margin: 0.8rem;
}
</style>