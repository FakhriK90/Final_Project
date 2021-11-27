import React from "react";
import {  useSelector } from 'react-redux';
import './cart.css'

const ClientCart = ({ cartClient }) => {
    const total = useSelector(state => state.cartReducer.cart)
  return (
    <div className="container mt-5 p-3 rounded cart">
      <div className="row no-gutters">
        <div className="col-md-8">
          <div className="product-details mr-2">
            <div className="d-flex flex-row align-items-center">
              
            </div>
            <hr />
            
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
                <div className="price ml-2">
                  
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
              <div className="d-flex flex-row">
                <img
                  className="rounded"
                  src={cartClient && cartClient.productSrcUrl}
                  width={40}
                  alt=""
                />
                <div className="ml-2">
                  <span className="font-weight-bold d-block">
                    {cartClient && cartClient.productName}
                  </span>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <span className="d-block">{cartClient && cartClient.quantity}</span>
                <span className="d-block ml-5 font-weight-bold">{cartClient && cartClient.productPrice}</span>
                {/* <i className="fa fa-trash-o ml-3 text-black-50" /> */}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ClientCart;
