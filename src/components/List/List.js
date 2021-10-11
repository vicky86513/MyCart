import React from "react";
 import Loader from "../Loader";
import Product from "../Product/Product";
import "./List.css";

function List() {
  let [data, setData] = React.useState(null);

  React.useEffect(async () => {
    // fetch('https://demo7242716.mockable.io/products')
    //     .then(res => res.json())
    //     .then(data => setData(data.products))

    let res = await fetch("https://demo7242716.mockable.io/products");
    let data = await res.json();
    console.log(data);
    setData(data.products);
  }, []);

  return (
    <div className="each-item-wrapper">

      {data ? (
        data.map((eachItem, index) => {
          return <Product item={eachItem} key={index} />;
        })
      ) : (
        <div><Loader/></div>
      )}
    </div>
  );
}

//promises in js

//fetch return me a promise
export default List;
