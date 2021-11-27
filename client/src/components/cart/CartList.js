import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem, editCart, getCart } from "../../redux/actions/cartClient";
import "./cart.css";

const CartList = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCart(match.params.id));
  }, [match.params.id, dispatch]);
  const cartList = useSelector((state) => state.cartReducer.cart.items);
  const total = useSelector((state) => state.cartReducer.cart);
  const load = useSelector((state) => state.cartReducer.isLoading);
  return (
    <div>
      {load ? (
        <div className="load">
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      ) : (
        <div className="text">
          <h1>Shopping cart</h1>
          <div className="container cart cart-info">
            <div className="items ft-products-list">
              <div className="header">
                <div className="item">Items</div>
                <div className="quantity">Quantity</div>
                <div className="unit-price">Price</div>
                <div className="subtotal">Sub-total</div>
              </div>
              <div>
                {cartList &&
                  cartList.map((cartClient) => (
                    <div className="items">
            <h1>{cartClient && cartClient.productName}</h1>
            <div>
                <button onClick={()=>dispatch(editCart(total.userId,cartClient.productId,cartClient.quantity - 1))}>-</button>
            <h2>{cartClient && cartClient.quantity}</h2>
            <button onClick={()=>dispatch(editCart(total.userId,cartClient.productId,cartClient.quantity + 1))}>+</button>
            </div>
            <div>
              <button onClick={()=>dispatch(deleteItem(total.userId,cartClient.productId))}>Delete</button>
            </div>
        </div>
                  ))}
                <h1>Total: {total && total.bill}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartList;
