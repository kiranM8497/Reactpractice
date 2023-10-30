import React from 'react'
import "./Product.css";
import { useStateValue } from './StateProvider';
import "./utility.css"

function Product({id ,title, image, price , rating }) {
 
 const [{basket} ,dispatch] = useStateValue();
 

//  console.log('this is the basket >>> ', basket);
  const addToBasket = () =>{
  //dispatch the item to data layer
  dispatch({
    type: 'ADD_TO_BASKET',
    item: {
      id: id,
      title: title,
      image:image,
      price: price,
      rating:rating,
    },
  })

 }
 
  return (
    <div className="product">
      <div className="product-info">
        <p>{title}</p>
        <p className="product-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img className="prod-image" src={image} alt="" />

      <div className="btn-container">
        <button className="btn" onClick={addToBasket}>
          Add to Basket
        </button>
        {/*  */}
      </div>
    </div>
  );
}

export default Product;
