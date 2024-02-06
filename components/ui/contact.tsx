import { IconType } from 'react-icons';


interface ContactProps {
    Icon: IconType;
    title: string;
    subtitle:string;
  }

  const ContactIcon = ({ Icon, title, subtitle }: ContactProps) => {
    return (
      <div className="p-8 flex gap-6 items-center text-black bg-slate-100">
        <Icon fontSize={40} color='#144466'/>
        <div className='flex items-start flex-col'>
        <p className='text-xl font-medium'>{title}</p>
        <p className='text-sm'>{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default ContactIcon;