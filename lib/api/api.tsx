import { IAddEvent } from "@/interface/EventPage";
import axios from "axios";

export const getAllEvents = async () => {
  let headers = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const events = await axios.get(
    "https://sjss-backend-1.onrender.com/api/events/detail/",
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
    `https://sjss-backend-1.onrender.com/api/events/${id}/`,
    headers
  );
  return event;
};


export const addEvent = async (formData:IAddEvent) =>{
   const event = await axios.post("https://sjss-backend-1.onrender.com/api/events/create/",formData)
   return event;
}
