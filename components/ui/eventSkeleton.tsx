import React from 'react'

import { IEvent } from "@/interface/EventPage";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from './skeleton';




const EventSkeleton = () => {
  return (
    <div className="bg-white shadow-md flex flex-col gap-4 p-4 rounded-md w-60 md:w-60 lg:w-72">
        <div>
        <Skeleton className="skeleton w-full h-48 md:h-60 mb-4 rounded-none"></Skeleton>
        </div>
    
    <div className='space-y-2'>
    <Skeleton className="skeleton h-4 w-2/3 mb-2 rounded-none"></Skeleton>
      <Skeleton className="skeleton h-4 w-full mb-2 rounded-none"></Skeleton>
      <Skeleton className="skeleton h-16 w-full rounded-none"></Skeleton>
      <Skeleton className="skeleton h-4 w-full rounded-none"></Skeleton>
    </div>
     
    </div>
  );
};

export default EventSkeleton;
