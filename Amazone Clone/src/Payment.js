import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout";
import CheckoutProducts from "./CheckoutProduct";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./Reducer";
 import axios from "./axios";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing,setProcessing] = useState("");
  const [succeeded,setSucceeded]= useState(false);
  //clientsecret is way how stripe knows how much to charge the customer
  const [clientSecret, setClientSecret] = useState(false);
  const history = useHistory();
 useEffect ( () => {
  //generate the special stripe secret  which allows to  charge a customer

  const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })

      setClientSecret(response.data.clientSecret)
  }

  getClientSecret();
 },[basket])


 console.log(`THE SECRET IS >>> `, clientSecret)
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.cinfirmCardPayment(clientSecret,{
      payment_method:  {
        card: elements.getElement(CardElement)
      }}) //response comes back wand we are destructuring it
      .then(({paymentIntent}) => {
        //payment intent = payment confirmataion
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        // window.history.replaceState(null, null, "/orders");
       history.replace('/orders');
      })
  };

  const handleChange = (event) => {
    //listenfor changes in card element
    //and display any errors  as the customr types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<Link to="/checkout">{basket.length} items.</Link>)
        </h1>

        {/* payment sectin -delievry address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delievery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Hadapasar, Pune</p>
          </div>
        </div>
        {/* payment sectin -review  items */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delievery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
        {/* payment sectin -payment method */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
            <div className="payment-price-container">
              <CurrencyFormat
                renderText={(value) => <h3>Order total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button  className= "payment-buy-nw-btn" disabled={processing || disabled || succeeded}>
                <span>{processing ? <p>Processing</p> : 
                "Buy Now"}</span>
              </button>
            </div>


            {/* errror */}
            {error && <div>{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
