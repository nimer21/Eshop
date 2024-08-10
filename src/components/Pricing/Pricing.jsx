import React from "react";
import Button from "../Shared/Button";

const Pricing = () => {
  return (
    <div className="py-8">
      <div className="container font-mono my-1 mx-auto">
        <div
          className="grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-4 gap-8"
        >
          {/* first column */}
          <div
            className="group py-10 pr-5 bg-gradient-to-br from-black/70
                to-black/90 text-white rounded-2xl relative h-[320px]
                flex items-end 
                float-left text-center shadow-[1px_1px_20px_rgba(0,0,0,0.5)] duration-700
                hover:bg-primary
                hover:shadow-[0px_0px_15px_rgba(0,0,0,1)] hover:scale-110 hover:z-10 hover:rounded-3xl"
          >
            <div className="mb-1">
              <h1 className="text-lg text-white leading-3">Basic</h1>
              <div className="rounded-full border-2 border-primary mt-3 mx-auto text-center group-hover:border-white">
                <h2 className="text-4xl xl:text-5xl text-white font-semibold">
                  $19.99
                </h2>
              </div>
              <div className="mt-3">
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
              </div>
              <div className="mt-3">
                <Button
                  text="أطلب متجرك"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
          </div>
          {/* second column */}
          <div
            className="group py-10 pr-5 bg-gradient-to-br from-black/70
                to-black/90 text-white rounded-2xl relative h-[320px]
                flex items-end 
                float-left text-center shadow-[1px_1px_20px_rgba(0,0,0,0.5)] duration-500
                hover:bg-primary
                hover:shadow-[0px_0px_15px_rgba(0,0,0,1)] hover:scale-110 hover:z-10 hover:rounded-3xl"
          >
            <div className="mb-1">
              <h1 className="text-lg text-white leading-3">Basic</h1>
              <div className="rounded-full border-2 border-primary mt-3 mx-auto text-center group-hover:border-white">
                <h2 className="text-4xl xl:text-5xl text-white font-semibold">
                  $19.99
                </h2>
              </div>
              <div className="mt-3">
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
              </div>
              <div className="mt-3">
                <Button
                  text="أطلب متجرك"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
          </div>
          {/* third column */}
          <div
            className="group py-10 pr-5 bg-gradient-to-br from-black/70
                to-black/90 text-white rounded-2xl relative h-[320px]
                flex items-end 
                float-left text-center shadow-[1px_1px_20px_rgba(0,0,0,0.5)] duration-300
                hover:bg-primary
                hover:shadow-[0px_0px_15px_rgba(0,0,0,1)] hover:scale-110 hover:z-10 hover:rounded-3xl"
          >
            <div className="mb-1">
              <h1 className="text-lg text-white leading-3">Basic</h1>
              <div className="rounded-full border-2 border-primary mt-3 mx-auto text-center group-hover:border-white">
                <h2 className="text-4xl xl:text-5xl text-white font-semibold">
                  $19.99
                </h2>
              </div>
              <div className="mt-3">
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
              </div>
              <div className="mt-3">
                <Button
                  text="أطلب متجرك"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
          </div>
          {/* fourth column */}
          <div
            className="group py-10 pr-5 bg-gradient-to-br from-black/70
                to-black/90 text-white rounded-2xl relative h-[320px]
                flex items-end 
                float-left text-center shadow-[1px_1px_20px_rgba(0,0,0,0.5)] duration-100
                hover:bg-primary
                hover:shadow-[0px_0px_15px_rgba(0,0,0,1)] hover:scale-110 hover:z-10 hover:rounded-3xl"
          >
            <div className="mb-1">
              <h1 className="text-lg text-white leading-3">Basic</h1>
              <div className="rounded-full border-2 border-primary mt-3 mx-auto text-center group-hover:border-white">
                <h2 className="text-4xl xl:text-5xl text-white font-semibold">
                  $19.99
                </h2>
              </div>
              <div className="mt-3">
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
                <h4 className="text-lg font-normal text-center text-white leading-7">
                  Lorem, ipsum dolor adipisicing.
                </h4>
              </div>
              <div className="mt-3">
                <Button
                  text="أطلب متجرك"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Pricing;
