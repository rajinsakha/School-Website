import Image from "next/image";
import React from "react";
import Title from "./ui/title";
import { Button } from "./ui/button";
import Link from "next/link";

const About = () => {
  return (
    <section className="padding bg-slate-50 flex flex-col-reverse gap-24 lg:flex-row" id="#about">
      <div className="flex-1">
      <Image
        src="/Teachers.jpg"
        alt="About Image"
        width={0}
        height={0}
        sizes="100vw"
        className=" w-full h-auto object-contain"
      />
      </div>
     

      <div className="flex-1 flex flex-col gap-8">
        <Title title="About Us" />
        <div className="flex flex-col gap-4">
        <p className="text-justify">
        Shree Janak school is an educational institution where students, typically ranging from young children to adolescents, receive structured instruction and guidance in various subjects and skills. School provides a learning environment equipped with teachers, curriculum, facilities, and resources aimed at fostering intellectual, social, and emotional development. 
        <br/><br/>They often follow a formal system of education, such as public, private, or homeschooling, and may offer programs tailored to different age groups and academic levels. The primary goal of schools is to impart knowledge, promote critical thinking, and prepare students for future academic, professional, and personal endeavors.</p>
        </div>
      
    
        <Button asChild className= "bg-blue-600 dark:bg-blue-600  hover:bg-blue-800 dark:text-white dark:hover:bg-blue-800 w-32">
          <Link href="/about">Read More</Link>
        </Button>

      </div>
    </section>
  );
};

export default About;
