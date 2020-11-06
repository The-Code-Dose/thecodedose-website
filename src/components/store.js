import React from "react"
import CodingBabyTshirt from '../images/coding-baby-tshirt.jpg'
import WitchCoffeeCoaster from '../images/witch-coffee-coaster.jpg'
import CodingInProgressSticker from '../images/coding-in-progress-sticker.jpg'
import CodingBabySticker from '../images/coding-baby-sticker.jpg'

import './store.scss'

const products = [
  CodingBabyTshirt, 
  CodingBabySticker,
  WitchCoffeeCoaster, 
  CodingInProgressSticker, 
];

export default function Store() {
  return (
    <section className="products">
      <h2>Store &darr;</h2>
      <div className="products__container">
        {products.map(product => (
          <div className="card products__item" style={{backgroundImage: `url(${product})`}}>
          <div className="products__cta-container">
            <a 
              href='https://www.redbubble.com/people/thecodedose/shop' 
              className="products__cta button -primary"
              target="__blank"
            >
              Visit Store &rarr;
            </a>
          </div>
          </div>
        ))}
      </div>
    </section>
  )
}
