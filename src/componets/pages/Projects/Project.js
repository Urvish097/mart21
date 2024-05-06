import React, { useContext } from 'react';
import './Project.css';
import Card1 from '../Projects/project_componets/card1';
import img1 from "../../images/project_1.png";
import img2 from "../../images/project_2.png";
import img3 from "../../images/project_3.png";
import img4 from "../../images/project_4.png";
import img5 from "../../images/project_5.png";
import img6 from "../../images/project_6.png";
import Subscribe from '../../Subscribe/Subscribe'
import { Link } from 'react-router-dom';
import Context from '../../Context/Context';
import { motion } from 'framer-motion';

const Project = () => {

    const card = [
        {
            img: img1,
            title: "Green & TastyLemon",
            type: "Fruits",
        },
        {
            img: img2,
            title: "Organic Carrot",
            type: "Farmer",
        },
        {
            img: img3,
            title: "Organic Betel Leaf",
            type: "Leaf",
        },
        {
            img: img4,
            title: "Natural Tommato",
            type: "Fruits",
        },
        {
            img: img5,
            title: "Black Raspberry",
            type: "Farmer",
        },
        {
            img: img6,
            title: "Honey Orange",
            type: "Farmer",
        },
    ]

    const { project, setproject } = useContext(Context);

    const addimg2 = (index) => {

        switch (index) {
            case 0:
                setproject(img1)
                break;
            case 1:
                setproject(img2)
                break;
            case 2:
                setproject(img3)
                break;
            case 3:
                setproject(img4)
                break;
            case 4:
                setproject(img5)
                break;
            case 5:
                setproject(img6)
                break;

            default:
                break;
        }
    }

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <section className='proj_sec_1'>
                    <div className='proj_bg'>
                        <div>
                            <h1 className='color font_weigth font_family_roboto text-center'>Portfolio Standard</h1>
                        </div>
                    </div>
                </section>

                <section className='proj_sec_2'>
                    <div className='container'>
                        <div className='row'>
                            {card.map((item1, index) => (
                                <div className='col-md-4 mb-4'>
                                    <Link to={"/Page1"}>
                                        <div onClick={() => addimg2(index)}>
                                            <Card1 pass={item1} />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='container section_10'>
                    <Subscribe />
                </section>
            </motion.div>
        </>
    )
}

export default Project