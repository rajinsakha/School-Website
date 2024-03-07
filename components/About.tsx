import Image from "next/image";
import React from "react";
import Title from "./ui/title";
import { Button } from "./ui/button";
import Link from "next/link";

const About = () => {
  return (
    <section className="padding bg-slate-50 flex flex-col-reverse gap-24 lg:flex-row">
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
        <p >
          Sopot Hill is a new opportunity for extensive care for the development
          and education of children through three programs – preparatory
          preschool program, elementary school and secondary school </p>
          <p>With
          everyday sports activities and a creative approach to traditional
          content, we equally develop both movement and thought!</p>   
          <p>We nurture the
          mind and the body – at just 50 km from the center of Belgrade, in the
          municipality of Sopot, on the slopes of the Kosmaj Mountain, with
          homemade food and healthy air. </p>
        </div>
      
    
        <Button asChild className= "bg-blue-600 dark:bg-blue-600  hover:bg-blue-800 dark:text-white dark:hover:bg-blue-800 w-32">
          <Link href="/about">Read More</Link>
        </Button>

      </div>
    </section>
  );
};

export default About;
