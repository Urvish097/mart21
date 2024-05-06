import React from 'react';
import { FaAngleRight } from "react-icons/fa6";

function card1({ pass }) {
    return (
        <>
            <div className='card_main1'>
                <div className='img_main'>
                    <img src={pass.img} className='w-100 img1 mb-2' alt="" />
                    <div className='outer_box'>
                        <div className='box d-flex align-items-center justify-content-center'>
                            <div className='icon_main d-flex align-items-center justify-content-center'>
                                <FaAngleRight className='icon p-0 m-0' />
                            </div>
                        </div>
                    </div>
                </div>
                <h4 className='color font_family_roboto ms-1 mb-1 font_weigth'>{pass.title}</h4>
                <h6 className='heading ms-1'>{pass.type}</h6>
            </div>
        </>
    )
}

export default card1