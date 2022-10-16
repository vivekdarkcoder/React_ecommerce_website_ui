import React from 'react'
import { Link } from 'react-router-dom'


function UpperWear(props) {
    const {Name,type}=props
   
    const divStyle={
        display:"flex",
        width:'69%',
        height:"100%",
        margin:"auto",
        justifyContent:"space-between",
        flexWrap:"wrap"
      }
      const subCategory={
        display:"flex",
        width:'200px',
        margin:"10px 0px",
        border :"2px solid red",
        flexDirection:"Column",
        // backgroundColor:"blue",
      }
  return (
      <div style={divStyle}>
        {/* {Name} */}
        {
             Object.keys(type).map(e=>{
              return  <Link key={e}  to={`/Clothcategory/${Name}/${type[e]}`}>
                <div  style={subCategory}>
                  <img style={{width:"100%"}} src="https://i.pinimg.com/originals/e5/5c/f7/e55cf78dcdda5204ab2daeebc42c6e4f.png" alt="" />
                {type[e]}
                </div>
                </Link>
            })
        }
   
     {/* <Link  to={`/Clothcategory/${Name}/T-shirt`}>
     <div style={subCategory} >
         tshirt
       <img style={{width:"100%"}} src="https://i.pinimg.com/originals/e5/5c/f7/e55cf78dcdda5204ab2daeebc42c6e4f.png" alt="" />
     </div>
     </Link>
     <Link  to={`/Clothcategory/${Name}/Hoodies`}>
     <div style={subCategory} >
         hoodies
       <img style={{width:"100%"}} src="https://i.pinimg.com/originals/e5/5c/f7/e55cf78dcdda5204ab2daeebc42c6e4f.png" alt="" />
     </div>
     </Link> */}
   </div>
  )
}

export default UpperWear