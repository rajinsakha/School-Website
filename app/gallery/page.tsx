import { ImageProps } from "@/interface/GalleryPage";
import Image from "next/image";
import React from "react";



const GalleryPage = () => {

  const images: ImageProps[] = [
    { url: "/Class1.jpg" }, 
    { url: "/Class2.jpg" },
    { url: "/Class3.jpg" },
    { url: "/Class4.jpg" },
    { url: "/Class5.jpg" },
    { url: "/Class6.jpg" },
    { url: "/Class7.jpg" },
    { url: "/Class8.jpg" },
    { url: "/Class9.jpg" },
    { url: "/Class10.jpg" },
    { url: "/ClassECD.jpg" },
    {url:"/plant.jpg"},
    {url:"/winnerstudent.jpg"},
    {url:"/winnerteam.jpg"},
    {url:"/winnerbat.jpg"}

 

  ];

  return (
    <section className="flex flex-col ">
          <div className="padding bg-blue-700 flex items-center justify-center">
        <h1 className="text-white font-bold text-5xl tracking-wide">
         Gallery
        </h1>
      </div>

      <section className="padding flex flex-col justify-center items-center gap-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.map((image: ImageProps, index: number) => (
          <Image
            key={index}
            alt="Hello"
            src={image.url}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              objectFit:'cover',
              objectPosition:"50% 50%",
            }}
            className="hover:scale-110  cursor-pointer transition h-[216px]"
          />
        ))}
      </div>
      </section>
    </section>
  );
};

export default GalleryPage;
