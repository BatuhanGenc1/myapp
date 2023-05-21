import React from 'react'

function Card(props) {
  return (
    <div className='card'>
        <img src={props.cardUrl}alt="" />
        <h3>{props.cardTitle}</h3>
        <p>{props.cardContent}</p>

    </div>
  )
}

export default Card