"use client";
import EventSideBar from "@/components/EventSideBar";
import { IEvent } from "@/interface/EventPage";
import { getSingleEvent } from "@/lib/api/api";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

const Page = () => {   
  
  const [event, setEvent] = useState<IEvent>();

  const params = useParams();

  console.log(params);

  
  const getData = useCallback(async () => {
    try {
      let res = await getSingleEvent(Number(params.id));
      if (res.status === 200) {
        console.log(res.data);
        setEvent(res.data);
      }
    } catch (e) {
      console.log(e);
    }
  }, [params]);

  useEffect(() => {
    getData();
  }, [getData]);
  

  return (
    <section>
      <div className="padding bg-sky-800 flex items-center justify-center">
        <h1 className="text-white font-bold text-5xl tracking-wide">
       {event?.title}
        </h1>
      </div>

      <div className="px-8 sm:px-16 md:px-32 lg:px-40 padding-y flex gap-24 bg-sky-700">
        <div className="flex flex-col gap-4 w-full md:w-[70vw] lg:w-[50vw]">
          <h3 className="text-left text-2xl">{event?.title}</h3>
          <Image
            src={ event?.image_url || "/Hero.jpeg"}
            alt="Single Event"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[50vh] object-cover object-center"
          />
          <p>
           {event?.body}
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full sm:w-[30vw]">
            <EventSideBar />
        </div>
      </div>
    </section>
  );
};

export default Page;
