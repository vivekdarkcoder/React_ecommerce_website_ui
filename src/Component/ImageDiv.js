import React from 'react'
import { Link } from 'react-router-dom';
require( "../styles/global.css");

function ImageDiv(props) {
  const {gender , Url}=props;
  return (
    <div >  
       <div  className="divStyle">
         <Link to={Url}>
         <img className={"img"}  src={gender} alt="men.jpg" />
         </Link>
       </div>
    </div>
  )
}

export default ImageDiv