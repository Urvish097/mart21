import React, { useContext } from 'react';
import './shop.css';
import banner from '../../images/Shop_banner.png';
import Card1 from '../../cards/card1';
import img1 from '../../images/img4.png';
import cardimg_1 from '../../images/cardimg1.png';
import cardimg_2 from '../../images/cardimg2.png';
import cardimg_3 from '../../images/cardimg5.png';
import cardimg_4 from '../../images/cardimg6.png';
import cardimg_5 from '../../images/cardimg7.png';
import cardimg_6 from '../../images/cardimg8.png';
import cardimg_7 from '../../images/cardimg9.png';
import img2 from '../../images/Star.png';
import cardimg_8 from "../../images/card_img_8.png";
import cardimg_9 from "../../images/card_img_9.png";
import cardimg_10 from "../../images/card_img_10.png";
import cardimg_11 from "../../images/card_img_11.png";
import Subscribe from '../../Subscribe/Subscribe';
import '../../../App.css';
import Context from '../../Context/Context';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Shop = () => {

    const card2 = [
        {
            Tages: "Vegetabel",
            Cardimg: img1,
            title: "Calabrese Broccoli",
            price: "20$",
            currentP: "$13.00",
            Rating: img2,
            url: "/"
        },
        {
            Tages: "Fresh",
            Cardimg: cardimg_1,
            title: "Fresh Banana Fruites",
            price: "20$",
            currentP: "$14.00",
            Rating: img2,
            url: "/"
        },
        {
            Tages: "Millets",
            Cardimg: cardimg_2,
            title: "White Nuts",
            price: "20$",
            currentP: "$15.00",
            Rating: img2,
            url: "/Shop_singel"
        },
        {
            Tages: "Vegetabel",
            Cardimg: cardimg_3,
            title: "Vegan Red Tomato",
            price: "20$",
            currentP: "$17.00",
            Rating: img2,
            url: "/"
        },
        {
            Tages: "Health",
            Cardimg: cardimg_4,
            title: "Mung Bean",
            price: "20$",
            currentP: "$11.00",
            Rating: img2,
            url: "/"
        },
        {
            Tages: "Nuts",
            Cardimg: cardimg_5,
            title: "Brown Hazelnut",
            price: "20$",
            currentP: "$12.00",
            Rating: img2,
            url: "/"
        },
        {
            Tages: "Fresh",
            Cardimg: cardimg_6,
            title: "Eggs",
            price: "20$",
            currentP: "$17.00",
            Rating: img2,
            url: "/"
        },
        {
            Tages: "Fresh",
            Cardimg: cardimg_7,
            title: "Zelco Suji Elaichi Rusk",
            price: "20$",
            currentP: "$15.00",
            Rating: img2,
            url: "/"
        },
        {
            Tages: "Health",
            Cardimg: cardimg_8,
            title: "Mung Bean",
            price: "20$",
            currentP: "$11.00",
            Rating: img2,
            url: "/"
        },
        {
            Tages: "Nuts",
            Cardimg: cardimg_9,
            title: "White Hazelnut",
            price: "20$",
            currentP: "$12.00",
            Rating: img2,
            url: "/"
        },
        {
            Tages: "Fresh",
            Cardimg: cardimg_10,
            title: "Fresh Corn",
            price: "20$",
            currentP: "$17.00",
            Rating: img2,
            url: "/"
        },
        {
            Tages: "Fresh",
            Cardimg: cardimg_11,
            title: "Organic Almonds",
            price: "20$",
            currentP: "$15.00",
            Rating: img2,
            url: "/"
        },
    ]

    const { img, setimg } = useContext(Context);

    const addimg = (index) => {
        switch (index) {
            case 0:
                setimg({ Cardimg1: img1, title: "Calabrese Broccoli", price:"13" })
                break;
            case 1:
                setimg({ Cardimg1: cardimg_1, title: "Fresh Banana Fruites", price: "14" })
                break;
            case 2:
                setimg({ Cardimg1: cardimg_2, title: "White Nuts", price: "15" })
                break;
            case 3:
                setimg({ Cardimg1: cardimg_3, title: "Vegan Red Tomato", price: "17" })
                break;
            case 4:
                setimg({ Cardimg1: cardimg_4, title: "Mung Bean", price: "11" })
                break;
            case 5:
                setimg({ Cardimg1: cardimg_5, title: "Brown Hazelnut", price: "12" })
                break;
            case 6:
                setimg({ Cardimg1: cardimg_6, title: "Eggs", price: "17" })
                break;
            case 7:
                setimg({ Cardimg1: cardimg_7, title: "Zelco Suji Elaichi Rusk", price: "15" })
                break;
            case 8:
                setimg({ Cardimg1: cardimg_8, title: "Mung Bean", price: "11" })
                break;
            case 9:
                setimg({ Cardimg1: cardimg_9, title: "White Hazelnut", price: "12" })
                break;
            case 10:
                setimg({ Cardimg1: cardimg_10, title: "Fresh Corn", price: "17" })
                break;
            case 11:
                setimg({ Cardimg1: cardimg_11, title: "Organic Almonds", price: "15" })
                break;
            default:
                break;
        }
    }

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

                <section className='shop_sec_1'>
                    <div className='bg_img'>
                        <div className='main'>
                            <img src={banner} className='w-100 banner' alt="" />
                            <h1 className='color heading font_weigth'>Shop</h1>
                        </div>
                    </div>
                </section>

                <section className='shop_sec_2'>
                    <div className='container'>
                        <div className='row'>
                            {card2.map((card2, index) => (
                                <div className='col-md-3'>
                                    <Link to={"/Shop_singel"}>
                                        <div onClick={() => addimg(index, card2.Cardimg, card2.price, card2.title)}>
                                            <Card1 Card3={card2} />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <div className='section_10 container'>
                    <Subscribe />
                </div>
            </motion.div>
        </>
    )
}

export default Shop