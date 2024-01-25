"use client";

import ContactForm from "@/components/ContactForm";
import Map from "@/components/ui/map";
import React from "react";

const ContactPage = () => {
  return (
    <section className="padding-x sm:py-16 py-8 flex flex-col bg-[#144466] gap-16">
      <div className="flex flex-col items-center gap-4 text-white">
        <div className="flex items-center gap-4 mb-8">
        <span className="h-12 w-2 bg-orange-500"></span>
        <h1 className="text-5xl font-bold">Contact Us</h1>
        </div>
      
        <p className="max-w-2xl text-center">
          You share our vision and want to get better acquainted with everything
          Sopot Hill has to offer?</p>
      </div>

      <div className="mt-6 flex flex-col lg:flex-row max-lg:gap-16">
        <div className="flex-1 lg:ml-8">
          <ContactForm />
        </div>
        <div className="flex-1">
          <Map />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
