import Image from "next/image";
import React from "react";
import Links from "./Links";
import Link from "next/link";
import Icon from "./ui/icon";
import { HiOutlinePhone, HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import SocialIcon from "./ui/socialIcon";
import { FaFacebookF,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {

    const footerLinks = [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "/about",
        },
        {
          title: "Gallery",
          path: "/gallery",
        },
        {
          title: "Event",
          path: "/event",
        },
        {
          title: "Contact",
          path: "/contact",
        },
      ];
    


  return (
    <footer className="padding flex flex-col bg-slate-200">
      <section className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
            <div>
                <Image src='/logo.jpg' alt="School Logo" width={80} height={80} />
                <p>Shree Janak Secondary School is an goverment based institution established in 2030 B.S. which provides education upto Grade Ten. It is located at Southern Lalitpur.</p>
            </div>
            
            <div className="flex flex-col gap-6">
                <h4 className="text-xl font-semibold">Quick Links</h4>
                <div className="flex flex-col gap-3">
                {footerLinks.map((link)=>(
                    <Link href={link.path} key={link.title}>{link.title}</Link>

                ))}
                </div>
            
            </div>

            <div className="flex flex-col gap-6">
                <h4 className="text-xl font-semibold">Contact</h4>
                <div className="flex flex-col gap-3">
                <Icon Icon={HiOutlinePhone} title="01-6654321" />
                <Icon Icon={HiOutlineMail} title="shreejanak@gmail.com" />
                <Icon Icon={HiOutlineLocationMarker} title="Southern Lalitpur" />
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <h4 className="text-xl font-semibold">Follow Us</h4>
                <div className="flex gap-4">
                    <SocialIcon Icon={FaFacebookF} />
                    <SocialIcon Icon={FaInstagram} />
                    <SocialIcon Icon={FaXTwitter} />
              
                </div>



            </div>

      </section>

      <section>

      </section>
    </footer>
  );
};

export default Footer;
