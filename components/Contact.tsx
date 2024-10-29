import React from 'react'
import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <div>
       <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#642ca9]">
            Get in Touch
          </h2>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Contact
