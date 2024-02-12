import EventSideBar from "@/components/EventSideBar";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <section>
      <div className="padding bg-sky-800 flex items-center justify-center">
        <h1 className="text-white font-bold text-5xl tracking-wide">
          Event Title
        </h1>
      </div>

      <div className="px-8 sm:px-16 md:px-32 lg:px-40 padding-y flex gap-24 bg-sky-700">
        <div className="flex flex-col gap-4 w-full md:w-[70vw] lg:w-[50vw]">
          <h3 className="text-left text-2xl">This is Event Title</h3>
          <Image
            src="/Hero.jpeg"
            alt="Single Event"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-[50vh] object-cover object-center"
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            earum, velit facere illum tempore rerum iure aut harum itaque iste
            illo similique voluptas laborum aliquam ut, quisquam animi deserunt
            mollitia perspiciatis libero optio molestias nisi. Beatae vel unde
            dignissimos magni repellat, inventore cum aspernatur in quisquam?
            Tenetur atque et eum.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full sm:w-[30vw]">
            <EventSideBar />
        </div>
      </div>
    </section>
  );
};

export default Page;
