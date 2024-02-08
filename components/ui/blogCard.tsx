import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4 bg-white hover:shadow-xl hover:transition-all hover:cursor-pointer">
      <Image
        src="/Hero.jpeg"
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
        <p>21st Nov, 2023</p>
        <h3 className="font-semibold text-xl">Blog Title</h3>
        <p className="text-sm">
          Description in Short. Needs to Be Splitted so that it does not exceed
          the length of the card. Will focus on that.
        </p>
      </div>
      <Link
        href="#"
        className=" flex items-center text-blue-500 hover:text-orange-600"
      >
        Read more<span className="text-2xl ml-1">&#8594;</span>
      </Link>
    </div>
  );
};

export default BlogCard;
