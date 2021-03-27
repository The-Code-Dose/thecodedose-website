import React from 'react';
import NoicestProgrammerTee from '../images/worlds-noicest-programmer-tshirt.jpeg';
import WitchCoffeeCoaster from '../images/witch-coffee-coaster.jpg';
import CodingTeaSticker from '../images/kawaii-coding-tea-sticker.jpeg';
import CodingBabySticker from '../images/coding-baby-sticker.jpg';

import './store.scss';

const products = [
  NoicestProgrammerTee,
  CodingBabySticker,
  WitchCoffeeCoaster,
  CodingTeaSticker,
];

export default function Store() {
  return (
    <section className="products">
      <h2>Store &darr;</h2>
      <div className="products__container">
        {products.map((product) => (
          <div
            className="card products__item"
            style={{ backgroundImage: `url(${product})` }}
          >
            <div className="products__cta-container">
              <a
                href="https://www.redbubble.com/people/thecodedose/shop"
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
  );
}
