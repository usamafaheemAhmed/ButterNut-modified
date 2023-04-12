import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
function Stripe() {
  const PayNow = async token => {
    try{
      const response = await axios({
        url: "http://localhost:7000/Order/Payment",
        method: "post",
        data: {
          amount: 10000,
          token
        }
      });
      if(response.status === 200){
        console.log("Payment Successful!");
      }
      console.log("Working")
    }
    catch(err){
      console.log(err);
    }
  };
  return (
    <StripeCheckout 
    stripeKey = 'pk_test_51MRxg8BVXH98GRBW3K1OH8z6j6WTJe37RCDk9UWznyYOS9KiiKwaWbrtSNiGXeNh93Whee28sa8x9GTIaCH30X4z00JPLqmlfC'
    token = {PayNow}
    />
  )
}

export default Stripe;