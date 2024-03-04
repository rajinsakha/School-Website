import * as Yup from "yup";


export const contactFormSchema = Yup.object({
   name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Please enter a valid email.")
    .required("Please enter email"),
   message: Yup.string().max(150, "Only message below 150 characters is allowed").required("Please enter message.") 
});

export const eventFormSchema = Yup.object({
   title: Yup.string().required("Please enter the title"),
   body: Yup.string().required("Please enter description"),
   image: Yup.mixed().required('required')
   .test('fileFormat', 'Only Image files are allowed', (value:any) => {
     if (value) {
       const supportedFormats = ['jpg','webp','png','jpeg'];
       return supportedFormats.includes(value.name.split('.').pop());
     }
     return true;
   })
   .test('fileSize', 'File size must be less than 3MB', (value:any) => {
     if (value) {
       return value.size <= 3145728;
     }
     return true;
   }),


})