"use client";

import React, { useId, useState } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DonationTypes } from "./DonationContainer";

export default function PaymentTypeSelector({
  type,
  setType,
}: {
  type: DonationTypes;
  setType: React.Dispatch<React.SetStateAction<DonationTypes>>;
}) {
  const id = useId();

  return (
    <>
    <div className="bg-input/50 border inline-flex h-9 rounded-md p-0.5 mt-4">
      <RadioGroup
        value={type}
        onValueChange={() =>
          setType((prev) => (prev === "one-time" ? "monthly" : "one-time"))
        }
        className="group after:bg-background has-focus-visible:after:border-ring has-focus-visible:after:ring-ring/50 relative inline-grid grid-cols-[1fr_1fr] items-center gap-0 text-sm font-medium after:absolute after:inset-y-0 after:w-1/2 after:rounded-sm after:shadow-xs after:transition-[translate,box-shadow] after:duration-300 after:ease-[cubic-bezier(0.16,1,0.3,1)] has-focus-visible:after:ring-[3px] data-[state=off]:after:translate-x-0 data-[state=on]:after:translate-x-full"
        data-state={type}
      >
        <label className="group-data-[state=monthly]:text-muted-foreground/70 group-data-[state=monthly]:bg-black/10  relative z-10 inline-flex h-full min-w-8 cursor-pointer items-center justify-center px-4 whitespace-nowrap transition-colors select-none">
          Uma Vez
          <RadioGroupItem id={`${id}-1`} value="one-time" className="sr-only" />
        </label>

        <label className="group-data-[state=one-time]:text-muted-foreground/70 group-data-[state=one-time]:bg-black/10 relative z-10 inline-flex h-full min-w-8 cursor-pointer items-center justify-center px-4 whitespace-nowrap transition-colors select-none">
          <span>
            Mensalmente{" "}
            <span className="group-data-[state=one-time]:text-muted-foreground/70 transition-colors group-data-[state=monthly]:text-emerald-500">
              -20%
            </span>
          </span>
          <RadioGroupItem id={`${id}-2`} value="monthly" className="sr-only" />
        </label>
      </RadioGroup>
    </div>
    
      <span className="w-3/4 text-center text-muted-foreground text-xs mb-4 mt-2 leading-4">
        Ao escolher a opção "Mensal" a renovação do pagamento será automática.
        Podendo ser cancelada a qualquer momento.
      </span>
      </>
  );
}
