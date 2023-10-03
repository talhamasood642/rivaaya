import React from 'react'
import './About.css'
import Sample from '../Shirts-sample/Sample'
import About2 from './About2'
import products from '../../products'


const About = () => {
  return (
    <>
      <div>
        <section className='about'>
          <div className='about-text'>
            <p>Shop by category</p>
            <h2>Feature Products</h2>
            <p>Best products</p>
          </div>
        </section>

        {/* Products Section */}

        <section className='products'>
          <div className='product-content'>
            {
              products.map((items) => {
                return <About2 key={items} {...items}/>
              })
            }
          </div>
          <div className='product-btn'>
            <button className='btn'>View All</button>
          </div>
        </section>

      </div>
      {/* Product Section closed */}
      <Sample />
    </>
  )
}

export default About
