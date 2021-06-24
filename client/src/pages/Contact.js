import React from "react";
import Nav from "../components/Nav";
import ContactForm from "../components/ContactForm";
import ContactContent from "../components/ContactContent";

function Contact() {
  return (
    <main className="contact">
      <Nav></Nav>
      <main className="contact-section">
        <ContactForm></ContactForm>
        <ContactContent></ContactContent>
      </main>
    </main>
  );
}
export default Contact;
