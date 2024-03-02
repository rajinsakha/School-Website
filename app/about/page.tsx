import Image from "next/image";
import React from "react";

import about from "../../public/Teachers.jpg";
import StaffCard from "@/components/ui/staffCard";
import { IStaffCard } from "@/interface/AboutPage";

const AboutPage = () => {
  const principalInfo: IStaffCard = {
    url: "/hede.png",
    name: "Gokarna Bahadur Phuyal",
    position: "Principal",
  };

  const staffInfo: IStaffCard[] = [
    {
      url: "/JeevanRana.jpg",
      name: "Jeevan Rana",
      position: "Primary Teacher",
    },
    {
      url: "/BirendraJarghaMagar.jpg",
      name: "Birendra Jargha Magar",
      position: "Lower Secondary Teacher",
    },
    {
      url: "/GitaPataMagar.jpg",
      name: "Gita Pata Magar",
      position: "Primary Teacher",
    },
    {
      url: "/KopilaPhuyal.jpg",
      name: "Kopila Phuyal",
      position: "Office Helper",
    },
    {
      url: "/PratimaRanaMagar.jpg",
      name: "Pratima Rana Magar",
      position: "ECD Teacher",
    },
    {
      url: "/BuddhimanLopchana.jpg",
      name: "Buddhiman Lopchan",
      position: "Lower Secondary Teacher",
    },
    {
      url: "/KrishnaPrasadTimalsina.jpg",
      name: "Krishna Prasad Timalsina",
      position: "Primary Teacher",
    },
    {
      url: "/NehaLama.jpg",
      name: "Neha Lama",
      position: "Lower Secondary Teacher",
    },
    {
      url: "/PrakashAcharya.jpg",
      name: "Prakash Acharya",
      position: "Lower Secondary Teacher",
    },
    {
      url: "/PurnaBahadurGole.jpg",
      name: "Purna Bahadur Gole",
      position: "Administrative Assistant",
    },
    {
      url: "/RashmiSapkota.jpg",
      name: "Rashmi Sapkota",
      position: "Secondary Level Teacher",
    },
    {
      url: "/Roshani.jpg",
      name: "Roshani Thapa",
      position: "Lower Secondary Teacher",
    },
    {
      url: "/SapanaGurmachhan.jpg",
      name: "Sapana Gurmachhan",
      position: "Primary Teacher",
    },
    {
      url: "/SharadaAryal.jpg",
      name: "Sharada Aryal",
      position: "Secondary Teacher",
    },

    
  ];

  const tfnStaff:IStaffCard[]=[
    {
      url: "/DikshyaKhadka.jpg",
      name: "Dikshya Khadka",
      position: "English Teacher",
    },
    {
      url: "/GaneshBasnet.jpg",
      name: "Ganesh Basnet",
      position: "Science Teacher",
    },
    {
      url: "/GaurabShrestha.jpeg",
      name: "Gaurab Shrestha",
      position: "Science Teacher",
    },
    {
      url: "/MilanKumarSardarTharu.jpeg",
      name: "Milan Kumar Sardar Tharu",
      position: "English Teacher",
    },
    {
      url: "/RavindranathDahal.jpeg",
      name: "Ravindra Nath Dahal",
      position: "Math Teacher",
    },
    {
      url: "/RobinChaudhary.jpg",
      name: "Robin Chaudhary",
      position: "Science Teacher",
    },
    {
      url: "/SamitaTamang.jpg",
      name: "Samita Tamang",
      position: "English Teacher",
    },
    {
      url: "/SuruchiShahi.jpg",
      name: "Suruchi Shahi",
      position: "English Teacher",
    },
    {
      url: "/UjjwalShrestha.jpg",
      name: "Ujjwal Shrestha",
      position: "Math Teacher",
    },
  ]


  const sortedStaffInfo = staffInfo.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  const sortedTFNStaff = tfnStaff.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

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

            Our school is characterized by a perfect balance of formal education
            according to the national curriculum, additional subjects and
            activities, with an emphasis on sports and creativity. We have
            designed the perfect combination of content that is implemented so
            that every child is given the opportunity to discover, meet, develop
            and nurture their talents and start further education ready for all
            life’s challenges.
          </p>
        </div>

        <div className="flex-1 relative">
          <Image
            src={about}
            sizes="100vw"
            alt="about-us"
            style={{
              objectFit: "contain",
            }}
            fill
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
              {sortedStaffInfo.map((staff) => (
                <StaffCard key={staff.name} staffInfo={staff} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <h4 className="text-2xl font-semibold uppercase">TFN Alumni</h4>
            <div className="grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
              {sortedTFNStaff.map((staff) => (
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
