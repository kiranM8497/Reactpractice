import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import Payment from "./Payment";

import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"

function App() {

const promise = loadStripe(
  "pk_test_51MtCsxSGFq1NYA53avvYCSQmqtJvZXGjoVU4lULIeCcSmeMlzDCZk14ClIBiIVuyh1Fxja5esahq1ey7G3EGLGNv00e1b97x1x"
);

  const [{user}, dispatch] = useStateValue();
  useEffect(() => {
    // this will only run once when the app  component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //when user just logged in / user was loggedin
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/login" element={<Login />}>
          <Login />
        </Route>
        <Route exact path="/checkout" element={<Checkout />}>
          <Header />
          <Checkout />
        </Route>
        <Route exact path="/payment" element={<Payment />}>

          <Header />
          <Elements stripe={promise}>
          <Payment />

          </Elements>
        </Route>
        <Route exact path="/" element={<Home />}>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
