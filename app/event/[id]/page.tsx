"use client";
import EventSideBar from "@/components/EventSideBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loader from "@/components/ui/Loader";
import { IEvent } from "@/interface/EventPage";
import { getSingleEvent } from "@/lib/api/api";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, {useCallback, useEffect, useState } from "react";

const Page = () => {   
  
  const [event, setEvent] = useState<IEvent>();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  console.log(params);

  
  const getData = useCallback(async () => {
    try {
      let res = await getSingleEvent(Number(params.id));
      if (res.status === 200) {
        console.log(res.data);
        setEvent(res.data);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  }, [params]);

  useEffect(() => {
    getData();
  }, [getData]);


  return (
    <>
    <Navbar />
    
    <section>
      <div className="padding bg-blue-700 flex items-center justify-center ">
        <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-5xl tracking-wide uppercase ">
       {isLoading?"Loading...": event?.title}
        </h1>
      </div>

      {isLoading ? <Loader height="50" />  : 
      <div className="px-8 sm:px-16 md:px-32 lg:px-40 padding-t padding-b flex flex-col lg:flex-row gap-24 bg-slate-50">
        <div className="flex flex-col gap-4 w-full md:w-[70vw] lg:w-[50vw] items-start">
 
          <h3 className="text-left text-xl sm:text-2xl lg:text-3xl text-blue-700 uppercase font-bold">{isLoading?"Loading...": event?.title}</h3>
          <Image
            src={event?.image}
            alt="Single Event"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[50vh] lg:h-[500px] object-contain object-left"
          />
          <div>
           {event?.body.split("\n").map((line,index)=>(
            <p key={index} className="mb-6 text-black text-justify">{line}</p>
           ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full lg:w-[30vw]">
     
        <EventSideBar/>
 
            
        </div>
      </div>
      }
    </section>
    <Footer />
    </>
  );
};

export default Page;
