
import EventForm from "@/components/EventForm";
import React from "react";

const AdminPage = () => {
  return (
    <div className="dark:bg-slate-800">
      <h1 className="text-center text-4xl py-8 font-bold italic">&quot;Welcome To Admin Dashboard&quot;</h1>
      <div className="padding-x padding-b">
        <EventForm />
      </div>
    </div>
  );
};

export default AdminPage;
