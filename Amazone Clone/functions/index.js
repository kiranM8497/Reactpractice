const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(`sk_test_51MtCsxSGFq1NYA53M98cbe7946ouHpKHtwmpe
4BKQnzmhw2q5XLyJWJQzS5TPRh1Keg1HoIr6Fo7mOiRMUoWnvew00J0VMWkgz`);

// APP

// app config
const app = express();
// middleware
app.use(cors({
  origin: true,
  //  "Access-Control-allow-Origin" : "*" ,
}));
// app.use(
//   cors({
//     origin: true, // allow requests from all origins
//     methods: ["GET", "POST"], // specify allowed HTTP methods
//     allowedHeaders: ["Content-Type", "Authorization"], // specify allowed headers
//   });
// );
app.use(express.json());


// ai routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  // console.log("payment request received for this amount", total);
  const paymentIntent = await stripe.paymentIntents.credit({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  }); // status ok -  created
});
// listen command
exports.api = functions.https.onRequest(app);

// api end point url we got from running firebase emulator:start (example endpoint)
// http://127.0.0.1:5001/clone-1fd04/us-central1/api