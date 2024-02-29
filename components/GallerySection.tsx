import Image from "next/image";
import Title from "./ui/title";

import { Button } from "./ui/button";
import Link from "next/link";
import { ImageProps } from "@/interface/GalleryPage";

const GallerySection = () => {
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
 
  ];
  return (
    <div className="padding flex flex-col gap-8 items-center">
      <Title title="Gallery" />
      <h1 className="text-2xl font-bold">Photos from our gallery</h1>
      <Button
        asChild
        className="bg-blue-600 dark:bg-blue-600  hover:bg-blue-800 dark:text-white dark:hover:bg-blue-800 w-40"
      >
        <Link href="/gallery">View all Photos</Link>
      </Button>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {images.slice(0, 5).map((image: ImageProps, index: number) => (
          <Image
            key={index}
            alt="Hello"
            src={image.url}
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              objectPosition: "50% 50%",
            }}
            className="hover:scale-110 cursor-pointer transition "
          />
        ))}
      </div>
    </div>
  );
};

export default GallerySection;
