import React from 'react';
import Monitor from '../videos/monitor.mp4';
import Keyboard from '../videos/keyboard.mp4';
import Laptop from '../videos/laptop.mp4';

import './productRecommendations.scss';

const ProductRecommendations = () => (
  <div className="product-recommendations__container">
    <div className="product-recommendations__header">
      <h1 className="product-recommendations__heading">
        Product Recommendations
      </h1>
    </div>
    <div className="product-recommendations__products">
      <a href="https://www.amazon.in/shop/thecodedose/list/1XAFNK5R5DPMF?ref_=aip_sf_list_spv_ofs_mixed_d" target="__blank">
        <div className="product-recommendations__product">
          <div className="product-recommendations__product-video">
            <video autoPlay muted loop>
              <source src={Monitor} type="video/mp4" />
            </video>
          </div>
          <h5 className="product-recommendations__product-title">Monitor</h5>
        </div>
      </a>
      <a href="https://www.amazon.in/shop/thecodedose/list/1XAFNK5R5DPMF?ref_=aip_sf_list_spv_ofs_mixed_d" target="__blank">
        <div className="product-recommendations__product">
          <div className="product-recommendations__product-video">
            <video autoPlay muted loop>
              <source src={Laptop} type="video/mp4" />
            </video>
          </div>
          <h5 className="product-recommendations__product-title">Laptop</h5>
        </div>
      </a>
      <a href="https://www.amazon.in/shop/thecodedose/list/1XAFNK5R5DPMF?ref_=aip_sf_list_spv_ofs_mixed_d" target="__xxblank">
        <div className="product-recommendations__product">
          <div className="product-recommendations__product-video">
            <video autoPlay muted loop>
              <source src={Keyboard} type="video/mp4" />
            </video>
          </div>
          <h5 className="product-recommendations__product-title">Keyboard</h5>
        </div>
      </a>
    </div>
    <div className="product-recommendations__footer">
      <div className="product-recommendations__footer-left">
        <h4 className="product-recommendations__footer-title">The Setup</h4>
        <p className="product-recommendations__footer-content">These are the products that you can spot on our Instagram page. Any purchases made through the links on our page will earn us a small commission at no extra cost to you!</p>
      </div>
      <div className="product-recommendations__footer-right">
        <a className="product-recommendations__footer-btn" href="https://www.amazon.in/shop/thecodedose" target="__blank">Explore</a>
      </div>
    </div>
  </div>
);

export default ProductRecommendations;
