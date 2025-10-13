<template>
    <div>

        <!--Toggles for passwords-->
        <label>
            <input :type="showPassword ? 'text' : 'password'" 
            v-model="password"
            placeholder="Enter password"
            />
        </label>
        <button type="button" @click="togglePassword">
            {{ showPassword ? 'Hide' : 'Show' }} Password
        </button>
        
        <!--Password Confirmation-->
        <label>
            <input 
                :type="showConfirm ? 'text' : 'password'"
                v-model="confirmPassword"
                placeholder="Confirm Password"
             />
             <button type="button" @click="toggleConfirm">
                {{ showConfirm ? 'Hide': 'Show'}}
            </button>
        </label>


        <!--Password Errors-->
        <p v-if="error" style="color:red">{{ error }}</p>
        <p v-if="matchError" style="color:red;">{{ matchError }}</p>
        <p v-if="passwordsMatch && !error" style="color:green;">Passwords match</p>
    </div>
    
</template>


<script setup>
import { ref, watch, defineEmits } from 'vue';


//This entire block of script is to validate client passwords
//Is a component so that I can use it again in another page
const props = defineProps({
    modelValue: String
});

const emit = defineEmits(['update:modelValue', 'valid']);

//Password variables
const password = ref(props.modelValue || '');
const confirmPassword = ref('')

//Error variables
const error = ref('');
const matchError = ref('');
const passwordsMatch = ref('');

//creating a variable to add a show/hide password toggle
const showPassword = ref(false);
const showConfirm = ref(false);

//Show password function
const togglePassword = () =>{
    showPassword.value = !showPassword.value
};

const toggleConfirm =() => {
    showConfirm.value = !showConfirm.value
};

//The regex: Passwords must be between 8-10 characters, should include at least one of these symbols [!, @, $, %]
const validatePassword = (pw) => {
    const regex = /^(?=.*[!@$%])[A-Za-z0-9!@$%]{8,12}$/;
    return regex.test(pw);
};

//Watching for changes in password
watch(password, (newVal) => {
    emit('update:modelValue', newVal);
    if (!validatePassword(newVal)) 
    {
        error.value = 'Password must be 8-12 characters and include at least one of !@$%';
        emit('valid', false);
    } else {
        error.value = '';
        emit('valid', true);
    }
});

//Watching for changes in confirm password
watch(confirmPassword, () => {
    checkPasswordsMatch();
});

//Match Check
const checkPasswordsMatch = () => {
    if (confirmPassword.value === ''){
        matchError.value = '';
        passwordsMatch.value = false;
        emit('valid', false);
        return; 
    }

    if (password.value === confirmPassword.value && !error.value){
        matchError.value = '';
        passwordsMatch.value = true;
        emit('valid', true);
    } else{
        matchError.value = 'Passwords do not match';
        passwordsMatch.value = false;
        emit('valid', false);
    }
}

</script>