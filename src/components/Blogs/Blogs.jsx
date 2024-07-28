import React from 'react'
import Heading from '../Shared/Heading'

// import images
import Img1 from "../../assets/blogs/blog-1.jpg"
import Img2 from "../../assets/blogs/blog-2.jpg"
import Img3 from "../../assets/blogs/blog-3.jpg"

const BlogData = [
    {
        id: 1,
        title: "منصة تكوين متجر الكتروني متوفرة على أي تويبر",
        subtitle: "كيف تتمكن من تكوين متجرك الكتروني باستخدام أنظمة تكوين متوفرة على أي توبير",
        published: "Jan 20, 2024 by Nimer",
        image: Img1,
        aosDelay: "0"
    },
    {
        id: 2,
        title: "منصة تكوين متجر الكتروني متوفرة على أي تويبر",
        subtitle: "كيف تتمكن من تكوين متجرك الكتروني باستخدام أنظمة تكوين متوفرة على أي توبير",
        published: "Jan 20, 2024 by Nimer",
        image: Img2,
        aosDelay: "200"
    },
    {
        id: 3,
        title: "منصة تكوين متجر الكتروني متوفرة على أي تويبر",
        subtitle: "كيف تتمكن من تكوين متجرك الكتروني باستخدام أنظمة تكوين متوفرة على أي توبير",
        published: "Jan 20, 2024 by Nimer",
        image: Img3,
        aosDelay: "400"
    }
    // more blog data...
 
]

const Blogs = () => {
  return (
    <div className='my-12'>
        <div className='container'>
             {/** Header section */}
             <Heading title="Recent News"
            subtitle={"Explore Our Blogs"}/>
            {/** Blog section */}
            <div className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
                 {/* blog card */}
                 {
                    BlogData.map((data) => (
                        <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                        key={data.id} className='bg-white dark:bg-gray-900'>
                            {/* image section */}
                            <div className='overflow-hidden rounded-2xl mb-2'>
                                <img src={data.image} alt={data.title}
                                className='w-full h-[220px] object-cover
                                rounded-2xl hover:scale-105 duration-500'
                                />
                            </div>
                            {/* content section */}
                            <div className='space-y-2'>
                                <p className='text-xs text-gray-500'>{data.published}</p>
                                <p className='font-bold line-clamp-1'>{data.title}</p>
                                <p className='line-clamp-2 text-sm text-gray-600
                                dark:text-gray-400'>{data.subtitle}</p>
                            </div>
                        </div>
                    ))
                 }
            </div>
        </div>
    </div>
  )
}

export default Blogs