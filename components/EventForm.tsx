"use client";

import React from "react";

import { eventFormSchema } from "@/lib/formSchema";
import { useFormik } from "formik";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { IAddEvent } from "@/interface/EventPage";
import { addEvent } from "@/lib/api/api";

const EventForm = () => {
  const initialValues = {
    title: "",
    body: "",
    image: null,
  };

  const resetForm = () => {
    eventFormik.setValues(initialValues);
    eventFormik.setTouched({});
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      eventFormik.setFieldValue("image", file);
    }
  };

  const eventFormik = useFormik<IAddEvent>({
    initialValues: initialValues,
    validationSchema: eventFormSchema,
    onSubmit: async (values) => {
      // Handle form submission logic here
      console.log("Form Submitted!");
      try {
        console.log("Form submitted with values:", values);
        const res = await addEvent(values);
        if (res.status === 201) {
          resetForm();
          console.log(res.data);
        }
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <form
      onSubmit={eventFormik.handleSubmit}
      className="flex-1 flex flex-col gap-4 max-w-sm w-full"
      encType="multipart/form-data"
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
        />
        {eventFormik.errors.title && eventFormik.touched.title ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {eventFormik.errors.title}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="file" className="text-black dark:text-white">
          Image
        </Label>
        <Input name="file" type="file" accept="image/*" onChange={handleFileChange} />
        {eventFormik.errors.image && eventFormik.touched.image ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {eventFormik.errors.image}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="body" className="text-black dark:text-white">
          Description
        </Label>
        <Textarea
          placeholder="Enter your description"
          name="body"
          id="body"
          onChange={eventFormik.handleChange}
          value={eventFormik.values.body}
          className="resize-none "
        />
        {eventFormik.errors.body && eventFormik.touched.body ? (
          <p className="text-red-600 mt-1 text-[13.4px]">
            {eventFormik.errors.body}
          </p>
        ) : null}
      </div>

      <Button type="submit" className="w-fit mt-4 ">
        Add Event
      </Button>
    </form>
  );
};

export default EventForm;
