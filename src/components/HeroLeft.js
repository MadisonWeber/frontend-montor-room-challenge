import React, { useContext, useState, useRef } from 'react';
import "../css/heroleft.css";
import { GlobalContext } from '../context/context'
import Slider from './Slider';

const HeroLeft = () => {

    const { slideNum, currentlyMobile } = useContext(GlobalContext);
    const [ mobileNavOpen, setMobileNavOpen ] = useState(false);
    const hiddenNav = useRef(null)


    const openMobileNav = () => {
        hiddenNav.current.classList.add('open__nav')
        setMobileNavOpen(true)
    }

    const closeMobileNav = () => {
        hiddenNav.current.classList.remove('open__nav')
        setMobileNavOpen(false)
    }

    return (
        <div className = 'HeroLeft'>
            {slideNum === 1 &&  <img src={require("../images/desktop-image-hero-1.jpg").default} alt="chair" className = 'heroleftimage'/>}
            {slideNum === 2 &&  <img src={require("../images/desktop-image-hero-2.jpg").default} alt="chair" className = 'heroleftimage'/>}
            {slideNum === 3 &&  <img src={require("../images/desktop-image-hero-3.jpg").default} alt="chair" className = 'heroleftimage'/>}
            <div className="heroleft__overlay">
                {!currentlyMobile&& 
                <nav className="heroleft__nav">
                    <h1 className="nav__title">room</h1>
                    <ul className="nav__list">
                        <li className="nav__list-element">home</li>
                        <li className="nav__list-element">shop</li>
                        <li className="nav__list-element">about</li>
                        <li className="nav__list-element">contact</li>
                    </ul>
                </nav>}
                {currentlyMobile && !mobileNavOpen &&
                    <nav className="mobile__nav mobile__nav__closed">
                        <svg className = 'hamburger' onClick = {openMobileNav} width="20" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z" fill="#FFF" fill-rule="evenodd"/></svg>
                        <h1 className="nav__title nav__title__mobile">room</h1>
                    </nav>
                }
                {currentlyMobile && 
                <nav className="mobile__nav mobile__nav__hidden" ref = {hiddenNav}>
                    <div className="close-svg-holder">
                        <svg className = 'close-mobile-nav' onClick = {closeMobileNav} width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z" fill="#000" fill-rule="evenodd" opacity=".201"/></svg>
                    </div>
                    <ul className="nav__list-mobile">
                        <li className="nav__list__mobile-element">home</li>
                        <li className="nav__list__mobile-element">shop</li>
                        <li className="nav__list__mobile-element">about</li>
                        <li className="nav__list__mobile-element">contact</li>
                    </ul>
                </nav>}
                {currentlyMobile && <Slider />}
            </div>
        </div>
    )
}

export default HeroLeft
