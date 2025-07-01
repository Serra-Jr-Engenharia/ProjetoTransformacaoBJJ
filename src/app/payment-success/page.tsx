'use client'

import { useEffect } from "react";

export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {

  useEffect(() => {
    const url = new URL(window.location.href)
    url.searchParams.delete("payment_intent")
    url.searchParams.delete("payment_intent_client_secret")
    url.searchParams.delete("redirect_status")

    window.history.replaceState({}, '', url.toString())
  }, [])

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue-500 to-purple-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Obrigado!</h1>
        <h2 className="text-2xl">Pagamento realizado com sucesso.</h2>

        <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
          R${amount}
        </div>
      </div>
    </main>
  );
}
