<template>
   <div class="password-validation">
    <p v-if="error" style="color:red;">{{ error }}</p>
    <p v-if="confirmPassword && matchError" style="color:red;">{{ matchError }}</p>
    <p v-if="passwordsMatch && !error" style="color:green;">Passwords match</p>
   </div>
</template>


<script setup>
import { ref, watch, defineEmits } from 'vue';



//This entire block of script is to validate client passwords
//It's a component so that I can use it again in another page
const props = defineProps({
    password: String,
    confirmPassword: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['valid']);



//Error variables
const error = ref('');
const matchError = ref('');
const passwordsMatch = ref(false);

//The regex: Passwords must be between 8-12 characters, should include at least one of these symbols [!, @, $, %]
const validatePassword = (pw) => {
    const regex = /^(?=.*[!@$%])[A-Za-z0-9!@$%]{8,12}$/;
    return regex.test(pw);
};

//Watching for changes in password
watch(() => props.password, (newVal) =>{
    if (!validatePassword(newVal)) {
        error.value = 'Password must be 8-12 characters and include at least one of these symbols: !@$%';
        emit('valid', false);
    }
     else {
        error.value = '';
        emit('valid', true);
     }
     checkPasswordsMatch();
})

//Watching for changes in confirm password
watch( () => props.confirmPassword,
       () => checkPasswordsMatch()
);


//Match Check
const checkPasswordsMatch = () => {
    if (!props.confirmPassword) {
        matchError.value = '';
        passwordsMatch.value = false;
        emit('valid', false);
        return;
    }
    if(props.password === props.confirmPassword && !error.value){
        matchError.value = '';
        passwordsMatch.value = true;
        emit('valid', true);
    } else{
        matchError.value = 'Passwords do not match';
        passwordsMatch.value = false;
        emit('valid', false)
    }
}

</script>