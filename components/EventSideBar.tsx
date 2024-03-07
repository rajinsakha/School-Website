"use client";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import EventCard from "./ui/eventCard";
import { IEvent } from "@/interface/EventPage";
import { getAllEvents } from "@/lib/api/api";
import Loader from "./ui/Loader";

const EventSideBar = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(async () => {
    try {
      let res = await getAllEvents();
      if (res.status === 200) {
        setEvents(res.data);
        setIsLoading(false); 
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false); 
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-slate-200 text-blue-700 px-4 py-2">
        <h1 className="text-xl font-bold">RECENT EVENTS</h1>
      </div>

      {isLoading ? ( // Display loading indicator if still loading
         <Loader height="20"/>
        ) : (
          // Once data is fetched, display EventCards
          events?.slice(0, 5).map((event: IEvent) => (
            <EventCard key={event?.id} event={event} />
          ))
        )}
    </div>
  );
};

export default EventSideBar;
