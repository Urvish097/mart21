import React, { useContext } from 'react';
import './Shop_singel.css';
import cardimg_2 from '../../../images/cardimg2.png';
import star from '../../../images/Star.png';
import Button from '../../../botton/botton';
import Arrow from '../../../images/icons/Aerrow.png';
import img1 from '../../../images/img4.png';
import cardimg_1 from '../../../images/cardimg1.png';
import cardimg_3 from '../../../images/cardimg2.png';
import cardimg_4 from '../../../images/cardimg5.png';
import Card1 from "../../../cards/card1";
import Subscribe from '../../../Subscribe/Subscribe'
import { useState } from 'react';
import Context from '../../../Context/Context';

function Shop_singel() {

  const card2 = [
    {
      Tages: "Vegetabel",
      Cardimg: img1,
      title: "Calabrese Broccoli",
      price: "20$",
      currentP: "$13.00",
      Rating: star
    },
    {
      Tages: "Vegetabel",
      Cardimg: cardimg_1,
      title: "Calabrese Broccoli",
      price: "20$",
      currentP: "$13.00",
      Rating: star
    },
    {
      Tages: "Vegetabel",
      Cardimg: cardimg_3,
      title: "Calabrese Broccoli",
      price: "20$",
      currentP: "$13.00",
      Rating: star
    },
    {
      Tages: "Vegetabel",
      Cardimg: cardimg_4,
      title: "Calabrese Broccoli",
      price: "20$",
      currentP: "$13.00",
      Rating: star
    },
  ]

  const [quantity, setquantity] = useState(1);
  const { value, setvalue } = useContext(Context);
  const { cartItem, setCartItem } = useContext(Context)
  const { image, setimg } = useContext(Context);

  const QuantityChange = (e) => {
    setquantity(parseInt(e.target.value));
  };
  //  Addcard = () => {
  //   const newValue = value + quantity;
  //   setvalue(newValue);
  //   localStorage.setItem("cart_item1", newValue);
  //   setcartitem((cartitem) => [...cartitem, img])
  // };

  const addToCart = () => {
    const existingItemIndex = cartItem.findIndex(
      (item) => item.titles === image.titles
    );

    if (existingItemIndex !== -1) {
      const updatedCartItem = [...cartItem];
      updatedCartItem[existingItemIndex].quantity += quantity;
      setCartItem(updatedCartItem);
      localStorage.setItem("cartItem", JSON.stringify(updatedCartItem));
    } else {
      setCartItem((cartItem) => [...cartItem, { ...image, quantity }]);
      localStorage.setItem(
        "cartItem",
        JSON.stringify([...cartItem, { ...image, quantity }])
      );
    }
    const newvalue = value + quantity;
    setvalue(newvalue);
    localStorage.setItem("value", newvalue);
  };
  // const newvalue = value + quantity;
  // setvalue(newvalue);
  // localStorage.setItem("value", newvalue);

  const cardimg = (hat) => {
    setimg(hat)
  }
  return (
    <>
      <section className='shop_p1_sec_1'>
        <div className='bg_img d-flex align-items-center justify-content-center'>
          <h1 className='color font_weigth font_family_roboto text-center'>Shop Single</h1>
        </div>
      </section>

      <section className='shop_p1_sec_2'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center justify-content-center'>
              <div className='box d-flex align-items-center justify-content-center'>
                <img src={image.Cardimg1} className='w-80 img1' alt="" />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='left_main1'>
                <h2 className='color font_weigth font_family_roboto mb-0'>Health Pistachios</h2>
                <img src={star} className='mb-2' alt="" />
                <div className='d-flex gap-2 mb-4'>
                  <strike>$20.00</strike>
                  <span className='color font_family_roboto font_weigth'>$13.00</span>
                </div>
                <p className='dummy_text'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                <div className='d-flex gap-3 align-items-center'>
                  <h5 className='color font_weigth font_family_roboto'>Quantity :</h5>
                  <input className='btn color bttn font_family_roboto font_weigth' type='number' value={quantity} onChange={QuantityChange} />
                  <div onClick={addToCart}>
                    <Button style={"#274C5B"} name={"Add To Cart"} color={"white"} font={"600"} icon={Arrow} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex button_main mb-4 align-items-center justify-content-center gap-3'>
            <Button style={"#274C5B"} name={"Product Description"} color={"white"} font={"600"} />
            <Button style={"#EFF6F1"} name={"Additional Info"} color={"#274C5B"} font={"700"} />
          </div>
          <p className='dummy_text1 text-center'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
        </div>
      </section>

      <section className='shop_p1_sec_3'>
        <div className='container'>
          <h1 className='color mb-4 font_weigth font_family_roboto text-center'>Related Products</h1>
          <div className='row'>
            {card2.map((item) => (
              <div className='col-md-3' onClick={() => cardimg(item.Cardimg)}>
                <Card1 Card3={item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='section_10 container'>
        <Subscribe />
      </section>
    </>
  )
}

export default Shop_singel