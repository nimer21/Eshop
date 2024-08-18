import { CheckIcon } from '@heroicons/react/24/solid'
import Button from '../Shared/Button'
import Loader from '../Loader/Loader';
import { useEffect, useState } from 'react';

const PricingCard = () => {
  const [pricePlan, setPricePlan] = useState([]);
  const [loading, setLoading]  = useState(false);

  const fetchPricePlanList = async () => {
    setLoading(true);
    const response = await fetch("https://demo9.art-feat.com/api/plan");
        
    const dataResponse = await response.json();
    setLoading(false);
    setPricePlan(dataResponse.data);
    //console.log(pricePlan);
};
useEffect(() => {
    fetchPricePlanList();
  },[]);

if (loading) {
    return <Loader/>;
  }
  return (
    <div className='h-full lg:flex lg:justify-center lg:items-center px-6 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0'>        
        {            
            pricePlan.map((plan,index) => {
                return(
                    <div key={index} className={`w-full max-w-md mx-auto ${
                        (plan.featured) ? "order-first lg:order-none lg:scale-110 lg:transform lg:z-10"
                             : "lg:transform lg:scale-90"
                    }`}>
                    
        <div className={`bg-white border-indigo-600
        rounded-md shadow-xl cursor-pointer relative ${
            (plan.featured) ? "border-2" : "border border-opacity-10"
        }`}>
            {/* popular tag */}
            {
                 (plan.featured) ? (
                    <span className='bg-primary text-white px-6 py-1 rounded-full
                    uppercase text text-sm font-semibold whitespace-nowrap absolute top-0 left-1/2
                    transform -translate-x-1/2 -translate-y-1/2'>
                        الأكثر طلباً
                    </span>
                ) : null
            }
            {/* Card header */}
            <div className='card-header-bg-color px-6 py-12 border-b-2 border-gray-200'>
                <p className='text-3xl font-semibold text-center mb-4'>{plan.name}</p>
                <div className='flex justify-center items-center'>
                    <div className='flex items-start'>
                    <p className='text-4xl font-medium'>{plan.currency}</p>
                    <p className='text-7xl font-bold'>{plan.price}</p>
                    </div>
                    <p className='text-2xl text-gray-400'>/{plan.frequency}</p>
                </div>
            </div>

            {/* Card body */}
            <div className='p-12 hero-bg-color'>
                <ul className='space-y-3'>
                    {
                        plan.details.map((feature, index) =>(
                            <li key={index} className='flex items-center space-x-4'>
                            <CheckIcon className='h-6 w-6 text-green-500 flex-shrink-0' />                    
                            <p className='text-lg line-clamp-1 pr-1'>{feature.name}</p>
                    </li>
                        ))
                    }             
                </ul>
                {/* CAT call-to-action  */}
                <div className={`mt-12 w-full py-4 px-8 rounded-lg text-lg whitespace-nowrap
                focus:outline-none focus:ring-4 focus:ring-indigo-600
                focus:ring-opacity-50 transition-all ${
                    (plan.name==="Premiu")
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white hover:scal-105 transform'
                    : ''
                    // bg-white text-indigo-600 hover:bg-gray-50
                }`}>
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
            })
        }
</div>        
</div>
  )
}

export default PricingCard