import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componets/pages/Home';
import About from './componets/pages/about/About';
import Shop from './componets/pages/shop/Shop';
import Error from './componets/pages/about/error/Error';
import Licenses from './componets/pages/Licenses/Licenses';
import Changelog from './componets/pages/Changelog/Changelog';
import Footer from './componets/footer/footer';
import Header from './componets/header/Header';
import Protected from './componets/pages/Protected/Protected';
import { FaAngleDown } from "react-icons/fa";
import Contact from './componets/pages/Contact Us/Contact';
import Team from './componets/pages/Our Team/Team';
import Project from './componets/pages/Projects/Project';
import Page1 from './componets/pages/Projects/project_componets/Page1';
import Shop_singel from './componets/pages/shop/shop_singel/Shop_singel.js';
import Service from './componets/pages/service/Service.js';
import Service_single from './componets/pages/service/service_single/Service_single.js';
import Context from './componets/Context/Context.js';
import { useState } from 'react';
import News from './componets/pages/news/News.js';
import Scroll from './componets/Scroll/Scroll.js';
import { navbar } from './componets/Data/Data.js';
import Total from './componets/pages/Total/Total.js';

function App() {

  const [value, setvalue] = useState(0);

  const [image, setimg] = useState([]);

  const [project, setproject] = useState("");

  const [cartItem, setCartItem] = useState([])

  return (
    <Context.Provider value={{ value, setvalue, image, setimg, project, setproject, cartItem, setCartItem }}>
      <BrowserRouter>
        <Header nav={navbar} />
        <Scroll>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='*' element={<Error />} />
            <Route path='/Licenses' element={<Licenses />} />
            <Route path='/Changelog' element={<Changelog />} />
            <Route path='/Protected' element={<Protected />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Team' element={<Team />} />
            <Route path='/Project' element={<Project />} />
            <Route path='/Page1' element={<Page1 />} />
            <Route path='/Shop_singel' element={<Shop_singel />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/Service_single' element={<Service_single />} />
            <Route path='/News' element={<News />} />
            <Route path='/Total' element={<Total />} />
          </Routes>
        </Scroll>
        <Footer />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;