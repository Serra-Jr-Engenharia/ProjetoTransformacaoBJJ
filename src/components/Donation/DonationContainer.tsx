"use client";

import React, { useState } from "react";
import StripeForm from "./StripeForm";
import DonationSelector from "./DonationSelector";
import PaymentTypeSelector from "./PaymentTypeSelector";

export type DonationTypes = "one-time" | "monthly";

function DonationContainer() {
  const [amount, setAmount] = useState<number>(30);
  const [paymentType, setPaymentType] = useState<DonationTypes>("one-time");
// grid-rows-1 w-11/12 max-md:grid-cols-1 max-md:grid-rows-3
  return (
    <div
      id="donation-container"
      className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div
        id="donation-amount"
        className="min-h-48 p-4 sm:p-6 rounded-lg flex items-center justify-start flex-col "
      >
        <h3 className="text-center w-full sm:w-3/4 uppercase font-bold text-base sm:text-lg mb-2">
          Escolha o valor de doação:
        </h3>
        <hr className="bg-green-400 w-1/3 h-0.5 my-1 rounded-full border-0 mb-4" />
        {/* <PaymentTypeSelector type={paymentType} setType={setPaymentType} /> */}
        <DonationSelector
          amount={amount}
          setAmount={setAmount}
          paymentType={paymentType}
        />
      </div>
      <div
        id="info-form"
        className="p-4 sm:p-6 rounded-lg flex items-center justify-start flex-col lg:col-span-2 lg:col-start-2"
      >
        <h3 className="text-center w-full uppercase font-bold text-base sm:text-lg mb-2">
          Ótimo! Agora, basta preencher seus dados e finalizar.
        </h3>
        <hr className="bg-green-400 w-1/3 h-0.5 my-1 rounded-full border-0 mb-4" />
        <StripeForm amount={amount} paymentType={paymentType}/>
      </div>

      {/* Card de Doação Selecionada */}
      <div id="donation-summary" className="flex items-start justify-center md:col-span-2 lg:col-span-1 lg:justify-center px-4 mb-4">
        <div className="p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-96 bg-card rounded-lg flex items-center gap-2 flex-col border-2 border-green-400">
          <h3 className="text-center w-full uppercase font-bold text-base sm:text-lg">
            Doação Selecionada:
          </h3>

          <hr className="bg-green-400 w-1/2 h-0.5 my-1 rounded-full border-0" />

          <div className="w-full">
            <span className="w-full text-green-800 font-bold text-lg sm:text-xl md:text-2xl uppercase">
              Valor
            </span>
            <p className="w-full italic">
              <span className="text-xl sm:text-2xl font-bold">R$ {amount},00</span>
              <span className="text-xs sm:text-sm text-muted-foreground">
                {paymentType === "monthly" && "/ mês"}
              </span>
            </p>
          </div>

          <div className="w-full mt-3 sm:mt-4">
            <span className="w-full text-green-800 font-bold text-lg sm:text-xl md:text-2xl uppercase">
              Tipo de Doação
            </span>
            <p className="text-xl sm:text-xl italic font-bold w-full">
              {paymentType === "one-time" ? "Cota Única" : "Mensal"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonationContainer;
