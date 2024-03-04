

import Title from "./ui/title";

import { Button } from "./ui/button";
import Link from "next/link";
import BlogCard from './ui/blogCard';
import { IEvent } from '@/interface/EventPage';
import EventSkeleton from "./ui/eventSkeleton";


const EventSection = ({events}:{events:IEvent[]}) => {



  return (
    <div className="padding flex flex-col gap-8 items-center bg-slate-300 dark:bg-black w-full">
    <Title title="Events" />
    <h1 className="text-2xl font-bold">Our Events</h1>
    <Button
      asChild
      className="bg-blue-600 dark:bg-blue-600  hover:bg-blue-800 dark:text-white dark:hover:bg-blue-800 w-40"
    >
      <Link href="/event">View all Events</Link>
    </Button>
    <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
    {events.length === 0 ? (
    [...Array(4)].map((_, index) => <EventSkeleton  key={index} />)
  ) : (
    events.slice(0, 4).map((event, index) => <BlogCard event={event} key={index} />)
  )}
    </div>
  </div>
  )
}

export default EventSection