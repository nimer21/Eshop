import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";

const FooterLinks = [
    {
        id: 1,
        title: "الرئيسية",
        link: "/#",
    },
    {
        id: 2,
        title: "من نحن",
        link: "/#",
    },
    {
        id: 3,
        title: "خدماتنا",
        link: "/#",
    },
    {
        id: 4,
        title: "المقترحات",
        link: "/#",
    }
]

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold
              tracking-widest text-2xl uppercase
              sm:text-3xl"
            >
              متجري
            </a>
            <p className="text-gray-600 dark:text-white/70
            lg:pl-24 pt-3">
                كيف تتمكن من تكوين متجرك الكتروني باستخدام
                أنظمة تكوين متوفرة على أي
            </p>
            <p className="text-gray-500 mt-4">صنعت 💕 بواسطة تايــجر</p>
            <a href="" target="_blank"
            className="inline-block bg-primary/90 text-white
            py-2 px-4 mt-4 text-sm rounded-full">قناتنـا عـلى يـوتـيــوب</a>
          </div>
          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2
          sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-right mb-3">روابط هامة</h1>
                <ul className="space-y-3">
                    {
                        FooterLinks.map((link, index) =>(
                            <li key={index}>
                                <a href={link.link}
                                className="text-gray-600 dark:text-gray-400
                                hover:dark:text-white hover:text-black
                                duration-300">{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* second col links */}

            <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-right mb-3">روابط سريعة</h1>
                <ul className="space-y-3">
                    {
                        FooterLinks.map((link, index) =>(
                            <li key={index}>
                                <a href={link.link}
                                className="text-gray-600 dark:text-gray-400
                                hover:dark:text-white hover:text-black
                                duration-300">{link.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* company address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
            <h1 className="text-xl font-bold sm:text-right 
            mb-3">العنوان</h1>
                <div>
                    <div className="flex items-center gap-3">
                        <FaLocationArrow/>
                        <p>Giza, 6th October</p>
                    </div>
                    <div className="flex items-center gap-3 mt-6">
                        <FaMobileAlt/>
                        <p>+20 1095674808</p>
                    </div>
                    {/* social links */}
                    <div className="flex items-center gap-3 mt-6">
                        <a href="#">
                            <FaInstagram className="text-3xl
                            hover:text-primary duration-300"/>
                        </a>
                        <a href="#">
                            <FaFacebook className="text-3xl
                            hover:text-primary duration-300"/>
                        </a>
                        <a href="#">
                            <FaLinkedin className="text-3xl
                            hover:text-primary duration-300"/>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
