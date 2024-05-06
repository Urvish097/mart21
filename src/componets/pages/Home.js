import React from 'react';
import Button from '../botton/botton';
import banner from '../images/Image.png';
import Arrow from "../images/icons/Aerrow.png";
import cardimg1 from "../images/Image3.png"
import Cardimg from '../cardimages/cardimg';
import cardimg2 from '../images/Image2.png';
import Fruits from '../images/Fruits.png';
import icon_1 from '../images/icons/Group 1.png';
import icon_2 from '../images/icons/Group 2.png';
import img2 from '../images/Star.png';
import Card1 from '../cards/card1';
import Counter from '../counter/counter';
import Slider1 from '../slider/slider1';
import card2img1 from '../images/card2img1.png';
import card2img2 from '../images/card2img2.png';
import card2img3 from '../images/card2img3.png';
import card2img4 from '../images/card2img4.png';
import Card2 from '../cards2/card2';
import section_6img from '../images/sec_7img.jpg';
import section_8img1 from '../images/sec_8img1.jpg';
import section_8img2 from '../images/sec_8_img2.jpg';
import section_8img3 from '../images/sec_8_img3.jpg';
import section_9img1 from '../images/sec_9_1.png';
import section_9img2 from '../images/tameto.png';
import Card3 from '../Card3/Card3';
import { motion } from 'framer-motion';
import Subscribe from '../Subscribe/Subscribe';
import { card2 } from '../Data/Data';

const Home = () => {


    const card1 = [
        {
            img: cardimg1,
            title: "Natural!!",
            heading: "Get Garden Fresh Fruits",
            color: "white",
            headcolor: "white"
        },
        {
            img: cardimg2,
            title: "Offer!!",
            heading: "Get 10% Off on Vegetables",
            color: "#7EB693",
            headcolor: " #274C5B"
        }
    ]


    const counter = [
        {
            counter: "100%",
            name: "Orgaanic"
        },
        {
            counter: "285",
            name: "Active Produts"
        },
        {
            counter: "350+",
            name: "Organic Orchads"
        },
        {
            counter: "25+",
            name: "Years of Farming"
        },
    ]

    const card3 = [
        {
            tages: "Vegetabel",
            cardimg: card2img1,
            title: "Calabrese Broccoli",
            price: "20$",
            currentP: "$13.00",
            Rating: img2
        },
        {
            tages: "Vegetabel",
            cardimg: card2img2,
            title: "Calabrese Broccoli",
            price: "20$",
            currentP: "$13.00",
            Rating: img2
        },
        {
            tages: "Vegetabel",
            cardimg: card2img3,
            title: "Calabrese Broccoli",
            price: "20$",
            currentP: "$13.00",
            Rating: img2
        },
        {
            tages: "Vegetabel",
            cardimg: card2img4,
            title: "Calabrese Broccoli",
            price: "20$",
            currentP: "$13.00",
            Rating: img2
        }
    ]

    return (
        <>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className='section-1'>
                    <div className='bg_img'>
                        <div className='relative'>
                            <img src={banner} className='banner' alt="" />
                            <div className='banner_inner'>
                                <div>
                                    <p className='title_food mb-0'>100% Natural Food</p>
                                    <h2 className='title_life'>Choose the best healthire way of life</h2>
                                    <Button style={"#EFD372"} name={"Explore Now"} color={"#274C5B"} icon={Arrow} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className='section_2'>
                    <div className='container'>
                        <div className='row'>
                            {card1.map((item) => (
                                <div className='col-md-6 '>
                                    <Cardimg card={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='section_3'>
                    <div className='margin_sec_3'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <img src={Fruits} className='fruits_img' alt="" />
                                </div>
                                <div className='col-md-6'>
                                    <div className='dummy_text_main'>
                                        <p className='section_3_about mb-0'>About Us</p>
                                        <h2 className='color font_family_roboto Farmers'>We believe in Working Accredited Farmers</h2>
                                        <p className='dummy_text mb-4'>Simply dummy text of the printing and typesetting industry. Lorem had ceaed to been the industry standard dummy text ever since 1500s, when an unkown printer took a galley. </p>
                                        <div className='d-flex gap-4 mb-3'>
                                            <div className='icon_1 d-flex justify-content-center align-items-center'>
                                                <img src={icon_1} style={{ width: "53px", height: "46px" }} alt="" />
                                            </div>
                                            <div>
                                                <h3 className='color font_family_roboto font_weigth mb-0'>Organic Foods Only</h3>
                                                <p className='dummy_text2'>Simply dummy text of the printing and typesetting industry.Lorem Ipsum</p>
                                            </div>
                                        </div>
                                        <div className='d-flex gap-4 mb-4'>
                                            <div className='icon_1 d-flex justify-content-center align-items-center'>
                                                <img src={icon_2} style={{ width: "53px", height: "46px" }} alt="" />
                                            </div>
                                            <div>
                                                <h3 className='color font_family_roboto font_weigth mb-0'>Qulity Standers</h3>
                                                <p className='dummy_text2'>Simply dummy text of the printing and typesetting industry.Lorem Ipsum</p>
                                            </div>
                                        </div>
                                        <Button style={"#274C5B"} name={"Shop Now"} font={"700"} color={"white"} icon={Arrow} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section_4'>
                    <div className='container'>
                        <div>
                            <p className='card_Categories mb-0'>Categories</p>
                            <h1 className='color font_family_roboto font_weigth Produts mb-4'>Our Products</h1>
                        </div>
                        <div className='row'>
                            {card2.map((item2) => (
                                <div className='col-md-3'>
                                    <Card1 Card3={item2} />
                                </div>
                            ))}
                        </div>
                        <div className='load_btn'>
                            <Button style={"#274C5B"} name={"Load More"} font={"700"} color={"white"} icon={Arrow} />
                        </div>
                    </div>
                </section>

                <section className='section_5'>
                    <div className='container'>
                        <div className='heading_main'>
                            <div className=''>
                                <p className='sec5_heading mb-0'>Testimonial</p>
                                <h1 className='sec5_heading2 color font_weight mb-4'>What Our Customer Saying?</h1>
                            </div>
                            <div>
                                <Slider1 />
                            </div>
                            <div className='border_1'>

                            </div>
                            <div className='row main_row'>
                                {counter.map((item3) => (
                                    <div className='col-md-3 main_counter'>
                                        <Counter counter1={item3} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section_6 '>
                    <div className='bg-color sec-6_main'>
                        <div className='container'>
                            <div className='d-flex justify-content-between produts_main mb-4'>
                                <div>
                                    <p className='offer mb-0'>Offer</p>
                                    <h1 className='text-white font_family_roboto'>We Offer Organic For You</h1>
                                </div>
                                <div className='product'>
                                    <Button style={"#EFD372"} name={"View More Product"} font={"700"} color={"#274C5B"} icon={Arrow} class={"products_btn"} />
                                </div>
                            </div>
                            <div className='row'>
                                {card3.map((item4) => (
                                    <div className='col-md-3'>
                                        <Card2 card2={item4} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section_7 w-100'>
                    <div className='row m-0'>
                        <div className='col-md-6 p-0'>
                            <div className='right_img'>
                                <img className=' w-100' src={section_6img} alt="" />
                            </div>
                        </div>
                        <div className='col-md-6 d-flex align-items-center'>
                            <div className='eco_main'>
                                <div className='heading mb-4'>
                                    <p className='Eco_Friendly mb-0'>Eco Friendly</p>
                                    <h1 className='font_family_roboto font_weight color store'>Econis is a Friendly
                                        Organic Store</h1>
                                </div>
                                <div>
                                    <h5 className='font_family_roboto color mb-0'>Start with Our Company First</h5>
                                    <p className='points'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                                </div>
                                <div>
                                    <h5 className='font_family_roboto color mb-0'>Learn How to Grow Yourself</h5>
                                    <p className='points'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                                </div>
                                <div>
                                    <h5 className='font_family_roboto color mb-0'>Farming Strategies of Today</h5>
                                    <p className='points'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section_8'>
                    <div className='bg_sec_8'>
                        <div className='row m-0'>
                            <div className='col-md-4'>
                                <div className='gallery_1'>
                                    <img src={section_8img1} className='w-100' alt="" />
                                    <div className='organic color'>
                                        Organic Juice
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='gallery_1'>
                                    <img src={section_8img2} className='w-100' alt="" />
                                    <div className='organic color'>
                                        Organic Food
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-4'>
                                <div className='gallery_1'>
                                    <img src={section_8img3} className='w-100' alt="" />
                                    <div className='organic color'>
                                        Nuts Cookis
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section_9'>
                    <div className='container'>
                        <div className='heading mb-4'>
                            <h2 className='news'>News</h2>
                            <div className='d-flex align-items-center'>
                                <h1 className='font_family_roboto color heading_text'>Discover weekly content about organic food, & more</h1>
                                <div className='sec_9_btn'>
                                    <Button style={"white"} name={"Shop Now"} font={"700"} color={"#274C5B"} border={"1px solid #274C5B"} icon={Arrow} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 '>
                                <Card3 src={section_9img2} />
                            </div>
                            <div className='col-md-6 '>
                                <Card3 src={section_9img1} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='section_10'>
                    <div className='container'>
                        <Subscribe />
                    </div>
                </section>
            </motion.div>
        </>
    )
}

export default Home