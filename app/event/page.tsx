import BlogCard from "@/components/ui/blogCard";
import React from "react";

const Page = () => {
  return (
    <section className="flex flex-col">
      <div className="padding bg-blue-700 flex items-center justify-center">
        <h1 className="text-white font-bold text-5xl tracking-wide">
          Our Events
        </h1>
      </div>

      <div className="padding grid  grid-cols-1  min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 bg-slate-200 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  );
};

export default Page;
