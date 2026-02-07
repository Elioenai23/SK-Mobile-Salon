
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
   <label v-if="availableSlots.length">
  Time:
  <select v-model="time" required>
    <option disabled value="">-- Select a time --</option>

    <option
      v-for="slot in availableSlots"
      :key="slot.start.getTime()"
      :value="slot.start.toTimeString().slice(0, 5)"
      :disabled="!slot.available"
    >
      {{ slot.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
      <span v-if="!slot.available"> (Booked)</span>
    </option>
  </select>
</label>

<p v-else-if="date">
  No available slots for this day.
</p>
    <!--New Category dropdown-->
<label>
        Category: 
        <select v-model="selectedCategory" required>
            <option disabled value="">-- Select Category --</option>
            <option v-for="(servicesList, category) in categories" :key="category" :value="category">
                {{ category }}
            </option>
        </select>
</label>
    <!--Service-->
    <label v-if="selectedCategory">
        Service: 
        <select v-model = 'selectedService' required>
            <option disabled value=" ">-- Select Service</option>
            <option
                v-for="s in filteredServices"
                :key = "s.id"
                :value = "s"
            >
                {{ s.serviceType }} - R {{ s.price }}
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
    

    <!--Appointment duration-->
    <label>
        Appointment Duration:
        <input v-model.number="durationHours" type="number" min="0" placeholder="Hours" /> :
        <input v-model.number="durationMinutes" type="number" min="0" max="59" placeholder="Minutes" />
    </label>


    <!--Displaying the time the appointment should end-->
    <p v-if="formattedEndTime">Your appointment will end at: {{ formattedEndTime }}</p>
    <!--Submit-->
    <button class="submit-btn" type='submit' 
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

//Variables for new booking function that will display open appointments 
const OPEN_HOUR = 8;
const CLOSE_HOUR = 18;
const SLOT_MINUTES = 30;

//Declaring form fields
const clientName = ref('');
const date = ref('');
const time = ref('');
const selectedService = ref(null);

const availableSlots = ref([]);
const dayBookings = ref([]);

const effectiveDuration = computed(() =>{
    return selectedService.value?.duration ?? 30;
})

const overlapsWithService = (slotStart, booking) => {
    const slotEnd = new Date (
        slotStart.getTime() + effectiveDuration.value * 60000
    )
    
    const bookingStart = booking.date.toDate();
    const bookingEnd = new Date(
        bookingStart.getTime() + (booking.duration ?? 30) * 60000
    )

    return slotStart < bookingEnd && bookingStart < slotEnd
}

//Watch for date changes to load bookings for that day
const generateAvailableSlots = () => {
    availableSlots.value = []

    // guard - empty string
    if (!date.value) return
    
    //Load bookings for the selected date
    const baseDate = new Date (`${date.value}T00:00:00`)
    if (isNaN(baseDate)) return

    let current = new Date(baseDate)
    current.setHours(OPEN_HOUR, 0 , 0, 0)

    const endOfDay = new Date(baseDate)
    endOfDay.setHours(CLOSE_HOUR, 0 , 0 , 0)

    const now = new Date()

    while (current < endOfDay) {
        const slotStart = new Date(current)
        const slotEnd = new Date(
            slotStart.getTime() + effectiveDuration.value * 60000
        )

    if (slotEnd > endOfDay) break

    //Supposed to prevent past-time slots for the day
    if (
        slotStart < now && baseDate.toLocaleDateString() == now.toDateString()
    ) {
        current = new Date(current.getTime() + SLOT_MINUTES * 60000)
        continue
    }

    //Check if the slot overlaps with any existing booking
    const isBooked = dayBookings.value.some(booking => overlapsWithService(slotStart, booking))

      availableSlots.value.push({
        start: slotStart,
        end: slotEnd,
        available: !isBooked
    })

    current = new Date(current.getTime() + SLOT_MINUTES * 60000)
    }

   
}


//Function to load the bookings for the day
const loadBookingsForDay = async () => {
    if (!date.value) return

    const snapshot = await getDocs(collection(db, 'bookings'))

    const selectedDay = new Date(`${date.value}T00:00:00`)

    dayBookings.value = snapshot.docs.map(d => d.date())
    .filter(b => {
        if (!b.date?.toDate) return false
        const bookingDate = b.date.toDate()
        return bookingDate.toDateString() === selectedDay.toDateString()
    })
}

//Watch for the loadBookingsForDay function
watch(date, async () => {
    await loadBookingsForDay()
    generateAvailableSlots()
})

//Watchers for the slot function
watch(date, generateAvailableSlots)
watch(selectedService, generateAvailableSlots)
watch(dayBookings, generateAvailableSlots)

//Declaring variables for authentication
const auth = getAuth();
const user = ref(null);

onAuthStateChanged(auth, (u)=>{
    user.value = u;
});





//New additions because the database stuff got redesigned/remade
const categories = computed(()=>{
    const map = {}

    services.value.forEach(service => {
        if (!map[service.category]){
            map[service.category] = []
        }
        map[service.category].push(service)

    })

    return map
})
const selectedCategory = ref('');

const visitType = ref('');
const durationHours = ref(0);
const durationMinutes = ref(30); //Will default to 30 minutes


//the services collection from my firebase db
const services = ref([]);
//pulling from the services collection


//Filtering services based on selected category
const filteredServices = computed (() =>{
    return services.value.filter(s => s.category === selectedCategory.value)
});
onMounted(async () =>{
 //Fetching services from Firestore
    try{
        const querySnapshot = await getDocs(collection(db, 'services'))

        services.value = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }))
        console.log('Loaded services:', services.value)
    }
     catch(error){
        console.error('Error loading services: ', error)
    }
      
});

watch(selectedService, (service) => {
    //updating duration based on selected service
    if (!service || !service.duration) return;
        durationHours.value = Math.floor(service.duration / 60);
        durationMinutes.value = service.duration % 60;
    
});

    //This is the logic to render the available booking slots
    const selectSlot = (slot) =>{
        if (!slot.available) return
        time.value = slot.start.toTimeString().slice(0, 5)
    }

    const formatTime = (date) => {
        return date.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        })
    }
    



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

    //Calculating booking start and end times
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

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
*{
    font-family: 'Poppins', sans-serif;
}

    .submit-btn{
        margin: 1em;
        padding: 0.5em 1em;
        background-color: #4CAF50;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
</style>