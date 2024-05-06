import React, { useContext, useEffect, useState } from 'react';
import './Total.css';
import cardimg_2 from '../../images/cardimg2.png';
import Button from '../../botton/botton';
import Arrow from '../../images/icons/Aerrow.png';
import Context from '../../Context/Context';

const Total = () => {

    const [quantity, setQuantity] = useState(1);
    const { value, setvalue, image } = useContext(Context);
    const { cartItem, setCartItem } = useContext(Context);

    useEffect(() => {
        const storedCart = localStorage.getItem("value");
        if (storedCart) {
            setQuantity(parseInt(storedCart));
            setvalue(parseInt(storedCart));
        }

        const storedCartItem = localStorage.getItem("cartItem");
        if (storedCartItem) {
            setCartItem(JSON.parse(storedCartItem));
        }
    }, []);

    const handleAddition = (item) => {
        const updatedCartItem = cartItem.map((cartItem) =>
            cartItem?.titles === item?.titles
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
        setCartItem(updatedCartItem);
        localStorage.setItem("cartItem", JSON.stringify(updatedCartItem));
    };

    const handleSubtraction = (item) => {
        const updatedCartItem = cartItem.map((cartItem) =>
            cartItem?.titles === item?.titles && cartItem.quantity > 1
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
        );
        setCartItem(updatedCartItem);
        localStorage.setItem("cartItem", JSON.stringify(updatedCartItem));
    };

    const handleRemove = (item) => {
        const updatedCartItem = cartItem.filter(
            (cartItem) => cartItem.titles !== item.titles
        );
        setCartItem(updatedCartItem);
        localStorage.setItem("cartItem", JSON.stringify(updatedCartItem));
    };

    const total = cartItem.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );



    // const [quantity, setQuantity] = useState(1);
    // const { value, setvalue } = useContext(Context);
    // const { cartitem, setcartitem } = useContext(Context)
    // const { img, setimg } = useContext(Context);

    // useEffect(() => {
    //     setQuantity()
    // }, [value])

    // const handleQuantityChange = (event) => {
    //     const newQuantity = parseInt(event.target.value);
    //     setQuantity(newQuantity);
    // };

    // const handleRemove = (indexToRemove) => {
    //     setcartitem(prevCartItems => {
    //         const updatedCartItems = [...prevCartItems];
    //         updatedCartItems.splice(indexToRemove, 1);
    //         return updatedCartItems;
    //     });
    //     setQuantity(0);
    //     localStorage.setItem("cart_item1", 0);
    //     setvalue(prev => !prev);
    // };
    // const totalPrice = img.price * quantity;

    return (
        <>
            <section className='total_sec_1'>
                <div className='container'>
                    <div className='row border-bottom mb-5'>
                        {cartItem.map((cart, index) => (
                            <div className='col-lg-8'>
                                <div className='row'>
                                    <div className='col-lg-5'>
                                        <div>
                                            <img src={cart.Cardimg1} className='w-100' alt="" />
                                        </div>
                                    </div>
                                    <div className='col-lg-5'>
                                        <div className='mt-5'>
                                            <h2 className='color font_famliy_roboto '>{cart.title}</h2>
                                            <p className='color mb-2 font_family_roboto fs-5'>$ {cart.price}.00 USD</p>
                                            <p className='color fw-medium' onClick={() => handleRemove(index)}>Remove</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-2'>
                                        <div className='mt-5'>
                                            <button onClick={handleAddition}>+</button>
                                            <input type="number" className='total_input' value={quantity} min={"0"} />
                                            <button onClick={handleSubtraction}>-</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='d-flex justify-content-around'>
                        <p className='color fs-3 font_family_roboto'>Subtotal</p>
                        <h4 className='color font_family_roboto'>$ {total}.00 USD</h4>
                    </div>
                    <div className='text-center'>
                        <Button style={"#274C5B"} name={"Continue To Checkout"} color={"white"} font={"600"} icon={Arrow} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Total;
