import React from 'react'
import logo from '../../web all pic/Riwaaya-logo/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className='top-gap'>
            <section className='footer'>
                <div className='footer-content'>
                    <div className='logo-content'>
                        <img src={logo} alt="" />
                    </div>
                    <h2>Subscribe To Get Offers In Your Inbox</h2>
                    <p>Lorem ipsum dolor sit amet, adipiscing elit sed do eiusmod condimentum</p>
                    <div className='list'>
                        <ul>
                            <li><a href="#">T-Shirts</a></li>
                            <li><a href="#">Sweat Shirts</a></li>
                            <li><a href="#">Mans Hoodies</a></li>
                            <li><a href="#">Perfumes</a></li>
                        </ul>
                    </div>
                    <div className='contact'>
                    <button className='btn'>Contact Us</button>
                    </div>
                        <div className="footer-end">
                            <p>Copyright 2023 Talha Masood | Powered by RIWAYYA</p>
                        </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
