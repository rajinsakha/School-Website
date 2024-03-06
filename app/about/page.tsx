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

  const tfnStaff: IStaffCard[] = [
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
  ];

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
            Tulasi Prasad Dhodari, a resident of Katuwa in South Lalitpur, had
            great interests in politics. He was a Pradhanpancha during Panchayat
            System in Nepal. During a local election in his village, his
            nomination was unlisted and his opposition leaders tried to cheat on
            him because he was not educated. This incident made him want to open
            a school in his village so that children there would be educated and
            wouldn’t have to face domination from others like he did. That’s
            what led to the establishment of Janak Secondary School (initially
            named Katuwa Primary School) in 1973 AD. With the increasing number
            of students, the school was upgraded as Lower Secondary School in
            2033 BS (1976 AD) and Secondary School in 2068 BS (2011 AD).
            <br /><br />
            Students from different ethnic backgrounds including Brahmin, Chhetri, Tamang, Magar and Dalits are enrolled in the school’s ECD classes to Grade 10. Some of the students walk for 3 hours to come to school as there is no hostel for the students. The families of the students are involved in farming, foreign employment and various small scale local businesses for livelihood
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
