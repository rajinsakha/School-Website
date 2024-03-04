import React from 'react'
import Title from './ui/title'
import FeatureCard from './ui/featureCard'
import { FaLeaf, FaBasketballBall } from "react-icons/fa";
import { MdOutlineSportsSoccer } from "react-icons/md";

const FeatureSection = () => {

  const featureData = [
    {
      icon: FaLeaf,
      title:'Surrounded by Nature'
    },
    {
      icon:FaBasketballBall,
      title:'Sports Activities'
    },
    {
      icon: FaLeaf,
      title:'Surrounded by Nature'
    },
    {
      icon: FaLeaf,
      title:'Surrounded by Nature'
    },
    {
      icon: FaLeaf,
      title:'Surrounded by Nature'
    },
    {
      icon: FaLeaf,
      title:'Surrounded by Nature'
    },
    
  

  ]


  return (
    <div className='padding flex flex-col gap-8 items-center'>
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