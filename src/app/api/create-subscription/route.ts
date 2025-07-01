// import { NextRequest, NextResponse } from "next/server";
// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// const PRICE_IDS: Record<number, string> = {
//   30: process.env.STRIPE_PRICE_ID_1,
//   45: process.env.STRIPE_PRICE_ID_2,
//   60: process.env.STRIPE_PRICE_ID_3,
// }

// export async function POST(req: NextRequest) {
//   const { email, nome } = await req.json();

//   const priceId = PRICE_IDS[amount];

//   if (!priceId) {
//     return NextResponse.json({ error: "Plano não encontrado." }, { status: 404 });
//   }

//   try {
//     const customer = await stripe.customers.create({
//       email,
//       name: nome,
//     });


//     const subscription = await stripe.subscriptions.create({
//       customer: customer.id,
//       items: [{ price: priceId }],
//       payment_behavior: "default_incomplete",
//       expand: ["latest_invoice.payment_intent"],
//     });

//     const clientSecret = subscription.latest_invoice.payment_intent.client_secret;

//     return NextResponse.json({ clientSecret, subscriptionId: subscription.id });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Erro ao criar assinatura." }, { status: 500 });
//   }
// }
