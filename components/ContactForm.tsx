import React from "react";
import { IContact } from "@/interface/ContactPage";
import { contactFormSchema } from "@/lib/formSchema";
import { useFormik } from "formik";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const ContactForm = () => {
  const initialValues = {
    fullname: "",
    email: "",
    message: "",
  };

  const contactFormik = useFormik<IContact>({
    initialValues: initialValues,
    validationSchema: contactFormSchema,
    onSubmit: (values, { resetForm }) => {
      // Handle form submission logic here
      console.log("Form submitted with values:", values);

      resetForm();
    },
  });

  return (
    <form
      onSubmit={contactFormik.handleSubmit}
      className="flex-1 flex flex-col gap-4 max-w-sm w-full"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="fullname" className="text-white">Full Name</Label>
        <Input
          name="fullname"
          type="text"
          placeholder="Enter your name"
          onChange={contactFormik.handleChange}
          value={contactFormik.values.fullname}
          className="text-white dark:text-black dark:bg-slate-100 dark:placeholder:text-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="email"  className="text-white">Email</Label>
        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={contactFormik.handleChange}
          value={contactFormik.values.email}
          className="text-white dark:text-black dark:bg-slate-100 dark:placeholder:text-black"
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message"  className="text-white">Message</Label>
        <Textarea
          placeholder="Enter your message"
          name="message"
          id="message"
          onChange={contactFormik.handleChange}
          value={contactFormik.values.message}
        className="resize-none dark:text-black dark:bg-slate-100 dark:placeholder:text-black"
        />
      </div>

      <Button type="submit" className="w-fit mt-4 ">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
