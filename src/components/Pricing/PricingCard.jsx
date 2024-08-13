import React, { useEffect, useState } from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import Button from '../Shared/Button'
import Loader from '../Loader/Loader';

const PricingCard = ({name='', price= 0,status=0, details=[],created_a=''}) => {
    /*const [pricePlan, setPricePlan] = useState([]);
    const [loading, setLoading]  = useState(false);

    const fetchPricePlanList = async () => {
        setLoading(true);
        const response = await fetch("https://demo9.art-feat.com/api/plan");
            
        const dataResponse = await response.json();
        setLoading(false);
        setPricePlan(dataResponse.data);
    };

    useEffect(() => {
        fetchPricePlanList();
    }, []);

    if (loading) {
        return <Loader />;
      }*/

  return (
    <div className='h-full flex justify-center items-center px-6 py-12'>
        <div className={`bg-white border-primary rounded-md shadow-xl cursor-pointer
        relative ${
            false ? 'border-2': 'border border-opacity-10'
        }`}>
            {/* Popular tag */}
            {
                false ? (
                    <span className='bg-primary text-white px-6 py-1 rounded-full
                    uppercase text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2
                    transform -translate-x-1/2 -translate-y-1/2'>الأكثر طلباً</span>
                ) : null
            }
            {/* Card Header */}
            <div className='px-6 py-12 border-b-2 border-gray-200 card-header-bg-color'>
                <p className='text-3xl font-semibold text-center mb-4'>{name}</p>
                <div className='flex justify-center items-center'>
                <div className='flex items-start'>
                <p className='text-4xl font-medium'>$</p>
                <p className='text-7xl font-bold'>{price}</p>
                </div>
                <p className='text-2xl text-gray-400'>/month</p>
                </div>
            </div>
            {/* Card Body */}
            <div className='p-12 hero-bg-color'>
                <ul className='space-y-3'>
                    <li>{details}</li>
                </ul>

                {/* CAT call-to-action  */}
                <div className='mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap
                focus:outline-none focus:ring-4 focus:ring-indigo-600
                focus:ring-opacity-50 transition-all'>
                    <Button
                text="ابدأ تجربتك المجانية"
                bgColor="bg-primary"
                textColor="text-white"
                >
                </Button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default PricingCard