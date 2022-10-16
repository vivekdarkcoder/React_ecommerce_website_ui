import React from 'react'
import ClothType from '../Component/ImageDiv';
require( "../styles/global.css");

function Clothcategory(props) {
    const {Name,img}=props;
    const {UpperWear,MiddleWear,LowerWear}=img;
  return (
    <div>
          <div className='CategoryHead'>{Name} All wear</div>
          <ClothType gender={UpperWear} Url={`/Clothcategory/${Name}/UpperWear`}  />
          <ClothType gender={MiddleWear} Url={`/Clothcategory/${Name}/MiddleWear`} />
          <ClothType gender={LowerWear} Url={`/Clothcategory/${Name}/LowerWear`} />
        
    </div>
  )
}

export default Clothcategory