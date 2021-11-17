import React from 'react'
// import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCart } from '../../redux/actions/actionCart';
import './Product.css'

const ProductClient = ({productClient}) => {
  const dispatch = useDispatch()
  
    return (
        <div>
          <div className="product">
        <div className="product__photo">
          <div className="photo-container">
            <div className="photo-main">
              <div className="controls">
                <i className="material-icons">share</i>
                <i className="material-icons">favorite_border</i>
              </div>
              <img src={productClient && productClient.productSrcUrl} alt="" />
            </div>
          </div>
        </div>
        <div className="product__info">
          <div className="title">
            <h1>{productClient && productClient.productName}</h1>
            <span>COD: 45999</span>
          </div>
          <div className="price">
            R$ <span>7.93</span>
          </div>
          <div className="description">
            <h3>BENEFITS</h3>
            <ul>
              <li>Apples are nutricious</li>
              <li>Apples may be good for weight loss</li>
              <li>Apples may be good for bone health</li>
              <li>They're linked to a lowest risk of diabetes</li>
            </ul>
          </div>
          <button className="buy--btn">ADD TO CART</button>
        </div>
      </div>
        </div>
    )
}

export default ProductClient
