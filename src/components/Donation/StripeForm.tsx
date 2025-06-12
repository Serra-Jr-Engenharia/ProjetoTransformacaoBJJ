"use client";
import React from "react";
import CheckoutPage from "@/components/Donation/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import convertToSubcurrency from "@/lib/convertToSubcurrency";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
} // Example amount, replace with your actual amount
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function StripeForm({ amount }: { amount: number }) {
  if (amount <= 0) {
    amount = 45;
  }
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubcurrency(amount),
        currency: "brl",
      }}
    >
      <CheckoutPage amount={amount} />
    </Elements>
  );
}

export default StripeForm;
