import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section>
      <div className="padding bg-blue-700 flex items-center justify-center">
        <h1 className="text-white font-bold text-5xl tracking-wide">
          Event Title
        </h1>
      </div>

      <div className="px-8 sm:px-16 md:px-32 lg:px-40 padding-y ">
        <div className="flex flex-col gap-4">
          <h3 className="text-left text-2xl">This is Event Title</h3>
          <Image
            src="/Hero.jpeg"
            alt="Single Event"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[50vh] md:w-[70vw] lg:w-[50vw] object-cover object-center"
          />
          <p></p>
        </div>
      </div>
    </section>
  );
};

export default Page;
