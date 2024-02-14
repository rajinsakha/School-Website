import React from 'react'

interface ITitle{
    color?:string;
    title:string;

}

const Title = ({color, title}:ITitle) => {
  return (
    <div className="flex gap-4 items-center">
          <span className="h-7 w-2 bg-orange-500"></span>
          <h4 className="font-semibold text-xl">{title}</h4>
        </div>
  )
}

export default Title