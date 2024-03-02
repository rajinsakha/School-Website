import React from 'react'
import Image from "next/image";
import Title from "./ui/title";

import { Button } from "./ui/button";
import Link from "next/link";
import BlogCard from './ui/blogCard';
import { IEvent } from '@/interface/EventPage';

const EventSection = ({events}:{events:IEvent[]}) => {

  return (
    <div className="padding flex flex-col gap-8 items-center">
    <Title title="Events" />
    <h1 className="text-2xl font-bold">Our Events</h1>
    <Button
      asChild
      className="bg-blue-600 dark:bg-blue-600  hover:bg-blue-800 dark:text-white dark:hover:bg-blue-800 w-40"
    >
      <Link href="/events">View all Events</Link>
    </Button>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
      {events?.slice(0,5).map((event:IEvent , index: number) => (
        <BlogCard event={event} key={index} />
      ))}
    </div>
  </div>
  )
}

export default EventSection