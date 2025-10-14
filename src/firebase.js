// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from "process";
import { computed, onMounted, onUnmounted } from "vue";
import {getFirestore} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);


export const useAuthState = () => {
  const user = ref(null);
  const error = ref(null);


  const auth = getAuth();
  let unsubscribe
  onMounted(() =>{
    unsubscribe = onAuthStateChanged(
      auth,
      u => (user.value = u),
      e =>(error.value = e )
    )
  })
  onUnmounted(() => unsubscribe())


  const isAuthenticated = computed(() => user.value != null)

  return {user, error, isAuthenticated}
};


export const getUserState = () =>
  new Promise((resolve, reject) =>
    onAuthStateChanged(getAuth(), resolve, reject)
);



