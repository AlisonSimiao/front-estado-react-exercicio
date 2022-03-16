import React from 'react'
import "./style.css";

import back from "./../../assets/card-back.png"
import {useState} from "react"

function Card(props) {
  const card   = props.card;
  
  return (
    <div className='card'
      onClick={props.onClick}
    >
       { card.turned?  <img src={card.image} alt="imagem card"/>:  <img src={ back} alt="imagem card"/>}
    </div>
  )
}

export default Card