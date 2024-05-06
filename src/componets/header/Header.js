import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import logo from '../images/Logo.png';
import { Link } from 'react-router-dom';
import Context from '../Context/Context';

function Header({ nav }) {
    const { value } = useContext(Context);
    const [activeMenuItem, setActiveMenuItem] = useState(null);


    const handleMenuItemClick = (index) => {
        setActiveMenuItem(index);
    };

    return (
        <>
            <div className='header_main'>
                <div className='header'>
                    <nav className="navbar navbar-expand-lg p-4">
                        <div className="container">
                            <div className='d-flex gap-2'>
                                <img src={logo} className='logo' alt='' />
                                <Link className="navbar-brand company_name" to={"/"}>Organick</Link>
                            </div>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse main_menu" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-4 ">
                                    {nav?.map((item, index) => (
                                        <li className="nav-item" key={index}>
                                            <Link
                                                className={`home ${activeMenuItem === index ? 'active' : ''}`}
                                                to={item.url}
                                                onClick={() => handleMenuItemClick(index)}
                                            >
                                                {item.names}
                                                {item.icon}
                                                {item?.submenu?.length > 1 ? (
                                                    <ul className='submenu p-0 text-center'>
                                                        {item?.submenu?.map((submenuItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <Link to={submenuItem.url} className='header_link'>
                                                                    {submenuItem?.names}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                ) : null}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                <form className="d-md-flex" role="search">
                                    <div className='relative'>
                                        <input className="form-control me-2 search" type="search" />
                                        <div className='icon2'>
                                            <i className="fa-solid fa-magnifying-glass"></i>
                                        </div>
                                    </div>
                                    <Link to={"/Total"}>
                                        <div className='cart_main relative'>
                                            <div className='cart_icon'>
                                                <i className="fa-solid fa-cart-shopping"></i>
                                            </div>
                                            <span className='cart_text'>Cart ({localStorage.getItem("cart_item1")})</span>
                                        </div>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Header;
