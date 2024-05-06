import React, { useContext } from 'react';
import './Page1.css';
import img1 from "../../../images/proj.p1.png";
import Subscribe from '../../../Subscribe/Subscribe';
import Context from '../../../Context/Context';
import { motion } from 'framer-motion';

const Page1 = () => {

    const { project } = useContext(Context);

    window.scrollTo(0, 0);

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <section className='proj_p1_sec_1'>
                    <div className='p1_bg' style={{ backgroundImage: `url(${project})` }}>
                    </div>
                    <div className='container'>
                        <div className='box_main '>
                            <div className='row'>
                                <div className='col-md-7'>
                                    <div className='right_main'>
                                        <h1 className='heading color font_weigth font_family_roboto'>Black Raspberry</h1>
                                        <p className='dummy_text'>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                                    </div>
                                </div>
                                <div className='col-md-1'>

                                </div>
                                <div className='col-md-4'>
                                    <div className='left_box'>
                                        <h4 className='color font_family_roboto'>Date :</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='proj_p1_sec_2'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-2'>
                            </div>
                            <div className='col-md-8'>
                                <div>
                                    <h2 className='color font_family_roboto font_weigth mb-4'>About The Farm:</h2>
                                    <p className='dummy_text'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                    <p className='dummy_text mb-4'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                                    <img src={img1} className='w-100 img1 mb-3' alt="" />
                                    <p className='text-center mb-4'>The Organic Products</p>
                                    <h2 className='color font_family_roboto font_weigth mb-3'>How To Farm:</h2>
                                    <p className='dummy_text'>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                    <p className='dummy_text'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                                    <h2 className='color font_family_roboto font_weigth'>Conclusion:</h2>
                                    <p className='dummy_text'>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                                    <p className='dummy_text'>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
                                </div>
                            </div>
                            <div className='col-md-2'>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section_10 container'>
                    <Subscribe />
                </section>
            </motion.div>
        </>
    )
}

export default Page1