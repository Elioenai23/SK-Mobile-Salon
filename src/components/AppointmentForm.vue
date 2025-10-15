
<template>
    <div>
        <div v-if="!user">
            <p>Please sign in to make an appointment.</p>
            <router-link to="/sign-in">Go to Sign In</router-link>
        </div>
    </div>
    <div>
  <form @submit.prevent='handleSubmit'>
    <!--The name for the client-->
    <label>
        Name & Surname:
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

    <!--Appointment duration-->
    <label>
        Appointment Duration:
        <input v-model.number="durationHours" type="number" min="0" placeholder="Hours" /> :
        <input v-model.number="durationMinutes" type="number" min="0" max="59" placeholder="Minutes" />
    </label>

    <!--Displaying the time the appointment should end-->
    <p v-if="formattedEndTime">Your appointment will end at: {{ formattedEndTime }}</p>

    <!--Service-->
    <label>
        Service:
        <select v-model='selectedService' required>
            <option disabled value=''>-- Select a service --</option>
            <option v-for='s in services' :key='s.id' :value='s'>
                {{ s.serviceType }} - R{{ s.price }}
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
    <button type='submit' 
    :disabled="!isFormValid">
    Book Appointment
    </button>
    </form>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { getDocs, collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase';
import {getAuth, onAuthStateChanged} from 'firebase/auth';


//Declaring variables for authentication
const auth = getAuth();
const user = ref(null);

onAuthStateChanged(auth, (u)=>{
    user.value = u;
})


//Declaring form fields
const clientName = ref('');
const date = ref('');
const time = ref('');
const selectedService = ref(null);
const visitType = ref('');
const durationHours = ref(0);
const durationMinutes = ref(30) //Will default to 30 minutes


//the services collection from my firebase db
const services = ref([]);
//pulling from the services collection
onMounted(async () =>{
   try{const querySnapshot = await getDocs(collection(db, 'services'));
    services.value = querySnapshot
        .docs
        .map(doc => ({ id: doc.id, ...doc.data() }))
        console.log('Loaded services', services.value)
    } catch (error){
        console.error('Error loading services')
    }
});

watch(selectedService, (service) => {
    if (service && service.duration) {
        durationHours.value = Math.floor(service.duration / 60);
        durationMinutes.value = service.duration % 60;
    }
})


//computing the end time
const formattedEndTime = computed(() => {
    if (!date.value || !time.value) return '';
    const start = new Date(`${date.value}T${time.value}`);
    const totalMinutes = durationHours.value * 60 + durationMinutes.value;
    const end = new Date(start.getTime() + totalMinutes * 60000);
    return end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
});

//For checking the form validity(users must be signed in)
const isFormValid = computed(() =>{
    return(
        clientName.value &&
        date.value &&
        time.value &&
        selectedService.value &&
        visitType.value &&
        user.value


    );
})


//Help to check for overlapping bookings
const isOverlapping = (start1, end1, start2, end2) => {
    return start1 < end2 && start2 < end1;
}

//On submit function to submit booking
const handleSubmit = async() => {
    const startTime = new Date(`${date.value}T${time.value}`);
    const totalDuration = (durationHours.value * 60) + durationMinutes.value;
    const endTime = new Date(startTime.getTime() + totalDuration * 60000);

//To prevent double bookings
  const allBookings = await getDocs(collection(db, 'bookings'));

  const overlap = allBookings.docs.find(doc => {
     const b = doc.data();

    //Safeguard because I have been getting errors about the overlap function
    if(!b.date || typeof b.date.toDate !== 'function'){
        console.warn('Skipping booking with invalid date: ', b);
        return false;
    }

   
    const bStart = b.date.toDate();
    const bEnd = new Date(bStart.getTime() + (b.duration || 60) * 60000);
    return isOverlapping(startTime, endTime, bStart, bEnd);
  })

    if (overlap) {
        alert('Sorry, this time slot overlaps with an existing booking!');
        return;
    }

    //Adding a new booking
    try {
        await addDoc(collection(db, 'bookings'),{
            clientName: clientName.value,
            serviceId: selectedService.value.id,
            serviceType: selectedService.value.serviceType,
            price: selectedService.value.price,
            visitType: visitType.value,
            date: Timestamp.fromDate(startTime),
            duration: totalDuration,
            userId: user.value.uid,
            userEmail: user.value.email,
        });
        alert('Booking successful');

        //resetting the form
        clientName.value = '';
        date.value = '';
        time.value = '';
        selectedService.value = '';
        visitType.value = '';
        durationHours.value = 0;
        durationMinutes.value = 30;
    } 
    catch (error) {
        console.error('There was an error adding the booking: ', error)
    }


    
};

</script>