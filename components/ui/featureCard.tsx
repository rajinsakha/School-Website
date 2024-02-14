import { IconType } from 'react-icons';

interface FeatureProps {
  Icon: IconType;
  title: string;
  subtitle:string;
}

const FeatureCard = ({Icon, title, subtitle}:FeatureProps) => {
  return (
    <div className='flex flex-col gap-6'>
<Icon fontSize={30}/>
<h4>{title}</h4>
<p>{subtitle}</p>

    </div>
  )
}

export default FeatureCard