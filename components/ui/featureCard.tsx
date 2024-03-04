import { IconType } from "react-icons";

interface FeatureProps {
  Icon: IconType;
  title: string;
}

const FeatureCard = ({ Icon, title }: FeatureProps) => {
  return (
    <div className="flex items-center gap-6 bg-[#144466] py-6 pl-6 pr-8 lg:pr-32 rounded-xl sm:mr-8">
      <div className="rounded-full  bg-green-600 w-10 h-10 flex items-center justify-center">
        <Icon fontSize={20} color="white" />
      </div>

      <h4 className="text-xl lg:text-2xl font-bold text-white">{title}</h4>
    </div>
  );
};

export default FeatureCard;
