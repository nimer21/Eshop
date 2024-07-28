import React from 'react'
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/watch.png";
import Image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';

const Category = () => {
  return (
    <div className='py-8'>
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-8">
                {/* first column */}
                <div className='py-10 pr-5 bg-gradient-to-br from-black/70
                to-black/90 text-white rounded-3xl relative h-[320px]
                flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-gray-400'>تطوير لامحدود</p>
                            <p className='text-2xl font-semibold mb-[2px]'>مع</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-5'>متجري</p>
                            <Button
                            text="أطلب متجرك"
                            bgColor={"bg-primary"}
                            textColor={"text-white"}
                            />
                        </div>
                    </div>
                    <img src={Image1} alt='' className="w-[120px] absolute
                    left-0 top-0 h-160" />
                </div>
                {/* second column */}
                <div className='py-10 pr-5 bg-gradient-to-br from-brandYellow/90
                to-brandYellow text-white rounded-3xl relative h-[320px]
                flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>متجر إلكتروني مخصص</p>
                            <p className='text-2xl font-semibold mb-[2px]'>مع</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-5'>متجري</p>
                            <Button
                            text="أطلب متجرك من هذه الباقة"
                            bgColor={"bg-white"}
                            textColor={"text-brandYellow"}
                            />
                        </div>
                    </div>
                    <img src={Image2} alt='' className="w-[320px] absolute
                    -left-14 lg:top-[10px]" />
                </div>
                {/* third column */}
                <div className='sm:col-span-2 py-10 pr-5 bg-gradient-to-br from-primary/90
                to-primary text-white rounded-3xl relative h-[320px]
                flex items-end'>
                    <div>
                        <div className='mb-4'>
                            <p className='mb-[2px] text-white'>متابعة ودعم فني</p>
                            <p className='text-2xl font-semibold mb-[2px]'>مع</p>
                            <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-5'>متجري</p>
                            <Button
                            text="أطلب متجرك من هذه الباقة"
                            bgColor={"bg-white"}
                            textColor={"text-primary"}
                            />
                        </div>
                    </div>
                    <img src={Image3} alt='' className="w-[250px] absolute
                    top-1/2 -translate-y-1/2 -left-0 h-160" />
                </div>
            </div>            
        </div>
    </div>
  )
}

export default Category