"use client";

import React, { useState } from "react";
import StripeForm from "./StripeForm";
import DonationSelector from "./DonationSelector";
import PaymentTypeSelector from "./PaymentTypeSelector";

export type DonationTypes = "one-time" | "monthly";

function DonationContainer() {
  const [amount, setAmount] = useState<number>(30);
  const [paymentType, setPaymentType] = useState<DonationTypes>("one-time");

  return (
    <div
      id="donation-container"
      className="grid grid-cols-3 gap-8 grid-rows-1 w-11/12"
    >
      <div
        id="donation-amount"
        className="min-h-48 p-4 rounded-lg flex items-center justify-start flex-col"
      >
        <h3 className="text-center w-3/4 uppercase font-bold text-lg">
          Escolha o valor de doação:
        </h3>
        <hr className="bg-green-400 w-1/3 h-0.5 my-1 rounded-full border-0" />
        <PaymentTypeSelector type={paymentType} setType={setPaymentType} />
        <DonationSelector
          amount={amount}
          setAmount={setAmount}
          paymentType={paymentType}
        />
      </div>
      <div
        id="info-form"
        className="p-4 rounded-lg flex items-center justify-start flex-col"
      >
        <h3 className="text-center w-full uppercase font-bold text-lg">
          Ótimo! Agora, basta preencher seus dados e finalizar.
        </h3>
        <hr className="bg-green-400 w-1/3 h-0.5 my-1 rounded-full border-0" />
        <StripeForm amount={amount} />
      </div>

      <div id="donation-summary" className="flex items-center justify-center">
        <div className="p-8 w-96 bg-card rounded-lg flex items-center gap-2 flex-col border-2 border-green-400">
          <h3 className="text-center w-full uppercase font-bold text-lg">
            Doação Selecionada:
          </h3>

          <hr className="bg-green-400 w-1/2 h-0.5 my-1 rounded-full border-0" />

          <div className="w-full">
            <span className="w-full text-green-800 font-bold text-2xl uppercase">
              Valor
            </span>
            <p className="w-full italic">
              <span className="text-2xl font-bold">R$ {amount},00</span>
              <span className="text-sm text-muted-foreground">
                {paymentType === "monthly" && "/ mês"}
              </span>
            </p>
          </div>

          <div className="w-full mt-4">
            <span className="w-full text-green-800 font-bold text-2xl uppercase">
              Tipo de Doação
            </span>
            <p className="text-xl italic font-bold w-full">
              {paymentType === "one-time" ? "Cota Única" : "Mensal"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationContainer;
