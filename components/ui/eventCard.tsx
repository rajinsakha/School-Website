import Image from 'next/image'
import React from 'react'

const EventCard = () => {
  return (
    <div className='flex gap-4'>
      
       <Image src='/hero.jpeg' alt='Hero' width={100} height={100} sizes='100vw' />

       <div className='flex flex-col gap-4'>
         <h1>ANNUAL SCHOOL PROGRAM</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, odio? ...</p>
       </div>

    </div>
  )
}

export default EventCard