import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCart from '../Component/ItemCart'
import "../styles/singleitems.css"

function ClothItems(props) {

    const {slug}=useParams()
    console.log(slug)
  return (
      <>
    <div className="CategoryHead"> For {slug}</div>
    <div className={"itemsContainer"}>
       <ItemCart/>
       <ItemCart/>
       <ItemCart/>
       <ItemCart/>
       <ItemCart/>
       <ItemCart/>
       <ItemCart/>
       <ItemCart/>
       <ItemCart/>
       <ItemCart/>
       <ItemCart/>
    </div>
    </>
  )
}

export default ClothItems