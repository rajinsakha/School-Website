import React from 'react'
import EventCard from './ui/eventCard'

const EventSideBar = () => {
  return (
    <div className='flex flex-col gap-8'>
        <div className='bg-slate-200 text-blue-700 px-4 py-2'><h1 className='text-xl font-bold'>RECENT EVENTS</h1></div>
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />    
    </div>
  )
}

export default EventSideBar