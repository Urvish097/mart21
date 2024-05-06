import React from 'react';
import './card1.css';

function Card1({ Card3 }) {
    return (
        <>

            <div className='card_main mb-4'>
                <div className='card_tag bg-color text-white mb-4'>
                    {Card3.Tages}
                </div>
                <div>
                    <img className='cardimg ratio ratio-4x3 mb-2' src={Card3.Cardimg} alt="" />
                </div>
                <p className='color font_family_roboto card_title mb-2'>{Card3.title}</p>
                <div className='border'>
                </div>
                <div className='d-flex gap-2'>
                    <strike>{Card3.price}</strike>
                    <span className='price_tag color '>{Card3.currentP}</span>
                    <div className='star '>
                        <img alt="" src={Card3.Rating} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card1