import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../redux/actions/cartClient'
import ClientCart from './ClientCart'
import './cart.css'

const CartList = ({match}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCart(match.params.id))
    }, [match.params.id])
    const cartList = useSelector(state => state.cartReducer.cart.items)
    const total = useSelector(state => state.cartReducer.cart)
    const load = useSelector(state => state.cartReducer.isLoading)
    return (
        <div>
            {load?<div className="load">
  <hr/><hr/><hr/><hr/>
</div>:       <div>
           {cartList && cartList.map(e=> (<div className="container cart cart-info" key={e._id}>
          <h1>Shopping cart</h1>
          <div className="items ft-products-list">
              <div className="header">
                  <div className="item">Items</div>
                  <div className="quantity">Quantity</div>
                  <div className="unit-price">Price</div>
                  <div className="subtotal">Sub-total</div>
              </div>
              <form className="product ft-product">
                  <div className="ln">
                      <div className="image ft-product-image">
                          <img src={e && e.productSrcUrl} alt="" />
                      </div>
                  </div>
              </form>
          </div>
      </div>))}
           <h1>{total && total.bill}</h1>
        </div>}
      
        </div>
    )
}

export default CartList
