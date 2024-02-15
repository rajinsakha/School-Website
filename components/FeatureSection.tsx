import React from 'react'
import Title from './ui/title'
import FeatureCard from './ui/featureCard'
import { FaLeaf } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <div className='padding flex flex-col gap-8 items-center'>
        <Title title='WHY SHREE JANAK?' />
        <h1 className='text-2xl font-bold'>The Advantage of Education in Shree Janak </h1>
        <div className='grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 gap-8 '> 
            <FeatureCard Icon={FaLeaf} title='Surrounded by nature' subtitle='The children spend time in an environment that is detached from the city noise, in a quiet part of the residential area and the school itself is surrounded by rich vegetation and has spacious yards, a forest path, playgrounds and sports areas.' />
            <FeatureCard Icon={FaLeaf} title='Surrounded by nature' subtitle='The children spend time in an environment that is detached from the city noise, in a quiet part of the residential area and the school itself is surrounded by rich vegetation and has spacious yards, a forest path, playgrounds and sports areas.' />
            <FeatureCard Icon={FaLeaf} title='Surrounded by nature' subtitle='The children spend time in an environment that is detached from the city noise, in a quiet part of the residential area and the school itself is surrounded by rich vegetation and has spacious yards, a forest path, playgrounds and sports areas.' />
            <FeatureCard Icon={FaLeaf} title='Surrounded by nature' subtitle='The children spend time in an environment that is detached from the city noise, in a quiet part of the residential area and the school itself is surrounded by rich vegetation and has spacious yards, a forest path, playgrounds and sports areas.' />
            <FeatureCard Icon={FaLeaf} title='Surrounded by nature' subtitle='The children spend time in an environment that is detached from the city noise, in a quiet part of the residential area and the school itself is surrounded by rich vegetation and has spacious yards, a forest path, playgrounds and sports areas.' />
            <FeatureCard Icon={FaLeaf} title='Surrounded by nature' subtitle='The children spend time in an environment that is detached from the city noise, in a quiet part of the residential area and the school itself is surrounded by rich vegetation and has spacious yards, a forest path, playgrounds and sports areas.' />
        </div>


    </div>
  )
}

export default FeatureSection