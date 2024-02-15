import { IconType } from "react-icons";

interface FeatureProps {
  Icon: IconType;
  title: string;
  subtitle: string;
}

const FeatureCard = ({ Icon, title, subtitle }: FeatureProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-full p-2  bg-green-500 w-10 h-10 flex items-center">
      <Icon fontSize={20} />
      </div>
    
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </div>
  );
};

export default FeatureCard;
