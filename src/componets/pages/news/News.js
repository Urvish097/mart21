import React from 'react';
import "./News.css";
import { motion } from 'framer-motion';

const News = () => {

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <section className='news_sec_1'>
                    <div className='news_bg d-flex align-items-center justify-content-center'>
                        <h1 className='color font_family_roboto text-center font_weigth'>Recent News</h1>
                    </div>
                </section>

                <section className='news_sec_2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>

                            </div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default News