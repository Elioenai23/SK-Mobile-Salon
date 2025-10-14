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