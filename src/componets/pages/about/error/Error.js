import React from 'react';
import './error.css';
import err from '../../../images/404.png';
import '../../../../App.css';
import { motion } from 'framer-motion';
const Error = () => {
    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <section className='error_sec_1'>
                    <div className='error_bg'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6'>
                                </div>
                                <div className='col-md-6 main'>
                                    <div className='ms-4'>
                                        <img src={err} className='' alt="" />
                                        <p className='color font_family_roboto font_weigth page ms-4 mb-0'>Page not found</p>
                                        <p className='exist ms-3'>The page you are looking for doesn't exist or has been moved</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Error