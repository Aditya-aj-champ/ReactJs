// import React from "react";
import { products } from "./Product";
import "./Card.css";
export default function ProductData() {
  // console.log(products);
  return (
    <>
      <hr />
      <h6> Trending Product</h6>

      {products.map((item, ind) => {
        return (
          <div className=" card_container  " key={ind}>
            <div className="card">
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body1">
                <h6 className="">{item.title}</h6>
                <h5 className="Rating">
                  <span>&#8377;</span>
                  {item.price}
                  <p>Rating {item.rating.rate}</p>
                </h5>
                <p>
                  {item.category}
                  <span className="countItems">
                    Left in stock {item.rating.count}
                  </span>
                </p>

                {/* <p className="card-text">{item.description}</p> */}
              </div>

              <div
                className="text-center"
                style={{ backgroundColor: "azure", paddingBottom: "10px " }}
              >
                <button className="btn btn-success">BUY NOW</button>{" "}
                <button type="button" className="btn btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"></path>
                  </svg>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
