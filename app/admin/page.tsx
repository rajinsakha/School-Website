import EventForm from "@/components/EventForm";
import React from "react";

const AdminPage = () => {
  return (
    <>
      <h1 className="text-center text-4xl py-8 font-bold italic">&quot;Welcome To Admin Dashboard&quot;</h1>
      <div className="padding-x">
        <EventForm />
      </div>
    </>
  );
};

export default AdminPage;
