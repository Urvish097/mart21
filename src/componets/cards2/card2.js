import React from 'react'

function Card2({card2}) {
    return (
        <>
            <div className='card_main mb-4'>
                <div className='card_tag bg-color text-white mb-4'>
                    {card2.tages}
                </div>
                <div>
                    <img className='cardimg ratio ratio-4x3' src={card2.cardimg} alt="" />
                </div>
                <p className='color font_family_roboto card_title mb-2'>{card2.title}</p>
                <div className='border'>
                </div>
                <div className='d-flex gap-2'>
                    <strike>{card2.price}</strike>
                    <span className='price_tag color '>{card2.currentP}</span>
                    <div className='star '>
                        <img alt="" src={card2.Rating} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card2