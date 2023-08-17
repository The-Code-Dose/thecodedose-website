import React from 'react';
import Monitor from '../images/monitor.webp';
import Keyboard from '../images/keyboard.webp';
import Laptop from '../images/laptop.webp';

import './productRecommendations.scss';

function ProductRecommendations() {
  return (
    <div className="product-recommendations__container" id="product-recommendations">
      <div className="product-recommendations__header">
        <h1 className="product-recommendations__heading">
          Product Recommendations
        </h1>
      </div>
      <div className="product-recommendations__products">
        <a href="https://www.amazon.in/shop/thecodedose/list/1XAFNK5R5DPMF?ref_=aip_sf_list_spv_ofs_mixed_d" target="__blank">
          <div className="product-recommendations__product">
            <div className="product-recommendations__product-video">
              <img src={Monitor} />
            </div>
            <h5 className="product-recommendations__product-title">Monitor</h5>
          </div>
        </a>
        <a href="https://www.amazon.in/shop/thecodedose/list/1XAFNK5R5DPMF?ref_=aip_sf_list_spv_ofs_mixed_d" target="__blank">
          <div className="product-recommendations__product">
            <div className="product-recommendations__product-video">
              <img src={Laptop} />
            </div>
            <h5 className="product-recommendations__product-title">Laptop</h5>
          </div>
        </a>
        <a href="https://www.amazon.in/shop/thecodedose/list/1XAFNK5R5DPMF?ref_=aip_sf_list_spv_ofs_mixed_d" target="__xxblank">
          <div className="product-recommendations__product">
            <div className="product-recommendations__product-video">
              <img src={Keyboard} />
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
}

export default ProductRecommendations;
