import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.html',
  styleUrl: './faq.css'
})
export class FAQ {
faqList=[
 { 
    question: "How do I create a new account on the website?",
    answer: "Click on the 'Sign Up' button, fill in the required information like name, email, and password, then verify your account via the confirmation email.",
    show: true
  },
  {
    question: "Is registration free?",
    answer: "Yes, registration is free for all users, both patients and doctors.",
    show: false
  },
  {
    question: "How can I book an appointment with a doctor?",
    answer: "Log in, choose the required specialty, then click 'Book Appointment' and select a suitable date and time.",
    show:false
  },
  {
    question: "Can I cancel or reschedule an appointment after booking?",
    answer: "Yes, you can cancel or reschedule any appointment from the 'My Account' page at least 24 hours before the scheduled time.",
    show:false
  },
  {
    question: "Is the website secure for storing personal and medical data?",
    answer: "The website uses strong data encryption to ensure the safety of your personal and medical information.",
    show:false
  },
  {
    question: "Can I consult a doctor online without visiting the clinic?",
    answer: "Yes, some doctors provide remote consultation via chat or video.",
    show:false
  },
  {
    question: "How can I change my password?",
    answer: "Go to 'My Account' > 'Account Settings' > 'Change Password' and follow the instructions.",
    show:false
  },
  {
    question: "Does the website support online payment for appointments?",
    answer: "Yes, you can pay via credit cards or the available online payment services.",
    show:false
  },
  {
    question: "Can I add multiple people under one account (e.g., family members)?",
    answer: "Currently, accounts are personal, but separate accounts can be created for each individual to ensure medical privacy.",
    show:false
  },
  {
    question: "How can I search for a specialized doctor?",
    answer: "Use the search bar and select the specialty and location, or filter results by patient ratings and years of experience.",
    show:false
  },
  {
    question: "Is there a mobile app for the website?",
    answer: "Yes, the website is accessible via browser, and mobile apps for Android and iOS will be launched soon.",
    show:false
  },
  {
    question: "What should I do if I encounter a technical issue or need support?",
    answer: "Contact our support team via the 'Contact Us' page or send an email to the dedicated support address.",
    show:false
  }
]
}
