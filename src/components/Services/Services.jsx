import React, { forwardRef, useEffect, useState } from 'react'
import  {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle 
} from "react-icons/fa";
import Loader from '../Loader/Loader';

// style = {{transform: 'rotate(90deg)' }}
const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl
        text-primary' />,
        title: "خدمات مجانية",
        description: "نحن نقوم بتوفير خدمات الشركات السوقية التي تعتمد على متجركم وتسادك في التسوق بأكبر شي.",
        active: false
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl
        text-primary' />,
        title: "دعم فني متمكن",
        description: "نحن نقوم بتوفير دعم فني متمكن لكم عند الحاة للتوال مع حفاتكم والمنتجات التي تعتمد عليها.",
        active: false
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl
        text-primary' />,
        title: "خدمات لكترونية",
        description: "نحن نقوم بتوفير خدمات لكترونية متمكنة لكم عند الحاة لى التوال مع متجركم والموانتكم.",
        active: false
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl
        text-primary' />,
        title: "شهد نمر السيد",
        description: "نحن نقوم بتوفير حصاات لتسوق متمكنة لكم عند الحاة لى التوال مع متجركم والمواينتكم.",
        active: false
    }
];

const Services = forwardRef((props, ref) => {
    const [serviceName, setServiceName] = useState([]);
  const [loading, setLoading]  = useState(false);

  const fetchServiceName = async () => {
    setLoading(true);
    const response = await fetch("https://demo9.art-feat.com/api/services");
    const dataResponse = await response.json();
    setLoading(false);
    setServiceName(dataResponse.data);
};

useEffect(() => {
    fetchServiceName();
  },[]);

if (loading) {
    return <Loader/>;
  }

  return (
    <div ref={ref}>
        <div className="container my-14 md:my-20 mx-9">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4
            gap-y-8">
                {
                    serviceName.map((service,index) => (
                        <div key={service.id} className='flex flex-col items-start sm:flex-row
                        gap-4'>
                            {/* {service.icon} */}
                            <FaCheckCircle className='text-4xl md:text-5xl
                                    text-primary' />
                            <div>
                                <h1 className='lg:text-lg font-bold'>{service.name}</h1>
                                <h1 className='text-gray-400 text-sm line-clamp-1'>{service.description}</h1>
                            </div>
                        </div>                        
                    ))
                }
            </div>
        </div>
    </div>
  )
});

export default Services