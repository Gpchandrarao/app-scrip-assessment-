import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TiTick } from "react-icons/ti";

import "../styles/Products.css";

const Products = () => {
  return (
    <div className="products-container">
      {/* product heading */}
      <div className="product-heading">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h4>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </h4>
      </div>
      {/* recommended */}
      <div>
        <hr />
        <div className="recommended-container">
          <div className="items-container">
            <p className="items">3425 ITEMS</p>
            <div className="hide-container">
              <IoIosArrowBack />
              <p className="filter-heading">HIDE FILTER</p>
            </div>
          </div>
          <select className="select-container">
            <option className="recom">
              <TiTick /> RECOMMENDED
            </option>
            <option className="option">Newest first</option>
            <option className="option">popular</option>
            <option className="option">Price : high to low</option>
            <option className="option">Price : low to high</option>
          </select>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Products;
