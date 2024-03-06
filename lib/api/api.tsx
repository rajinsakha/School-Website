import { IAddEvent } from "@/interface/EventPage";
import axios from "axios";

export const getAllEvents = async () => {
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const events = await axios.get(
    "https://vercel-test-xi-one.vercel.app/api/events/detail/",
    headers
  );
  console.log(events);
  return events;
};

export const getSingleEvent = async (id: number) => {
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const event = await axios.get(
    `https://vercel-test-xi-one.vercel.app/api/events/${id}/`,
    headers
  );
  return event;
};


export const addEvent = async (formData:IAddEvent) =>{
  let headers = { headers: {
    "Content-Type": "multipart/form-data",
  },
};
   const event = await axios.post("https://vercel-test-xi-one.vercel.app/api/events/create/",formData,headers)
   return event;
}
