import React from 'react';
import "./Checkout.css";
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
const [{basket,user} , dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-eu.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
          alt=""
        />
        <div className="checkout-title">
        <h3>Hello, {user?.email}</h3>
          <h2>Your Shopping Basket</h2>
          {/* basket items */}
          {/* CheckoutProducts */}
    {/* hardcoded for doing css */}
          {/* <CheckoutProduct
            id="2441"
            title="lorem excusj ffnklfklnf kwndlkandlawd WBDwnbdnwndwndkWID;wndn xxlskdbaND;NdnNXCXWwndWNDLx;wwnc;W'"
            price={199}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfRsCeucJVgeW1tFoLpjgIVufWaVIeLXD4w&usqp=CAU"
          />

          <CheckoutProduct
            id="2441"
            title="lorem excusj ffnklfklnf kwndlkandlawd WBDwnbdnwndwndkWID;wndn xxlskdbaND;NdnNXCXWwndWNDLx;wwnc;W'"
            price={199}
            rating={5}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnfRsCeucJVgeW1tFoLpjgIVufWaVIeLXD4w&usqp=CAU"
          /> */}

          
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
