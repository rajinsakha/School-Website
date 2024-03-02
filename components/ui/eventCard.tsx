import { IEvent } from '@/interface/EventPage'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const EventCard = ({event}:{event:IEvent}) => {
  return (
    
    <div  className='flex gap-4  border-b border-slate-400 pb-4 text-white' >
      <Link href={`/event/${event.id}`}>
      <Image src='/hero.jpeg' alt='Hero' width={100} height={100} sizes='100vw' />
      </Link>
      

       <Link href={`/event/${event.id}`} className='flex flex-col gap-4'>
         <h1>{event.title}</h1>
         <p>{event?.body?.substring(0,50)+"..."}</p>
       </Link>

    </div>
  )
}

export default EventCard