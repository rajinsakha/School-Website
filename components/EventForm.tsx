"use client"

import React from "react";

import { eventFormSchema } from "@/lib/formSchema";
import { useFormik } from "formik";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { IAddEvent, IEvent } from "@/interface/EventPage";
import { addEvent } from "@/lib/api/api";

const EventForm = () => {
  const initialValues:any = {
    title: "",
    description: "",
    image: "",
  };

  const eventFormik = useFormik<IAddEvent>({
    initialValues: initialValues,
    validationSchema: eventFormSchema,
    onSubmit: async (values, { resetForm }) => {
      // Handle form submission logic here
      console.log("Form submitted with values:", values);
      const res = await addEvent(values);
      if(res.status === 200){
        resetForm();
        console.log(res.data);
      }
     
    },
  });

  return (
    <form
      onSubmit={eventFormik.handleSubmit}
      className="flex-1 flex flex-col gap-4 max-w-sm w-full"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="title" className="text-black dark:text-white">
          Title
        </Label>
        <Input
          name="title"
          type="text"
          placeholder="Enter your name"
          onChange={eventFormik.handleChange}
          value={eventFormik.values.title}
          className=" dark:text-black dark:bg-slate-100 dark:placeholder:text-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="file" className="text-black dark:text-white">
          Image
        </Label>
        <Input
          name="file"
          type="file"
          placeholder="Enter your email"
          onChange={eventFormik.handleChange}
          value={eventFormik.values.image}
          className=" dark:text-black dark:bg-slate-100 dark:placeholder:text-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="description" className="text-black dark:text-white">
          Description
        </Label>
        <Textarea
          placeholder="Enter your description"
          name="description"
          id="description"
          onChange={eventFormik.handleChange}
          value={eventFormik.values.description}
          className="resize-none dark:text-black dark:bg-slate-100 dark:placeholder:text-black"
        />
      </div>

      <Button type="submit" className="w-fit mt-4 ">
        Add Event
      </Button>
    </form>
  );
};

export default EventForm;
