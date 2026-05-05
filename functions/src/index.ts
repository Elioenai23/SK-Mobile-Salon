import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import sgMail from "@sendgrid/mail";

admin.initializeApp();

sgMail.setApiKey("TEMPORARY_API_KEY");

export const testDailyAppointments = onRequest(async (req, res) => {
  try {
    const snapshot = await admin.firestore()
      .collection("bookings")
      .get();

    let message = "Appointments:\n\n";

    snapshot.forEach(doc => {
      const b = doc.data();

      const time = b.date?.toDate?.().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }) || "Unknown";

      message += `${time} - ${b.clientName} - ${b.serviceType}\n`;
    });

    await sgMail.send({
      to: ["festusgart@email.com"],
      from: "festusgarth@email.com",
      subject: "Test Appointments",
      text: message,
    });

    res.send("Email sent!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error sending email");
  }
});