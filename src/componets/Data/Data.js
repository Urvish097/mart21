import React from 'react';
import { FaAngleDown } from "react-icons/fa";
import cardimg_1 from '../images/cardimg1.png';
import cardimg_2 from '../images/cardimg2.png';
import cardimg_3 from '../images/cardimg5.png';
import cardimg_4 from '../images/cardimg6.png';
import cardimg_5 from '../images/cardimg7.png';
import cardimg_6 from '../images/cardimg8.png';
import cardimg_7 from '../images/cardimg9.png';
import img1 from '../images/img4.png';
import img2 from '../images/Star.png';

export const navbar = [
    {
        names: "Home",
        url: "/"
    },
    {
        names: "About",
        url: "/about",
    },
    {
        names: "Pages",
        icon: <FaAngleDown />,
        submenu: [
            {
                names: "Contact Us",
                url: "/Contact"
            },
            {
                names: "Our Team",
                url: "/Team"
            },
            {
                names: "Our Service",
                url: "/Service"
            },
        ]
    },
    {
        names: "Shop",
        url: "/shop",
    },
    {
        names: "Projects",
        url: "/Project"
    },
    {
        names: "News",
        url: "/News"
    },
]

export const card2 = [
    {
        Tages: "Vegetabel",
        Cardimg: img1,
        title: "Calabrese Broccoli",
        price: "20$",
        currentP: "$13.00",
        Rating: img2
    },
    {
        Tages: "Vegetabel",
        Cardimg: cardimg_1,
        title: "Calabrese Broccoli",
        price: "20$",
        currentP: "$13.00",
        Rating: img2
    },
    {
        Tages: "Vegetabel",
        Cardimg: cardimg_2,
        title: "Calabrese Broccoli",
        price: "20$",
        currentP: "$13.00",
        Rating: img2
    },
    {
        Tages: "Vegetabel",
        Cardimg: cardimg_3,
        title: "Calabrese Broccoli",
        price: "20$",
        currentP: "$13.00",
        Rating: img2
    },
    {
        Tages: "Vegetabel",
        Cardimg: cardimg_4,
        title: "Calabrese Broccoli",
        price: "20$",
        currentP: "$13.00",
        Rating: img2
    },
    {
        Tages: "Vegetabel",
        Cardimg: cardimg_5,
        title: "Calabrese Broccoli",
        price: "20$",
        currentP: "$13.00",
        Rating: img2
    },
    {
        Tages: "Vegetabel",
        Cardimg: cardimg_6,
        title: "Calabrese Broccoli",
        price: "20$",
        currentP: "$13.00",
        Rating: img2
    },
    {
        Tages: "Vegetabel",
        Cardimg: cardimg_7,
        title: "Calabrese Broccoli",
        price: "20$",
        currentP: "$13.00",
        Rating: img2
    }
]


