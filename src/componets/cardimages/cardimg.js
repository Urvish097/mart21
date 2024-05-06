import React from 'react';
import './cardimg.css'

function Cardimg({ card }) {
  return (
    <>
      <div className='card border-0 p-5' style={{ backgroundImage: `url(${card.img})` }}>
        <div className='row'>
          <div className='col-md-6'>
            <div className='mt-4'>
            <span className='fs-4  title_card' style={{ color: card.color }}>{card.title}</span>
            <h3 className='fs-1 head_card' style={{ color: card.headcolor }}>{card.heading}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cardimg