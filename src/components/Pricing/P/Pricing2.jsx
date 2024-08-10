import React from 'react';
import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="container my-14 md:my-20">
    <div className="grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
    <div className="containerbody">
        <div className='wrapper'>
        <div className="single-price">
            <h1>Basic</h1>
            <div className="price">
                <h2>$19.99</h2>
            </div>
            <div className="deals">
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
            </div>
            <a href="#">Select</a>
        </div>

        <div className="single-price">
            <h1>Standard</h1>
            <div className="price">
                <h2>$35.99</h2>
            </div>
            <div className="deals">
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
            </div>
            <a href="#">Select</a>
        </div>

        <div className="single-price">
            <h1>Premium</h1>
            <div className="price">
                <h2>$55.99</h2>
            </div>
            <div className="deals">
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
                <h4>Lorem, ipsum dolor sit adipisicing.</h4>
            </div>
            <a href="">Select</a>
        </div>
        
    </div>
    </div>
    </div>
    </div>
  )
}

export default Pricing