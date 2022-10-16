import React from 'react'
import { Link } from "react-router-dom"

function LowerWear(props) {
    const { Name,type } = props
    const divStyle = {
        display: "flex",
        width: '69%',
        height: "100%",
        margin: "auto",
        justifyContent: "space-around",
        flexWrap: "wrap"
    }
    const subCategory = {
        display: "flex",
        width: '200px',
        margin: "10px 0px",
        border: "2px solid red",
        flexDirection: "Column",
    }
    return (
        <>
            {Name}
            <div style={divStyle}>
            {
             Object.keys(type).map(e=>{
              return  <Link key={e}  to={`/Clothcategory/${Name}/${type[e]}`}>
                <div  style={subCategory}>
                  <img style={{width:"100%"}} src="https://i.pinimg.com/originals/e5/5c/f7/e55cf78dcdda5204ab2daeebc42c6e4f.png" alt="" />
                {type[e]}
                </div>
                </Link>
            })}
            </div>
        </>
    )
}

export default LowerWear