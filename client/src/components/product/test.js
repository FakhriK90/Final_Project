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
          <div className="container">
        <div className="card">
          <div className="first-card"><img src={productClient && productClient.productSrcUrl} alt="" 
          // style={{width: '300px', height: '300px'}} 
          />
            <h3>{productClient && productClient.productName}</h3>
            <h4>{productClient && productClient.productPrice}</h4>
            <h5>{productClient && productClient.productCategory}</h5>
            <Link to='/cart'>
      <button onClick={()=>dispatch(addCart({productName:productClient.productName,
      productPrice:productClient.productPrice}))}>Add To Cart</button>
      </Link>
      </div>
          <div className="back-card" />
          <div className="thid-card" />
        </div>
      </div>
        </div>
    )
}

export default ProductClient
