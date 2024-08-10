import React from 'react'
import { CheckIcon } from '@heroicons/react/24/solid'
import Button from '../Shared/Button'

const PricingCard = ({name='', price= 0, currency='$', frequency = 'month', features=[], featured=false}) => {
  return (
    <div className='h-full flex justify-center items-center px-6 py-12'>
        <div className={`bg-white border-primary rounded-md shadow-xl cursor-pointer
        relative ${
            featured ? 'border-2': 'border border-opacity-10'
        }`}>
            {/* Popular tag */}
            {
                featured ? (
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
                <p className='text-4xl font-medium'>{currency}</p>
                <p className='text-7xl font-bold'>{price}</p>
                </div>
                <p className='text-2xl text-gray-400'>/{frequency}</p>
                </div>
            </div>
            {/* Card Body */}
            <div className='p-12 hero-bg-color'>
                <ul className='space-y-3'>
                    {
                        features.map((feature, index) =>(
                            <li key={index} className='flex items-center space-x-4'>
                            <CheckIcon className='h-6 w-6 text-green-500 flex-shrink-0' />
                            <p className='text-lg'>{feature}</p>
                            </li>
                        ))
                    }
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