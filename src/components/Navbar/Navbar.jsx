// import React from "react";
// import { GiHamburgerMenu} from 'react-icons/gi';
// import {MdOutLineRestaurantMenu} from 'react-icons/gi';
// import images from '../../constants/images';
// import './Navbar.css';


// const Navbar = () => {
//   return (
//     <nav className="app__navbar">
//       <div className="app__navbar-logo">
//         <img src={images.gericht} alt="app logo" />
//       </div>
//       <ul className="app__navbar-links">
//         <li className="p__opensans"><a href="#home">Home</a></li>
//         <li className="p__opensans"><a href="#about">About</a></li>
//         <li className="p__opensans"><a href="#menu">Menu</a></li>
//         <li className="p__opensans"><a href="#awards">Awards</a></li>
//         <li className="p__opensans"><a href="#contact">Contact</a></li>
//       </ul>
//     </nav>
//   )
// }

// export default Navbar

import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <h4 style={{color:'white'}}>MST Networks</h4>
                {/* add image tag here */}
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#about">About</a></li>
                <li className="p__opensans"><a href="#service">Service</a></li>
                <li className="p__opensans"><a href="#faqs">FAQs</a></li>
                <li className="p__opensans"><a href="#team">Team</a></li>
            </ul>
            <div className="app__navbar-login">
                <button type='button' className='custom__button'>Contact us</button>
            </div>
            <div className="app__navbar-smallscreen">
                <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
                            <li><a href="#service" onClick={() => setToggleMenu(false)}>Service</a></li>
                            <li><a href="#faqs" onClick={() => setToggleMenu(false)}>FAQs</a></li>
                            <li><a href="#Team" onClick={() => setToggleMenu(false)}>Team</a></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

