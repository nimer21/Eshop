import React, { useRef } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa";
import Img7 from "../../assets/logo1.png";
import PageIcon from "../PageIcon/PageIcon";

const MenuLinks = [
  {
    id: 1,
    name: "الرئيسية",
    link: "/#",
  },
  {
    id: 2,
    name: "خدماتنا",
    link: "/#shop",
  },
  {
    id: 3,
    name: "أعمالنا",
    link: "/#about",
  },
  {
    id: 4,
    name: "تواصل معنا",
    link: "/#blog",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "إتفاقية الخدمة",
    link: "/#",
  },
  {
    id: 2,
    name: "الأسئلة الشائعة",
    link: "/#",
  },
  {
    id: 3,
    name: "طرق الدفع",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup, boy }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900
    dark:text-white duration-200 relative z-40"
    >
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold
              tracking-widest text-2xl uppercase
              sm:text-3xl"
            >
              <img className="h-18 w-24" src={Img7} alt="logo"/>
              {/* <PageIcon color={'primary'}/> */}
            </a>
            {/** Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gp-4">
                {MenuLinks.map((data, index) => (
                  <li key={index} onClick={
                    (()=>{
                      switch (data.name) {
                        case 'خدماتنا':
                          return boy[0].current.scrollIntoView({
                            behavior: "smooth",
                            block: "start",});
                        
                        case 'أعمالنا':
                          return boy[1].current.scrollIntoView({
                            behavior: "smooth",
                            block: "start",});
                        case 'تواصل معنا':
                          boy[2].current.scrollIntoView({
                            behavior: "smooth",
                            block: "start",});
                        default:
                          return 'text-gray-500 hover:text-gray-400';  
                    }})
                  }>                    
                    <a
                      href={data.link}
                      className="inline-block px-4
                                font-semibold text-gray-500
                              hover:text-black                                        
                              dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
                {/** Dropdown */}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px]
                    font-semibold text-gray-500
                    dark:hover:text-white py-2"
                  >
                    روابط سريعة
                    <span className="">
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/** Dropdown Links */}
                  <div
                    className="absolute z-[9999] hidden
                    group-hover:block w-[200px] rounded-md bg-white                 
                    shadow-md dark:bg-gray-900 p-2 dark:text-white"
                  >
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a
                            href={data.link}
                            className="text-gray-500
                                           dark:hover:text-white duration-200
                                             inline-block w-full p-2
                                           hover:bg-primary/20 rounded-md
                                             font-semibold"
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/** Search Bar section */}
            <div className="relative group hidden sm:block">
              <input type="text" placeholder="البحث" className="search-bar" />
              <IoMdSearch
                className="text-xl text-gray-600
                group-hover:text-primary dark:text-gray-400 absolute top-1/2
                -translate-y-1/2 right-3 duration-200"
              />
            </div>

            {/** Order-button section */}
            <button className="relative p-3" onClick=
            {handleOrderPopup}>
              <FaCartShopping
                className="text-xl text-gray-600
                dark:text-gray-400"
              />
              <div
                className="w-4 h-4 bg-red-500 text-white
                rounded-full absolute top-0 right-0 flex
                items-center justify-center text-xs"
              >
                4
              </div>
            </button>
            {/** Dark Mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
