import React from "react";
import { HandshakeIcon, HandHeartIcon } from "lucide-react";
import DonationSelector from "@/components/Donation/DonationSelector";
import DonationHeroBG_URL from "@/../public/donation-hero.svg";
import InfoForm from "@/components/Donation/StripeForm";
import Callout from "@/components/Donation/Callout";
import DonationContainer from "@/components/Donation/DonationContainer";

function Doacao() {
  return (
    
    <main className="flex min-h-screen flex-col items-center bg-background">
      <div className="w-full min-h-screen flex flex-col items-center justify-start">
        
        <div 
          className="w-full flex items-center justify-center px-4 py-20 relative"
          style={{
            backgroundImage: `url(${DonationHeroBG_URL.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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
