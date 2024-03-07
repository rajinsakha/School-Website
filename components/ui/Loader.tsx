import React from 'react'

const Loader = ({height}:{height:string}) => {
  return (
    <div className={`flex items-center justify-center h-[${height}vh]`}><span className="table-loader"></span></div>
  )
}

export default Loader