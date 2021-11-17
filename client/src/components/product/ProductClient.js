import React, { useEffect } from 'react'
// import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserInfo } from '../../redux/actions/actionProfileUser'
import { addToCart } from '../../redux/actions/cartClient'
import './Product.css'

const ProductClient = ({productClient}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserInfo())
}, [dispatch])
const userId = useSelector(state => state.profileReducer.user)
    return (
      <div className="box">
      <div>
        <div className="box__item box__item--react">
        <div className="first-card"><img src={productClient && productClient.productSrcUrl} alt="" 
        style={{width: '400px', height: '300px'}} 
        />
        <h3>{productClient && productClient.productName}</h3>
            <h4>{productClient && productClient.productPrice}</h4>
            <h5>{productClient && productClient.productCategory}</h5>
            <Link to={`/cartclient/${userId._id}`}>
            <button onClick={()=>dispatch(addToCart(userId._id,productClient._id,1))}>Add To Cart</button>
            </Link>
        </div>
          
        </div>
        <div className="box__bg" />
      </div>
    </div>
    )
}

export default ProductClient