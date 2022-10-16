import React, { useState } from 'react'
import "../styles/Navbar.css"
import { Link, useLocation } from "react-router-dom"
function Navbar() {
  const [togglenav, settogglenav] = useState(false)
  const toggle = () => {
    togglenav === false ? settogglenav(true) : settogglenav(false)
    console.log(togglenav)
  }
  const location = useLocation().pathname;
  return (
    <div>
         <div className={togglenav?"navbar md-navbar":"navbar" }>
            <div className="logo">
                <img className='logoimg' src="https://www.clipartmax.com/png/full/257-2579934_%C2%A0-freelancer.png" alt=""/>
            </div>
            <div className={"hamberg md-hamberg" }>
                <span  id="hide"><i onClick={toggle} className={togglenav?"fa-solid fa-circle-xmark":"fa-solid fa-bars"}></i></span>
            </div>
            <div className={!togglenav?"menu md-menu":"menu"}>
                 <Link  className={`a ${location==="/"?"active":""}`}to="/">Home</Link>
                 <Link  className={`a ${location==="/ClothcategoryMen"?"active":""}`}to="/ClothcategoryMen">Men</Link>
                 <Link  className={`a ${location==="/ClothcategoryWomen/"?"active":""}`}to="/ClothcategoryWomen">Women</Link>
                 <Link  className={`a ${location==="/OurSeries"?"active":""}`}to="/OurSeries">Our series</Link>
                 <Link  className={`a ${location==="/ContactSeries"?"active":""}`}to="/ContactSeries">Contact-Us</Link>
                 <Link  className={`a ${location==="/AboutUs"?"active":""}`}to="/AboutUs">About Us</Link>
                 <Link className={`a ${location === "/HelpSupport" ? "active" : ""}`} to="/HelpSupport">Help & Support</Link>
            </div >
        </div >
    </div >
  )
}

export default Navbar