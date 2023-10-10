import React from 'react'
import logo from '../../../src/web all pic/Riwaaya-logo/logo.png'
import "./Navbar.css"
import { useState, useEffect } from 'react';
import Home from "../Home/Home"

const Navbar = () => {

  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  const open = isOpen ? 'open' : '';
  const bx = isOpen ? 'bx-x' : ''

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) { // جب اسکرول 100 پیکسل سے زیادہ ہوتا ہے تو
        setIsSticky(true); // اسٹکی کی حالت کو true کریں
      } else {
        setIsSticky(false); // اسٹکی کی حالت کو false کریں
      }
    }
      ;
    window.addEventListener('scroll', handleScroll);
  })





  return (
    <div>
      <header className={`${isSticky ? 'sticky' : ''}`}>
        <div className='logo'>
          <img src={logo} alt="" />
        </div>

        <ul className={`navbar ${open}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Products</a></li>
          <li><a href="/">Order Now!</a></li>
        </ul>

        <div className='h-right'>
          <a href="/"><i classn="follow">Follow Us</i></a>
          <a href="/"><i class="bx bxl-instagram-alt"></i></a>
          <a href="/"><i class="bx bxl-twitter"></i></a>
          <a href="/"><i class="bx bxl-facebook"></i></a>
          <div className={`bx bx-menu ${bx}`} id='menu-icon' onClick={toggleNavbar}></div>

        </div>
      </header>
      <Home />
    </div >
  )
}

export default Navbar
