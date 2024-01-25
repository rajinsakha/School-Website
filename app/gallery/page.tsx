import Image from "next/image";
import React from "react";

interface Image {
  url: string;
}

const images: Image[] = [
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
  { url: "/Hero.jpeg" },
];

const GalleryPage = () => {
  return (
    <section className="padding flex flex-col justify-center items-center gap-12">
      <div>
        <h1 className="text-5xl font-bold">Gallery</h1>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image: Image, index: number) => (
          <Image
            key={index}
            alt="Hello"
            src={image.url}
            width={400}
            height={400}
            className="hover:opacity-50 cursor-pointer transition "
          />
        ))}
      </div>
    </section>
  );
};

export default GalleryPage;
