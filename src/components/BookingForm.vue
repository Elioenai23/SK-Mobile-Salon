
<template>
  <form @submit.prevent='handleSubmit'>
    <!--The name for the client-->
    <label>
        Name:
        <input v-model= 'clientName' type='text' required />
    </label>
    <!--The Date-->
    <label>
        Date:
        <input v-model='date' type='date' required  />
    </label>
    <!--Time-->
    <label>
        Time:
        <input v-model='time' type='time' required />
    </label>
    <!--Service-->
    <label>
        Service:
        <select v-model='selectedService' required>
            <option disabled value=''>-- Select a service --</option>
            <option v-for='s in services' :key='s.id' :value='s'>
                {{ s.serviceType }} -R{{ s.price }}
            </option>

        </select>
    </label>
    <!--Visit type-->
    <label>
        Visit Type:
        <select v-model='visitType' required >
            <option value=''>-- Select a visit type --</option>
            <option value='salon'>Salon Visit</option>
            <option value='home'>Home Visit</option>
        </select>
    </label>
    <!--Submit-->
    <button type='submit'>Book Appointment</button>
    </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { getDocs, collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';

//Declaring form fields
const clientName = ref('');
const date = ref('')
const time = ref('')
const selectedService = ref('')
const visitType = ref('')

//the services collection from my firebase db
const services = ref([]);

//pulling from the services collection
onMounted(async () =>{
    const querySnapshot = await getDocs(collection(db, 'services'));
    services.value = querySnapshot
        .docs
        .map(doc => ({ id: doc.id, ...doc.data()}))
});

//On submit function to submit booking
const handleSubmit = async() => {
    const dateTime = new Date(`${date.value}T${time.value}`);
    try {
        await addDoc(collection(db, 'bookings'),{
            clientName: clientName.value,
            serviceId: selectedService.value.serviceId,
            serviceType: selectedService.value.serviceType,
            price: selectedService.value.price,
            visitType: visitType.value,
            date: Timestamp.fromDate(dateTime)
        });
        alert('Booking successful')
    } catch (error) {
        console.error('There was an error adding the booking: ', error)
    }
    
}


</script>