import React from 'react'
import "../styles/singleitems.css"
function ItemCart() {
  return (
    <div> 
    <div className={"itemCart"}>
    <div className="imgContainer">
    <img className={"itemImg"} src="https://rukminim1.flixcart.com/image/452/542/kuof5ow0/t-shirt/3/7/v/m-hb0885-adidas-original-imag7qsfujp7f7sb.jpeg?q=50" alt="" />
    </div>
    <div className="itemDettail">
    <div  style={{margin:"2px 4px"}}>ADIDAS</div>
    <div  style={{margin:"2px 4px"}}>Round Neck Red T-Shirt</div>
    <p  style={{margin:"2px 4px"}} className="price"><p className="fa-solid fa-indian-rupee-sign"></p> 899</p>
    <div ><div  style={{margin:"2px 4px",color: "rgb(106 12 238)", fontSize: "14px", fontWeight: "700"}}>Bank Offer</div></div>
    <div  style={{margin:"2px 4px"}}><span className="_376u-U">Size</span>&nbsp;S, M</div>
    </div>
</div></div>
  )
}

export default ItemCart