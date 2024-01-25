import * as Yup from "yup";

export const contactFormSchema = Yup.object({
   name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Please enter email"),
   message: Yup.string().max(150, "Only message below 150 characters is allowed").required("Please enter message.") 
});