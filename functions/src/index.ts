//import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { onSchedule } from 'firebase-functions/scheduler';
import sgMail from '@sendgrid/mail';

admin.initializeApp();

export const dailyAppointmentSummary = onSchedule("07 * * *", async()=>{

    const now = new Date();

    const startOfDay = new Date(now);
    startOfDay.setHours(0, 0, 0, 0);

    const endOfDay = new Date(now);
    endOfDay.setHours(19, 59, 59, 999);

    const snapshot = await admin.firestore()
    .collection('bookings')
    .where("date", ">=", startOfDay)
    .where("date", "<=", endOfDay)
    .get();

    if (snapshot.empty){
        console.log("No appointments for today.");
        return;
    }

    snapshot.forEach(doc => {
        const booking = doc.data();
        console.log("Booking: ", booking.clientName)
    })
})