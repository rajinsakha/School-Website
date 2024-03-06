"use client";
import BlogCard from "@/components/ui/blogCard";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getAllEvents } from "@/lib/api/api";
import { IEvent } from "@/interface/EventPage";
import EventSkeleton from "@/components/ui/eventSkeleton";

const Page = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  const getData = useCallback(async () => {
    try {
      let res = await getAllEvents();
      if (res.status === 200) {
        setEvents(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <section className="flex flex-col">
      <div className="padding bg-blue-700 flex items-center justify-center">
        <h1 className="text-white font-bold text-5xl tracking-wide">
          Our Events
        </h1>
      </div>

      <div className="padding grid  grid-cols-1  min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 bg-slate-300 w-full">
        {events.length === 0
          ? [...Array(4)].map((_, index) => <EventSkeleton key={index} />)
          : events.map((event, index) => (
              <BlogCard event={event} key={index} />
            ))}
      </div>
    </section>
  );
};

export default Page;
