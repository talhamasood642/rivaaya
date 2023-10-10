import React from 'react'
import './Choose.css'
import Footer from '../Footer/Footer'

const Choose = () => {
    return (
        <>
            <div>
                <section className='choose .elementor-background-overlay'>
                    <div className='choose-headbar'>
                        <h1>Why choose us</h1>
                    </div>
                    <div className='choose-tags'>
                        <div className='tag'>
                            <i class='bx bxs-truck'></i>
                            <h3>Fast Delivery</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                        </div>

                        <div className='tag'>
                            <i class='bx bxs-check-shield'></i>
                            <h3>Secure Checkout</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                        </div>

                        <div className='tag'>
                            <i class='bx bxs-cart-download'></i>
                            <h3>Easy Returns</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    )
}




export default Choose
