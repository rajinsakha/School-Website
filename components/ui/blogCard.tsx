import { IEvent } from "@/interface/EventPage";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const BlogCard = ({event}:{event:IEvent}) => {

  function extractFirst100Characters(inputString:string) {
    if (inputString.length <= 100) {
        return inputString; // Return the whole string if it's 100 characters or less
    } else {
        let lastSpaceIndex = inputString.lastIndexOf(' ', 100); // Find the last space within the first 100 characters
        if (lastSpaceIndex !== -1) {
            return inputString.substring(0, lastSpaceIndex) + "..."; // Extract up to the last space
        } else {
            // If there's no space within the first 100 characters, just take the first 100 characters
            return inputString.substring(0, 100)+"..";
        }
    }
}


  return (
    <div className="flex flex-col gap-4 p-4 bg-white hover:shadow-xl hover:transition-all hover:cursor-pointer ">
      <Image
        src={event.image_url || '/hero.jpeg'}
        alt="Event Image"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div className="flex flex-col gap-2 text-black">
        <p>{event.date}</p>
        <h3 className="font-semibold text-xl">{event.title}</h3>
        <p className="text-sm">
          {extractFirst100Characters(event?.body)}
        </p>
      </div>
      <Link
        href={`/event/${event.id}`}
        className=" flex items-center text-blue-500 hover:text-orange-600"
      >
        Read more<span className="text-2xl ml-1">&#8594;</span>
      </Link>
    </div>
  );
};

export default BlogCard;
