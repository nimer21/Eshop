import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Import css files react-slick (Slider)
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
//document.getElementsByTagName('html')[0].setAttribute("dir", "rtl");
//Or you can do it where ever you want, base on user selected language, or something else 
//serviceWorker.unregister();
