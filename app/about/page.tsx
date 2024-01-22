import Image from "next/image";
import React from "react";

import about from "../../public/Hero.jpeg";
import StaffCard from "@/components/ui/staffCard";
import { IStaffCard } from "@/interface/AboutPage";

const AboutPage = () => {
  const principalInfo: IStaffCard = {
    url: "/Hero.jpeg",
    name: "Gokarna Bahadur Phuyal",
    position: "Principal",
  };

  const staffInfo: IStaffCard[] = [
    {
      url: "/Hero.jpeg",
      name: "First Teacher",
      position: "Primary Teacher",
    },
    {
      url: "/rajin2.jpg",
      name: "First Teacher",
      position: "Primary Teacher",
    },
    {
      url: "/Hero.jpeg",
      name: "First Teacher",
      position: "Primary Teacher",
    },
    {
      url: "/Hero.jpeg",
      name: "First Teacher",
      position: "Primary Teacher",
    },
    {
      url: "/Hero.jpeg",
      name: "First Teacher",
      position: "Primary Teacher",
    },
    {
      url: "/Hero.jpeg",
      name: "First Teacher",
      position: "Primary Teacher",
    },
    {
      url: "/Hero.jpeg",
      name: "First Teacher",
      position: "Primary Teacher",
    },
    {
      url: "/Hero.jpeg",
      name: "First Teacher",
      position: "Primary Teacher",
    },
  ];

  return (
    <section>
      <div className="padding flex max-lg:flex-col gap-16 max-lg:text-sm bg-slate-50 dark:bg-black">
        <div className="flex flex-1 flex-col gap-8">
          <h1 className="text-4xl font-bold">About US</h1>
          <p className="text-base text-justify">
            The need for quality and comprehensive upbringing and education of
            children led us to establishing Sopot Hill and thus, through
            integrated programs in the field of language, art, sport and other
            activities, provide young generations with the opportunity to
            develop their capacities.
            <br />
            <br />
            Our school is characterized by a perfect balance of formal education
            according to the national curriculum, additional subjects and
            activities, with an emphasis on sports and creativity. We have
            designed the perfect combination of content that is implemented so
            that every child is given the opportunity to discover, meet, develop
            and nurture their talents and start further education ready for all
            life’s challenges.
          </p>
        </div>

        <div className="flex flex-1">
          <Image
            src={about}
            sizes="100vw"
            alt="about-us"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div className="padding flex flex-col items-center justify-center text-white gap-4 bg-[#144466]">
        <div className="flex gap-4 items-center">
          <span className="h-7 w-2 bg-orange-500"></span>
          <h4 className="font-semibold text-xl">OUR TEAM</h4>
        </div>

        <h2 className="text-4xl font-bold">Meet Our Team</h2>
        <p className="lg:w-2/4 text-sm sm:text-base">
          This is just a part of the whole team that selflessly gives its
          knowledge, energy and the noblest emotions to the students, as well as
          to each other.
        </p>

        <div className="mt-4 flex flex-col gap-12">
          <div className="flex flex-col items-center justify-center gap-6">
            <h4 className="text-center text-2xl font-semibold">PRINCIPAL</h4>
            <StaffCard staffInfo={principalInfo} />
          </div>

          <div className="flex flex-col items-center gap-6">
            <h4 className="text-2xl font-semibold uppercase">Teaching Staff</h4>
            <div className="grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
              {staffInfo.map((staff) => (
                <StaffCard key={staff.name} staffInfo={staff} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
