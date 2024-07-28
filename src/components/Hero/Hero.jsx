import React from 'react';
import Slider from 'react-slick';
import Image1 from "../../assets/hero/headphone.png";
import Image2 from "../../assets/category/vr.png";
import Image3 from "../../assets/category/macbook.png";
import Button from '../Shared/Button';

const HeroData = [
    {
        id: 1,
        img: Image1,
        subtitle: "خطوات انشاء متجر الكتروني وبأقل تكلفة وكيف تضمن نجاح البيع؟",
        title: 'متجرك الإلكتروني',
        title2: 'العصـــري',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus id justo imperdiet convallis.'
    },
    {
        id: 2,
        img: Image2,
        subtitle: "إبدأ معنا بتنفيذ",
        title: 'متجرك الإلكتروني',
        title2: 'الاحتــرافي',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus id justo imperdiet convallis.'
    },
    {
        id: 3,
        img: Image3,
        subtitle: "إبدأ معنا بعرض وبيع منتجاتك عبر الإنترنت",
        title: 'متجرك الإلكتروني',
        title2: 'الـراقــــــي',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel metus id justo imperdiet convallis.'
    }
]
const Hero = ({handleOrderPopup}) => {
    const settings = {
        dots: true,
        arrows: true,
        draggable: true,
        //fade: true,
        //slide:'.slider-pic',
        loop: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1, // Change the slidesToScroll to a -1 (it will change the slide direction)
        autoplay: true,
        mobileFirst: true,
        autoplaySpeed: 4500,
        cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
        //cssEase: "linear", ease-in-out // https://www.w3schools.com/cssref/css3_pr_animation-timing-function.php
        //easing: 'easeOutElastic',
        //variableWidth: true,
        pauseOnHover: false,
        pauseOnFocus: true,
        //rtl: true, // I add ( dir="rtl" ) to the slider container and then add ( rtl: true ) to the slick slider settings
      };
  return (
    <div className='container'>
        <div className='overflow-hidden rounded-3xl min-h-[550px]
        sm:min-h-[650px] hero-bg-color flex justify-center items-center'>
            <div className='container pb-8 sm:pb-0'>
            <Slider { ...settings}>
            {/** Hero section */}
                {
                    HeroData.map((data) =>(
                        <div key={data.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                            {/* text content section */}
                                <div className='flex flex-col justify-center space-y-7
                                gp-4 sm:pl-3 pt-12 sm:pt-0 text-center
                                sm:text-right order-1 sm:order-2 relative z-10'>
                                    <h1
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className='text-2xl sm:text-6xl
                                    lg:text-2xl font-bold'>{data.subtitle}</h1>
                                    <h1
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className='text-5xl sm:text-6xl
                                    lg:text-7xl font-bold'>{data.title}</h1>
                                    <h1
                                    data-aos="zoom-out"
                                    data-aos-duration="500"
                                    data-aos-once="true"
                                    className='text-5xl uppercase text-white
                                    dark:text-white/5 sm:text-[80px] md:text-
                                    [100px] xl:text-[150px] font-bold'>{data.title2}</h1>
                                    <div
                                    data-aos="fade-up"
                                    data-aos-offset="0"
                                    data-aos-duration="500"
                                    data-aos-delay="300"
                                    >
                                        <Button
                                        text="أطلب متجرك"
                                        bgColor="bg-primary"
                                        textColor="text-white"
                                        handler={handleOrderPopup}
                                        ></Button>
                                    </div>
                                </div>
                            {/* Img section */}
                                <div className='order-2 sm:order-1'>
                                    <div
                                    data-aos="zoom-in"
                                    data-aos-once="true"
                                    className='relative z-10'>
                                        <img src={data.img} alt=''
                                        className='w-[300px] sm:w-[450px] h-
                                        [300px] sm:h-[450px] sm:scale-105
                                        lg:scale-110 object-contain mx-auto
                                        drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]
                                        relative z-40'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }                
            </Slider>
            </div>
        </div>
    </div>
  );
};

export default Hero;