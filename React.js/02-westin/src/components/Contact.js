import React from 'react';
import ContactForm from "./ContactForm";
import ContactItem from "./ContactItem";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  return (
    <section id="contact" className="contact-02 py-6 bg-grey">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SectionTitle baslik="contact" aciklama="Get in touch" />
          </div>
        </div>
        <div className="row contact-info mt-4">
          <div className="col-md-4">
            <ContactItem
              resim="assets/img/message.svg"
              baslik="Mail Me"
              aciklama="info@westin.com"
            />
          </div>
          <div className="col-md-4">
            <ContactItem
              resim="assets/img/phone-call.svg"
              baslik="Call Us On"
              aciklama="+123 456 7890"
            />
          </div>
          <div className="col-md-4">
            <ContactItem
              resim="assets/img/location.svg"
              baslik="Visit office"
              aciklama="24 Street, New York, United State"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
