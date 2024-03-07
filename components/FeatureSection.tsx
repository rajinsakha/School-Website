import React from 'react'
import Title from './ui/title'
import FeatureCard from './ui/featureCard'
import { FaLeaf, FaBasketballBall } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import { FaUsers, FaUserCog } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";

const FeatureSection = () => {

  const featureData = [
    {
      icon: GiBookshelf,
      title:'Quality Education'
    },
    {
      icon: FaLeaf,
      title:'Surrounded by Nature'
    },
    {
      icon:FaBasketballBall,
      title:'Sports Activities'
    },
    {
      icon: RiCommunityFill,
      title:'Community Engagement'
    },
    {
      icon: FaUsers,
      title:'Equal Opportunities'
    },
    {
      icon: FaUserCog,
      title:'Personal Development'
    },
   
  ]


  return (
    <div className='padding flex flex-col gap-8 items-center bg-slate-100 w-full'>
        <Title title='WHY SHREE JANAK?' />
        <h1 className='text-2xl font-bold'>The Advantage of Education in Shree Janak </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'> 
        {featureData.map((feature,index)=>(
          <FeatureCard key={index} Icon={feature.icon} title={feature.title} />
        ))}
            
        </div>


    </div>
  )
}

export default FeatureSection