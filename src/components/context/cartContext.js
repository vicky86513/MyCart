import React from "react" ;

export const CartContext = React.createContext();

export const CartProvider = (props) => {

     const [cartItem, setCartItem] = React.useState([]);

     function addToCart(selectedItem){

         setCartItem([...cartItem, selectedItem]);
     }

     return (

         <CartContext.Provider value ={[cartItem, addToCart]}>
             {props.children}
         </CartContext.Provider>

     )

}
//export default CartContext;