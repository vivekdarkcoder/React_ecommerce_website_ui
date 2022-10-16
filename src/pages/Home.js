import React from 'react'
import GenderCategory from '../Component/ImageDiv';
require( "../styles/global.css");

function Home() {
   const Menimg="https://www.peruinformatic.com/inicio/oficial/images/slider/slider1.jpg"
   const Womenimg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-J_BoDwbsoKhwVLNcepsBPWRNjHnK7hrypw&usqp=CAU"
  //  const UpComming="https://www.peruinformatic.com/inicio/oficial/images/slider/slider1.jpg"
  return (
    <div>
          <div className='CategoryHead'>CodesWear.com</div>
          <GenderCategory gender={Menimg} Url="/ClothcategoryMen"  />
          <GenderCategory gender={Womenimg} Url="/ClothcategoryWomen"  />
          {/* <GenderCategory gender={UpComming} Url="/ClothcategoryUpcoming"  /> */}
    </div>
  )
}

export default Home