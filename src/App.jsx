import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Services from './components/Services/Services'
import Banner from './components/Banner/Banner'
import Partners from './components/Partners/Partners.jsx'
import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png"
import Products from './components/Products/Products'
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer.jsx'
import Popup from './components/Popup/Popup.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import Pricing from './components/Pricing/Pricing.jsx'
import PricingCard from './components/Pricing/PricingCard.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

const BannerData = {
  discount: "30% خصم",
  title: "متجرك الكتروني متخصص في التجارة التكنولوجية",
  date: "10 Jul to 28 Jul",
  img: headphone,
  title2: "تقدم خدماتنا",
  title3: "لتوفير أفضل",
  title4: "تقدم خدماتنا لتوفير أفضل خدمات لمتجرك",
  bgColor: "#f42c37",
};

const BannerData2 = {
  discount: "30% خصم",
  title: "متجرك الكتروني متخصص في التجارة التكنولوجية",
  date: "10 Jul to 28 Jul",
  img: smartwatch2,
  title2: "تقدم خدماتنا",
  title3: "لتوفير أفضل",
  title4: "تقدم خدماتنا لتوفير أفضل خدمات لمتجرك",
  bgColor: "#2dcc6f",
};

const dataPricingCard = [
  {
  name: "نسخة أساسية",
  price: "600",
  currency: "$",
  frequency: "شهر",
  featured: false,
  features: [
    'استضافة الموقع',
    'تصميم عصري متجاوب',
    'الصيانة والدعم'
  ],
},
{
  name: "تصميم مخصص",
  price: "900",
  currency: "$",
  frequency: "month",
  featured: true,
  features: [
    'الاستضافة، اسم المجال، شهادة SSL',
    'تعدد لغات وعملات',
    'عدد لامحدود من العملاء'
  ],
},
{
  name: "تخصيص كامل",
  price: "X",
  currency: "$",
  frequency: "month",
  featured: false,
  features: [
    'تخصيص بالربط مع برمجيات خارجية',
    'تخصيص بالربط بمخزون خارجي',
    'عدد لامحدود من المنتجات و العملاء'
  ],
},
]

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const services = useRef(null);
  const products = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };


  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
      //once: true,
      //mirror: false,
      //disable: false,
      offset: 100,
      //anchorPlacement: "top-bottom",
    });
    AOS.refresh();
  },[]);
  
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'>
      <ScrollToTop />
      <Navbar handleOrderPopup={handleOrderPopup} boy={[services,products,contact]}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <PricingCard/>
      <Services ref={services}/>
      <Services/>
      <Category/>
      <Category2/>
      <Blogs/>
      {/* <Pricing/> */}
      <Banner data={BannerData}/>
      <Products ref={products}/>
      <Banner data={BannerData2}/>
      <Partners/>
      <Footer ref={contact}/>
      <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup}/>
    </div>
  )
}

export default App