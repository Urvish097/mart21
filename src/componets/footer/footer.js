import React from 'react'
import './Footer.css'
import logo2 from '../images/Logo.png'
import insta from '../images/icons/Insta.png'
import facebook from '../images/icons/facebook.png'
import print from '../images/icons/print.png'
import x from "../images/icons/x icon.png"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-4 col-sm-12 d-flex justify-content-center d-md-block'>
                        <div className='main_footer'>
                            <div className='footer_inner'>
                                <h2 className='font_family_roboto color contact_us mb-3'>Contact Us</h2>
                                <div className='mb-4'>
                                    <p className='color email_1 mb-0'>Email</p>
                                    <p className='color email'>needhelp@Organia.com</p>
                                </div>
                                <div className='mb-4'>
                                    <p className='color email_1 mb-0'>Phone</p>
                                    <p className='color phone'>666 888 888</p>
                                </div>
                                <div className='mb-4'>
                                    <p className='color addres mb-0'>Address</p>
                                    <p className='color addres_1'>88 road, borklyn street, USA</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                        <div className='d-flex gap-2 align-items-center justify-content-center mb-3'>
                            <img src={logo2} className='footer_img' alt="" />
                            <h2 className='color'>Organic</h2>
                        </div>
                        <div>
                            <p className='dummy_text1 mb-4 w-100-sm'>Simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum simply dummy text of the printing </p>
                        </div>
                        <div className='d-flex align-items-center justify-content-center gap-4'>
                            <div className='insta_logo_main'>
                                <img src={insta} alt="" />
                            </div>
                            <div className='insta_logo_main'>
                                <img src={facebook} alt="" />
                            </div>
                            <div className='insta_logo_main'>
                                <img src={x} alt="" />
                            </div>
                            <div className='insta_logo_main'>
                                <img src={print} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 d-flex justify-content-center d-md-block'>
                        <div className='left_main'>
                            <div className='left_inner'>
                                <h2 className='font_family_roboto color mb-4'>Utility Pages</h2>
                                <p className='color_footer mb-2'>Style Guide</p>
                                <p className='color_footer mb-2'><Link to={"/error"}>404 Not Found</Link></p>
                                <p className='color_footer mb-2'><Link to={"/Protected"}>Password Protected</Link></p>
                                <p className='color_footer mb-2'><Link to={"/Licenses"}>Licences</Link></p>
                                <p className='color_footer mb-2'><Link to={"/Changelog"}>Changelog</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer