import React from 'react'
import './Sample.css'
import sample from '../../web all pic/sample.png'
import Choose from '../Choose us/Choose'

const Sample = () => {
    return (
        <>
        <div>
            <section className='sample'>
                <div className='sample-content'>
                    <div className='sample-img'>
                        <img src={sample} alt="" />
                    </div>

                    <div className='sample-text'>
                        <h2>NEW ARRIVAL</h2>
                        <div className='sample-img2'>
                        <img src="https://interstatewarriors.com/UmerYTD/wp-content/uploads/2023/09/9-300x300.jpg" alt="" />
                        </div>
                        <p>Al-Nassr 2023-24 Jersey</p>
                        <button className='btn sample-btn'>Shop Now</button>
                    </div>
                </div>
            </section>
        </div>
        <Choose />
        </>
        
    )
}

export default Sample
