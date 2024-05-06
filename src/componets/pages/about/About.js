import React from 'react';
import './About.css';
import Banner from '../../images/About_banner.png';
import Sec_2_1 from '../../images/sec2_img1.png';
import Tactor from '../../images/icons/Tractor.png';
import Factory from '../../images/icons/fact.png';
import Button from '../../botton/botton';
import Arrow from '../../images/icons/Aerrow.png';
import img1 from '../../images/sec_3_img1.jpg';
import Card from './about_compo/Card';
import icon1 from "../../images/icons/about_cart.png";
import icon2 from '../../images/icons/about_flower.png';
import icon3 from '../../images/icons/about_call.png';
import icon4 from '../../images/icons/about_proct.png';
import ExportCard from './about_compo/ExportCard';
import expert1 from '../../images/export1.jpg';
import expert2 from '../../images/export2.jpg';
import expert3 from '../../images/export3.jpg';
import face from '../../images/icons/facebook.png';
import insta from '../../images/icons/Insta.png';
import twiter from '../../images/icons/x icon.png'
import Card2 from './about_compo/Card2';
import Spicy from "../../images/Spicy.jpg";
import Nuts from "../../images/nuts.jpg";
import Vegetable from "../../images/Vegetable.jpg";
import Fruits from "../../images/Fruits2.jpg";
import "../../../App.css"
import Subscribe from '../../Subscribe/Subscribe';
import { motion } from 'framer-motion';

const About = () => {

  const Card3 = [
    {
      icons: icon1,
      heading: "Return Policy",
      text: "Simply dummy text of the printintypesetting industry."
    },
    {
      icons: icon2,
      heading: "100% Fresh",
      text: "Simply dummy text of the printintypesetting industry."
    },
    {
      icons: icon3,
      heading: "Support 24/7",
      text: "Simply dummy text of the printintypesetting industry."
    }, {
      icons: icon4,
      heading: "Secured Payment",
      text: "Simply dummy text of the printintypesetting industry."
    }
  ]

  const experts = [
    {
      img: expert1,
      heading: "Giovani Bacardo",
      job: "Farmer",
      instagram: insta,
      facebook: face,
      twiter: twiter
    },
    {
      img: expert2,
      heading: "Marianne Loreno",
      job: "Designer",
      instagram: insta,
      facebook: face,
      twiter: twiter
    },
    {
      img: expert3,
      heading: "Riga Pelore",
      job: "Farmer",
      instagram: insta,
      facebook: face,
      twiter: twiter
    }
  ]

  const offer_card = [
    {
      img: Spicy,
      heading: "Spicy"
    },
    {
      img: Nuts,
      heading: "Nuts & Feesd"
    },
    {
      img: Vegetable,
      heading: "Fruits"
    },
    {
      img: Fruits,
      heading: "Vegetable"
    },
  ]
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <section className='about_sec_1'>
        <div className='bg_img'>
          <div className='relative'>
            <div>
              <img src={Banner} className='banner' alt="" />
            </div>
            <div className='about'>
              <h1 className='color font_family_roboto'>About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className='about_sec_2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <div>
                <img src={Sec_2_1} className='w-100' alt="" />
              </div>
            </div>
            <div className='col-md-6'>
              <div>
                <div className='heading'>
                  <h2 className='About_head mb-1'>About Us</h2>
                  <h1 className='color font_family_roboto font_weigth title'>We can do Creative Things for Success</h1>
                </div>
                <div className='dummy_main mb-4'>
                  <p className='dummy_text'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                  <p className='dummy_text'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                </div>
                <div className='d-flex mb-4 main_icon'>
                  <div className='d-flex gap-2'>
                    <img src={Tactor} className='w-35 h-35' alt="" />
                    <h5 className='color font_family_roboto tactor_info'>Modern Agriculture Equipment</h5>
                  </div>
                  <div>
                    <div className='d-flex gap-2'>
                      <img src={Factory} className='w-35 h-35 m-0' alt="" />
                      <h5 className='color font_family_roboto m-0 fact_info'>No growth hormones are used</h5>
                    </div>
                  </div>
                </div>
                <Button style={"#274C5B"} name={"Explore More"} color={"white"} font={"600"} icon={Arrow} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='about_sec_3 sec_3_bg'>
        <div className='container'>
          <div className='row main_market'>
            <div className='col-md-6'>
              <div>
                <div>
                  <h2 className='sec3_heading'>Why Choose Us?</h2>
                  <h1 className='color font_family_roboto font_weigth sec3_heading2'>We do not buy from the open market & traders.</h1>
                  <p className='dummy_text'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
                </div>
                <div className='produtcs_main'>
                  <div className='button_produts d-flex align-items-center  justify-content-center gap-2'>
                    <div className='cricle_icon'>
                    </div>
                    <h6 className='color font_family_roboto mt-2 fw-bold'>100% Natural Product</h6>
                  </div>
                  <p className='dummy_text2 mt-4 ms-4'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                  <div className='button_produts d-flex align-items-center  justify-content-center gap-2'>
                    <div className='cricle_icon'>
                    </div>
                    <h6 className='color font_family_roboto mt-2 fw-bold'> Increases resistance</h6>
                  </div>
                  <p className='dummy_text2 mt-4 ms-4 mb-4'>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <img src={img1} className='w-100 img1' alt="" />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-1'>
            </div>
            <div className='col-md-10'>
              <div className='row'>
                {Card3.map((items5) => (
                  <div className='col-md-3'>
                    <Card about_card={items5} />
                  </div>
                ))}
              </div>
            </div>
            <div className='col-md-1'>
            </div>
          </div>
        </div>
      </section>

      <section className='about_sec_4'>
        <div className='mb-4'>
          <h2 className='heading text-center mb-0'>Team</h2>
          <h1 className='color font_family_roboto font_weigth text-center'>Our Organic Experts</h1>
          <p className='dummy_text text-center'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        </div>
        <div className='container'>
          <div className='row'>
            {experts.map((items6) => (
              <div className='col-md-4'>
                <ExportCard expert={items6} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='about_sec_5'>
        <div className='bg_color'>
          <div className='container'>
            <div>
              <h2 className='heading text-center'>About Us</h2>
              <h1 className='font_family_roboto text-center font_weigth text-white'>What We Offer for You</h1>
            </div>

            <div className='row'>
              {offer_card.map((items7) => (
                <div className='col-md-3'>
                  <Card2 offer={items7} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className='section_10 container'>
     <Subscribe/>
      </div>
      </motion.div>
    </>
  )
}

export default About