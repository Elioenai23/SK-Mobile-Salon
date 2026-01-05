
import { createRouter, createWebHistory } from "vue-router";
import { getUserState } from "../firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//Setting up the Router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component:() => import("../views/Home.vue")},
        {path: '/register', component:() => import("../views/Register.vue"), meta:{guestOnly: true}},
        {path: '/sign-in', component:() => import("../views/SignIn.vue"), meta: {guestOnly: true}},
        {path: '/about', component: () => import("../views/About.vue")},
        {path: '/services', component: () => import("../views/Services.vue"),
            //meta: {
            //  requiresAuth: true,
            //}

            },
        {path: '/portfolio', component: () => import('../views/Portfolio.vue')},
        {path: '/resetpassword', component: () => import('../views/ResetPassword.vue')},
        
    ]
});
     //redirecting the signed in user back to the homepage
        const getCurrentUser = () => {
            return new Promise((resolve, reject) => {
                 const removeListener = onAuthStateChanged(
                 getAuth(),
                 (user) => {
                    removeListener();
                    resolve(user);
                    },
                    reject
                 );
                });
            };
    

 
    router.beforeEach(async(to) => {
        const user = await getCurrentUser();

        if (to.meta.guestOnly && user){
            return '/'
        }
        }
    );


export default router;