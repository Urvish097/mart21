import React from 'react';
import './Contact.css';
import img1 from "../../images/Contact.banna.jpg";
import email from '../../images/icons/email_icon.png';
import phone from '../../images/icons/call_icon.png';
import insta from "../../images/icons/Insta.png";
import face from '../../images/icons/facebook.png';
import twiter from "../../images/icons/x icon.png";
import print from '../../images/icons/print.png';
import loaction from '../../images/icons/location.png';
import Button from '../../botton/botton';
import Subcribe from '../../Subscribe/Subscribe'
import { motion } from 'framer-motion';

const Contact = () => {

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <section className='Contact_sec_1'>
                    <div className='Contact_bg'>
                        <div className='main'>
                            <h1 className='color font_family_roboto font_weigth text-center'>Contact Us</h1>
                        </div>
                    </div>
                </section>

                <section className='Contact_sec_2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div>
                                    <img src={img1} className='banna_img w-100' alt="" />
                                </div>
                            </div>
                            <div className='col-md-6 left_main2'>
                                <div className='mt-4 left_main3'>
                                    <h1 className='color font_weigth font_family_roboto heading'>We'd love to talk about how we can work together.</h1>
                                    <p className='dummy_text mb-4'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                                    <div className='masseger_main mb-3'>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <div className='email_main d-flex align-items-center justify-content-center mt-2'>
                                                    <img src={email} alt="" />
                                                </div>
                                            </div>
                                            <div className='col-md-9'>
                                                <div className='ms-3 mt-3'>
                                                    <h5 className='color font_family_roboto mb-0'>Massege</h5>
                                                    <p className='dummy_text'>support@organic.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='masseger_main mb-4'>
                                        <div className='row'>
                                            <div className='col-md-3'>
                                                <div className='email_main d-flex align-items-center justify-content-center mt-2'>
                                                    <img src={phone} alt="" />
                                                </div>
                                            </div>
                                            <div className='col-md-9'>
                                                <div className='ms-3 mt-3 mb-4'>
                                                    <h5 className='color font_family_roboto mb-0'>Contact Us</h5>
                                                    <p className='dummy_text'>+01 123 456 789</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-flex gap-4'>
                                        <div className='icon_main d-flex align-items-center justify-content-center'>
                                            <img src={insta} alt="" />
                                        </div>
                                        <div className='icon_main d-flex align-items-center justify-content-center'>
                                            <img src={face} alt="" />
                                        </div>
                                        <div className='icon_main d-flex align-items-center justify-content-center'>
                                            <img src={twiter} alt="" />
                                        </div>
                                        <div className='icon_main d-flex align-items-center justify-content-center'>
                                            <img src={print} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='Contact_sec_3'>
                    <div className='container'>
                        <div className='tree_bg'>
                            <div className='row'>
                                <div className='col-md-6'>
                                </div>
                                <div className='col-md-6'>
                                    <div className='box_main'>
                                        <h3 className='location mb-0'>Location</h3>
                                        <h1 className='color font_family_roboto font_weigth'>Our Farms</h1>
                                        <p className='dummy_text mb-4'>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using.</p>
                                        <div className='d-flex gap-2'>
                                            <div>
                                                <img src={loaction} alt="" />
                                            </div>
                                            <div>
                                                <p className='location'><span className='addres'>New York, USA: </span> 299 Park Avenue New York, New York 10171</p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-2'>
                                            <div>
                                                <img src={loaction} alt="" />
                                            </div>
                                            <div>
                                                <p className='location'><span className='addres'>New York, USA: </span> 299 Park Avenue New York, New York 10171</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='Contact_sec_4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div>
                                    <label htmlFor="Full Name" className='color font_family_roboto font_weigth d-block mb-3'>Full Name*</label>
                                    <input type="name" className='form-control input_common font_family_roboto' placeholder='Enter Your Name' />

                                    <label htmlFor="Full Name" className='color font_family_roboto font_weigth d-block mb-3'>Company*</label>
                                    <input type="name" className='form-control input_common font_family_roboto' placeholder='Enter Your Company Name Here ' />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div>
                                    <label htmlFor="Full Name" className='color font_family_roboto font_weigth d-block mb-3'>Your Email*</label>
                                    <input type="name" className='form-control input_common font_family_roboto' placeholder='Your Email Address' />

                                    <label htmlFor="Full Name" className='color font_family_roboto font_weigth d-block mb-3'>Subject*</label>
                                    <input type="name" className='form-control input_common font_family_roboto' placeholder='How Can We Help' />
                                </div>
                            </div>
                        </div>
                        <div className='text_main'>
                            <label htmlFor="massage" className='color font_family_roboto font_weigth mb-3'>Massage*</label>
                            <textarea cols="30" rows="10" className='form-control text_area' placeholder='hello there,i would like to talk about how to...'></textarea>
                        </div>
                        <Button style={"#274C5B"} name={"Send Message"} font={"700"} color={"white"} />
                    </div>
                </section>

                <section className='section_10 container'>
                    <Subcribe />
                </section>
            </motion.div>
        </>
    )
}

export default Contact