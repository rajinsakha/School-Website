import React from 'react'
import { IconType } from 'react-icons';

const SocialIcon = ({Icon}:{Icon: IconType}) => {
  return (
    <div className='rounded-full w-10 h-10 flex items-center py-1 px-3 bg-slate-100 text-black'>
            <Icon fontSize={20} />
    </div>
  )
}

export default SocialIcon;