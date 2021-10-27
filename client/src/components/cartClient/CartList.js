import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfo } from '../../redux/actions/actionProfileUser'
import DisplayCart from './DisplayCart'

const CartList = () => {
    const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getUserInfo())
  }, [])
    const cartlist = useSelector(state => state.cartReducer.cart)
    return (
        <div>
            {cartlist.map(e=> <DisplayCart cartClient={e} key={e._id} />)} 
            
        </div>
    )
}

export default CartList
