import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './Reducer';
import { useHistory } from 'react-router-dom';

function Subtotal() {
  const history= useHistory();
  const [{basket} ,dispatch ]= useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="para">
              Subtotal({basket.length} items): <strong>{value}</strong>
              <small className="subtotal-gift">
                <input type="checkbox" />
                <span> This Order Contains a gift</span>
              </small>
            </p>
            <button onClick={event=>{
              //t history.push () to programatically push a user to some page
              history.push('/payment')

            }}> Proceed To checkout</button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
