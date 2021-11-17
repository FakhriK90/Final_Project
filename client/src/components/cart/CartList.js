import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../redux/actions/cartClient'
import ClientCart from './ClientCart'

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
           {cartList && cartList.map(e=> <ClientCart key={e._id} cartClient={e} />)}
           <h1>{total && total.bill}</h1>
        </div>}
      
        </div>
    )
}

export default CartList
