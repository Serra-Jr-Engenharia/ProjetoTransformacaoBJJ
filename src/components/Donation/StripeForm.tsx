"use client";
import React from "react";
import CheckoutPage from "@/components/Donation/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

import { DonationTypes, useDonationContext } from "./DonationContainer";


if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
} // Example amount, replace with your actual amount
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function StripeForm({ paymentType = 'one-time' }: { paymentType?: DonationTypes }) {
  const {amount, setAmount} = useDonationContext()
  if (amount <= 0) {
    setAmount(45);
  }
  const mode = paymentType === 'monthly' ? 'subscription' : 'payment';
  
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode,
        amount: convertToSubcurrency(amount),
        currency: "brl",
      }}
    >
      <CheckoutPage amount={amount} paymentType={paymentType}/>
    </Elements>
  );
}

export default StripeForm;
