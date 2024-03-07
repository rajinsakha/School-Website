import { IEvent } from '@/interface/EventPage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventCard = ({event}:{event:IEvent}) => {
  return (
    
    <div  className='flex gap-8 sm:gap-16 lg:gap-8  border-b border-slate-400 pb-4 text-black' >
      <Link href={`/event/${event.id}`}>
      <Image src={event?.image} alt='Hero' width={0} height={0} sizes='100vw' className='w-[95px] h-[95px] object-cover'/>
      </Link>
      
       <Link href={`/event/${event.id}`} className='flex-1 flex flex-col space-y-2'>
         <h4 className='font-bold'>{event.title}</h4>
         <p className='mt-auto text-sm text-gray-700'>{event?.body?.substring(0,50)+"..."}</p>
       </Link>

    </div>
  )
}

export default EventCard