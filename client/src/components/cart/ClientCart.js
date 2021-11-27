// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { editCart } from '../../redux/actions/cartClient'

// const ClientCart = ({cartClient}) => {
//     const user = useSelector(state => state.cartReducer.cart)
//     const dispatch = useDispatch()
//     return (
//         <div className="items">
//             <h1>{cartClient && cartClient.productName}</h1>
//             <div>
//                 <button onClick={()=>dispatch(editCart(user.userId,cartClient.productId,cartClient.quantity - 1))}>-</button>
//             <h2>{cartClient && cartClient.quantity}</h2>
//             <button onClick={()=>dispatch(editCart(user.userId,cartClient.productId,cartClient.quantity + 1))}>+</button>
//             </div>
//         </div>
//     )
// }

// export default ClientCart
