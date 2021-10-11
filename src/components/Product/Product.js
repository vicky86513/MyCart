import React,{ useState, useRef, useEffect } from "react";
import "./Product.css";
import Confetti from 'react-confetti'
import { CartContext } from "../context/cartContext";



const Product = (props) => {
  let { item } = props;
  const [width, setWidth] = useState(null);
  const [show, setShow] = useState(false);
  const confettiRef = useRef(null);

  let [cartItem, setCartItem] = React.useContext(CartContext);

  useEffect(() => {
    
    
    setWidth(confettiRef.current.clientWidth);
  }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }
  
  function addCart() {
    handleShow(true)
    setCartItem(item)


  }

  return (
    <div className="container">
       <Confetti
          recycle={show}
          numberOfPieces={80}
          width ={width} 
        />
      <div className="card" >
        <div className="imgBx">
        <img src={item.searchImage} alt="product-img" />
        </div>
      
      <div className="contentBx">
        <h2>{item.brand}</h2>
        <div className="size">
          <h3>Size :</h3>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div className="color">
          <h3>Color :</h3>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <a onClick={() => addCart()}
        onMouseLeave={() => handleShow(false)} ref={confettiRef}>Add to Cart </a>
      </div>
    </div>
    </div>
  );
};

export default Product;