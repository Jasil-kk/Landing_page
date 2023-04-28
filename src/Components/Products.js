import React from "react";
import { products } from "./ProductItems";
// import item1 from "../Assets/item1.svg";
// import item2 from "../Assets/item2.svg";
// import item3 from "../Assets/item3.svg";
// import item4 from "../Assets/item4.svg";
// import item5 from "../Assets/item5.svg";
// import item6 from "../Assets/item6.svg";
// import item7 from "../Assets/item7.svg";
// import item8 from "../Assets/item8.svg";

const Products = () => {
  return (
    <div className="product-main">
      <div className="product-text-section">
        <h1>Discover New Arrivals</h1>
        <p>Recently added shirts!</p>
      </div>
      <div className="product-item-section">
        {products.map((product,key)=>(
          <div key={key} className="product-item-card">
          <div className="product-item-image">
            <img src={product.image} alt="item1" />
          </div>
          <h5>{product.name}</h5>
          <p>{product.price}</p>
          </div>
          ))}
        {/* <div className="product-item-card">
          <div className="product-item-image">
            <img src={item2} alt="item1" />
          </div>
          <h5>Plain White Shirt</h5>
          <p>$49.00</p>
        </div>
        <div className="product-item-card">
          <div className="product-item-image">
            <img src={item3} alt="item3" />
          </div>
          <h5>Plain White Shirt</h5>
          <p>$49.00</p>
        </div>
        <div className="product-item-card">
          <div className="product-item-image">
            <img src={item4} alt="item4" />
          </div>
          <h5>Plain White Shirt</h5>
          <p>$49.00</p>
        </div>
        <div className="product-item-card">
          <div className="product-item-image">
            <img src={item5} alt="item5" />
          </div>
          <h5>Plain White Shirt</h5>
          <p>$49.00</p>
        </div>
        <div className="product-item-card">
          <div className="product-item-image">
            <img src={item6} alt="item6" />
          </div>
          <h5>Plain White Shirt</h5>
          <p>$49.00</p>
        </div>
        <div className="product-item-card">
          <div className="product-item-image">
            <img src={item7} alt="item7" />
          </div>
          <h5>Plain White Shirt</h5>
          <p>$49.00</p>
        </div>
        <div className="product-item-card">
          <div className="product-item-image">
            <img src={item8} alt="item8" />
          </div>
          <h5>Plain White Shirt</h5>
          <p>$49.00</p>
        </div> */}
      </div>
    </div>
  );
};

export default Products;
