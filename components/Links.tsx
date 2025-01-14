import { iLink } from '@/interface/HomePage';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'


interface LinksProps {
    links: iLink[];
  }



const Links = ({links}: LinksProps) => {

    const pathname = usePathname();


  return (
    <>
        {links.map((link,index)=>(
            <Link href={link.path} key={index} className={`border-b-2 border-transparent pb-1 ${pathname === link.path && 'active'}  hover:text-blue-600 hover:border-blue-600 `}>{link.title}</Link>
        ))}
    </>
  )
}

export default Links