import React, { forwardRef, useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaMobileAlt } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import Loader from "../Loader/Loader";

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

const Footer = forwardRef((props, ref) => {
  const [fastUrl, setFastUrl] = useState([]);
  const [imptUrl, setImptUrl] = useState([]);
  const [footerName, setFooterName] = useState([]);
  const [socialName, setSocialName] = useState([]);
  const [loading, setLoading]  = useState(false);

  const fetchFastUrl = async () => {
    setLoading(true);
    const response = await fetch("https://demo9.art-feat.com/api/fast-url");
        
    const dataResponse = await response.json();
    setLoading(false);
    setFastUrl(dataResponse.data);
    //console.log(pricePlan);
};

const fetchImpUrl = async () => {
    setLoading(true);
    const response = await fetch("https://demo9.art-feat.com/api/import-url");
    const dataResponse = await response.json();
    setLoading(false);
    setImptUrl(dataResponse.data);
    //console.log(pricePlan);
};

const fetchFooterName = async () => {
    setLoading(true);
    const response = await fetch("https://demo9.art-feat.com/api/footer-name");
    const dataResponse = await response.json();
    setLoading(false);
    setFooterName(dataResponse.data);
};
const fetchSocialName = async () => {
    setLoading(true);
    const response = await fetch("https://demo9.art-feat.com/api/social");
    const dataResponse = await response.json();
    setLoading(false);
    setSocialName(dataResponse.data);
};

useEffect(() => {
    fetchFastUrl();
    fetchImpUrl();
    fetchFooterName();
    fetchSocialName();
  },[]);

  const renderComponent = () => {
    console.log(socialName.name);

    
  };

if (loading) {
    return <Loader/>;
  }
  return (
    <div ref={ref} className="dark:bg-gray-950">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold
              tracking-widest text-2xl uppercase
              sm:text-3xl"
            >              
                {footerName.map((item,i) => { 
                    return (
                        <>
                        <p key={i}>{item.name}</p>
                        <p className="text-gray-600 dark:text-white/70
                        lg:pl-24 pt-3">{item.desc}</p>
                        </>  
                    )
                })}
            </a>
            <p className="text-gray-500 mt-4">صنعت 💕 بواسطة متـــجري</p>
            <a href="https://www.youtube.com/" target="_blank"
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
                        imptUrl.map((link, index) =>(
                            <li key={index}>
                                <a href={link.url}
                                className="text-gray-600 dark:text-gray-400
                                hover:dark:text-white hover:text-black
                                duration-300">{link.name}</a>
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
                        fastUrl.map((link, index) =>(
                            <li key={index}>
                                <a href={link.url}
                                className="text-gray-600 dark:text-gray-400
                                hover:dark:text-white hover:text-black
                                duration-300">{link.name}</a>
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
                        <p>00201095674808</p>
                    </div>
                    {/* social links */}
               
                        <div className="flex items-center gap-3 mt-6">
                            <div className="flex items-center gap-3 mt-6">  

                                {
                                    socialName.map((social, index)  => {
                                        return (
                                            <div key={index}>
                                            {(() => {
                                                switch (social.name) {
                                                    case 'Insta':
                                                      return <a href={social.url} target="_blank">
                                                      <FaInstagram className="text-3xl
                                                      hover:text-primary duration-300"/>
                                                  </a>
                                                    case 'Facebook':
                                                      return <a href={social.url} target="_blank">
                                                      <FaFacebook className="text-3xl
                                                      hover:text-primary duration-300"/>
                                                  </a>
                                                    case 'Linked':
                                                      return <a href={social.url} target="_blank">
                                                      <FaLinkedin className="text-3xl
                                                      hover:text-primary duration-300"/>
                                                  </a>
                                                    default:
                                                      return null;
                                                  }
    
                                            })()}
                                        </div>
                                        )
                                    })
                                }

                        </div>
                        </div>
                
                
                </div>
            </div>
                    
                    
         
          </div>
        </div>
      </div>
    </div>
  );
});

export default Footer;
