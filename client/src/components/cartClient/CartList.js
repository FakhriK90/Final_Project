import React from 'react'
import { useSelector } from 'react-redux'
import DisplayCart from './DisplayCart'

const CartList = () => {
    const cartlist = useSelector(state => state.cartReducer.cart)
    return (
        <div>
            {cartlist.map(e=> <DisplayCart cartClient={e} key={e._id} />)} 
            
        </div>
    )
}

export default CartList
