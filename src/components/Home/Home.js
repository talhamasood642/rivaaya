import React from 'react'
import './Home.css'
import About from '../About/About'

const Home = () => {
  return (
    <div>
         {/* Home section */}
      <section className='home'>
        <div className='home-text'>
          <p>Black Friday Sale</p>
          <h1>Up to 10% off</h1>
          <h5>Over hundreds of Sports Jersey</h5>
          <a href="/" class="btn">Book a Trip</a>
        </div>
      </section>
      <About />
    </div>
  )
}

export default Home
