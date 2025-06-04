import React from "react";
import { HandshakeIcon, HandHeartIcon } from "lucide-react";
import DonationSelector from "@/components/ui/DonationSelector";
import DonationHeroBG_URL from "@/../public/donation-hero.svg";
import Image from "next/image";

function Doacao() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background">
      <div className="flex flex-col items-center justify-center w-full min-h-screen gap-6">
        <div className="w-full h-44 flex items-center justify-center">
          <Image alt="" src={DonationHeroBG_URL} className="absolute " />
          <h1 className="text-4xl font-bold uppercase font-poppins w-full text-center z-1">
            Sua generosidade constrói um futuro melhor!
          </h1>
        </div>

        <div id="info-container" className="w-3/4 grid grid-cols-2 gap-2 my-4">
          <div className="flex flex-row gap-4">
            <HandshakeIcon size={96} absoluteStrokeWidth strokeWidth={3} />
            <div className="">
              <h3 className="uppercase font-bold text-lg">
                Junte-se à Transformação
              </h3>
              Apoie mensalmente com um valor fixo de sua escolha!
            </div>
          </div>
          <div className="flex flex-row gap-4">
            <HandHeartIcon size={96} absoluteStrokeWidth strokeWidth={3} />
            <div className="">
              <h3 className="uppercase font-bold text-lg">
                Faça uma doação única
              </h3>
              Apoie mensalmente com um valor fixo de sua escolha!
              <br />
              Ou doe por meio de <strong>transferência bancária</strong>{" "}
              <span className="text-orange-400">entrando em contato</span>{" "}
              conosco.
            </div>
          </div>
        </div>

        <div
          id="donation-container"
          className="grid grid-cols-3 gap-8 grid-rows-1 w-11/12 min-h-12"
        >
          <div
            id="donation-amount"
            className="min-h-48 p-4 rounded-lg flex items-center justify-center flex-col"
          >
            <h3 className="text-center w-3/4 uppercase font-bold text-lg">
              Escolha o valor de doação:
            </h3>
            <hr className="bg-green-400 w-1/3 h-0.5 my-1 rounded-full border-0" />
            <DonationSelector />
          </div>

          <div
            id="info-form"
            className="min-h-48 p-4 rounded-lg flex items-center justify-start flex-col"
          >
            <h3 className="text-center w-full uppercase font-bold text-lg">
              Ótimo! Agora, basta preencher seus dados e finalizar.
            </h3>
            <hr className="bg-green-400 w-1/3 h-0.5 my-1 rounded-full border-0" />
          </div>

          <div id="donation-summary" className="m-auto">
            <div className="p-8 w-96 bg-card rounded-lg flex items-center justify-start gap-2 flex-col border-2 border-green-400">
              <h3 className="text-center w-full uppercase font-bold text-lg">
                Doação Selecionada:
              </h3>

              <hr className="bg-green-400 w-1/2 h-0.5 my-1 rounded-full border-0" />

              <div className="w-full">
                <span className="w-full text-green-800 font-bold text-2xl uppercase">
                  Valor
                </span>
                <p className="w-full italic">
                  <span className="text-2xl font-bold">R$ 45,00</span>
                  <span className="text-sm text-muted-foreground">/ mês</span>
                </p>
              </div>

              <div className="w-full mt-4">
                <span className="w-full text-green-800 font-bold text-2xl uppercase">
                  Tipo de Doação
                </span>
                <p className="text-xl italic font-bold w-full">
                  Cota Única / Mensal
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Doacao;
