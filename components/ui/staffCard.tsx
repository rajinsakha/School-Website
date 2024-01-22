import { IStaffCard } from "@/interface/AboutPage";
import Image from "next/image";
import React from "react";

const StaffCard = ({ staffInfo }: { staffInfo: IStaffCard }) => {
  return (
    <div className="w-[250px] h-[320px] rounded-lg flex flex-col items-center gap-3 p-4 bg-slate-100 cursor-pointer text-black hover:scale-110 hover:transform-gpu duration-300 " >
      <Image
        src={staffInfo.url}
        alt={staffInfo.name}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "100%",
        height:"100%",
        
          objectFit: "cover",
          borderRadius:'8px'
        }}
        
      />
      <div className="flex flex-col items-center gap-2">
      <h4>{staffInfo.name}</h4>
      <h5 className="text-sm uppercase text-blue-500 font-medium">{staffInfo.position}</h5>
      </div>
    
    </div>
  );
};

export default StaffCard;
