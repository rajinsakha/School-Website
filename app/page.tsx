"use client"
import About from "@/components/About";
import EventSection from "@/components/EventSection";
import FeatureSection from "@/components/FeatureSection";
import GallerySection from "@/components/GallerySection";
import Hero from "@/components/Hero";
import { IEvent } from "@/interface/EventPage";
import { getAllEvents } from "@/lib/api/api";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function Home() {

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
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <FeatureSection />
      <GallerySection />
      <EventSection events={events} />

    </main>
    </>
    
  );
}
