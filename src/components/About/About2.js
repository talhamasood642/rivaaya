import React from 'react'
import './About.css'

const About2 = ({id, img, description, price }) => {

  return (
    <>
     
        <div className='row'>
          <div className='product-img'>
            <img src={img} alt="" />
          </div>
          <h5>{description}</h5>
          <p>{price}</p>
          <div className='btn-size'>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
          </div>
      </div>
    </>
  )
}

export default About2























