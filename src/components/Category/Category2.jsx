import React from 'react'
import Image1 from "../../assets/category/gaming.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/speaker.png";
import Button from '../Shared/Button';

const Category = () => {
  return (
        <div className='py-8'>
            <div className='container'>
                <div className="grid grid-cols-1 sm:grid-cols-2
                lg:grid-cols-4 gap-8">
                {/* First column */}
                <div className='sm:col-span-2 py-10 pr-5 bg-gradient-to-br from-gray-100
                to-gray-400/90 text-white rounded-3xl relative h-[320px]
                flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>متابعة ودعم فني</p>
                            <p className='text-2xl font-semibold mb-[2px]'>مع</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-5'>متجري</p>
                            <Button
                            text="أطلب متجرك من هذه الباقة"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt='' className="w-[250px] absolute
                    top-1/2 -translate-y-1/2 -left-0 h-160" />
                </div>
                {/* Second column */}
                <div className='py-10 pr-5 bg-gradient-to-br from-brandGreen/90
                to-brandGreen/90 text-white rounded-3xl relative h-[320px]
                flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>تطوير لامحدود</p>
                            <p className='text-2xl font-semibold mb-[2px]'>مع</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-5'>متجري</p>
                            <Button
                            text="أطلب متجرك"
                            bgColor={"bg-white"}
                            textColor={"text-brandGreen"}
                            />
                        </div>
                    </div>
                    <img src={Image2} alt='' className="w-[120px] absolute
                    left-0 top-0 h-160" />
                </div>
                {/* Thirs column */}
                <div className='py-10 pr-5 bg-gradient-to-br from-brandBlue/90
                to-brandBlue text-white rounded-3xl relative h-[320px]
                flex items-start'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>متجر إلكتروني مخصص</p>
                            <p className='text-2xl font-semibold mb-[2px]'>مع</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-5'>متجري</p>
                            <Button
                            text="أطلب متجرك من هذه الباقة"
                            bgColor={"bg-white"}
                            textColor={"text-brandBlue"}
                            />
                        </div>
                    </div>
                    <img src={Image3} alt='' className="w-[220px] absolute
                    bottom-0 left-0" />
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Category