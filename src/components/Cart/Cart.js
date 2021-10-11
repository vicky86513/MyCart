import Cartlogo from '../Cart/carts.gif'
import "./Cart.css";
import {CartContext} from "../context/cartContext"
import React from 'react';

function Cart() {

    let [cartItem, setCartItem] = React.useContext(CartContext);

    return(

     <div className="cart-wrapper">
    <img className="cartlogo" src={Cartlogo} alt="Cart" />
    <span>{cartItem.length}</span>
    </div>

    )

}

export default Cart;