import React from "react";
import { HandshakeIcon, HandHeartIcon } from "lucide-react";
import DonationSelector from "@/components/Donation/DonationSelector";
import DonationHeroBG_URL from "@/../public/donation-hero.svg";
import Image from "next/image";
import InfoForm from "@/components/Donation/StripeForm";
import Callout from "@/components/Donation/Callout";
import DonationContainer from "@/components/Donation/DonationContainer";

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

        <Callout />

        <DonationContainer />
      </div>
    </main>
  );
}

export default Doacao;
