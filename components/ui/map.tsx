import React from 'react'

const Map = () => {
  return (
    <div className='overflow-hidden relative h-0' style={{paddingBottom:'56.25%'}}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.5305937354306!2d85.387569263305!3d27.42157021383584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb6c573a02dc1f%3A0xe43b9d7771a7c34!2sShree%20Janak%20Secondary%20School!5e0!3m2!1sen!2snp!4v1706203142903!5m2!1sen!2snp" width="600" height="440" className='border-none left-0 top-0 h-full w-full absolute'  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map


