'use client'

import { useEffect, useState } from "react"

export default function PaymentResult({
  searchParams,
}: {
  searchParams: {
    amount?: string
    redirect_status?: string
  }
}) {
  const [status, setStatus] = useState<"success" | "failed" | "loading">("loading")

  useEffect(() => {
    const redirectStatus = searchParams.redirect_status
    if (redirectStatus === "succeeded") {
      setStatus("success")
    } else {
      setStatus("failed")
    }

    // Limpa a URL de dados sensíveis
    const url = new URL(window.location.href)
    url.searchParams.delete("payment_intent")
    url.searchParams.delete("payment_intent_client_secret")
    url.searchParams.delete("redirect_status")
    window.history.replaceState({}, '', url.toString())
  }, [searchParams.redirect_status])

  if (status === "loading") {
    return (
      <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gray-500">
        <h2 className="text-2xl">Verificando pagamento...</h2>
      </main>
    )
  }

  const isSuccess = status === "success"

  return (
    <main
      className={`max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md ${
        isSuccess
          ? "bg-gradient-to-tr from-blue-500 to-purple-500"
          : "bg-gradient-to-tr from-red-500 to-pink-500"
      }`}
    >
      <div className="mb-5">
        <h1 className="text-4xl font-extrabold mb-2">
          {isSuccess ? "Obrigado!" : "Ops..."}
        </h1>
        <h2 className="text-2xl">
          {isSuccess
            ? "Pagamento realizado com sucesso."
            : "Houve uma falha no seu pagamento."}
        </h2>

        {isSuccess ? (
          <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
            R${searchParams.amount}
          </div>
        ) : (
          <div className="bg-white p-2 rounded-md text-red-500 mt-5 text-2xl font-semibold">
            Verifique os dados do cartão ou tente novamente mais tarde.
          </div>
        )}

        <div className="mt-6">
          <a
            href="/"
            className={`inline-block bg-white ${
              isSuccess ? "text-purple-600" : "text-red-600"
            } font-bold py-2 px-4 rounded-md hover:bg-opacity-80 transition`}
          >
            Voltar à página inicial
          </a>
        </div>
      </div>
    </main>
  )
}
