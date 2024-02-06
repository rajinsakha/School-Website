
import { IconType } from 'react-icons';


interface IconProps {
    Icon: IconType;
    title: string;
  }


const Icon = ({Icon, title}:IconProps) => {
  return (
    <div className='flex items-center gap-4'>
        <Icon fontSize={24} />
        <span className='text-sm'>{title}</span>
    </div>
  )
}

export default Icon