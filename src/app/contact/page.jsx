"use client";

import AbsoluteBall from "../components/AbsoluteComponents/AbsoluteBall";
import Banner from "./components/Banner";
import ContactForm from "./components/ContactFrom";
import ContactPage from "./components/ContactPage";
import LegalNotice from "./components/LegalNotice";

function ContactUs() {
  return (
    <div className="relative">
      <AbsoluteBall />
      <Banner />
      <ContactForm />
      <ContactPage />
      <LegalNotice />
    </div>
  );
}

export default ContactUs;
