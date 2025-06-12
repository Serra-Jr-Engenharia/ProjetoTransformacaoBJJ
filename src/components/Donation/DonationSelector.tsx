"use client";

import { useId, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PaymentTypeSelector from "@/components/Donation/PaymentTypeSelector";
import RadioAmountItem from "./RadioAmountItem";

export default function DonationSelector({
  amount,
  setAmount,
  paymentType,
}: {
  amount: number;
  setAmount: any;
  paymentType: "one-time" | "monthly";
}) {
  const items = [
    { value: "30", label: "R$30", oneTimeOnly: false },
    { value: "45", label: "R$45", oneTimeOnly: false },
    { value: "60", label: "R$60", oneTimeOnly: false },
    // TODO: Add Origin UI "Number input with chevrons" if price is 'Custom'
    // { value: "CUSTOM", label: "R$ ?", oneTimeOnly: true },
  ];

  const handleSelect = (value: number) => {
    setAmount(value);
  };

  return (
    <>
      <span className="w-3/4 text-center text-muted-foreground text-xs mb-4 mt-2 leading-4">
        Ao escolher a opção "Mensal" a renovação do pagamento será automática.
        Podendo ser cancelada a qualquer momento.
      </span>
      <fieldset className="space-y-4 w-3/4">
        <legend className="text-foreground text-sm leading-none font-medium">
          Choose plan
        </legend>
        <RadioGroup
          className="gap-0 -space-y-px rounded-md shadow-xs"
          defaultValue="30"
          // onChange={(value) => setAmount(Number(value))}
        >
          {items.map((item) => {
            const data =
              item.oneTimeOnly && paymentType === "monthly" ? null : item;

            return (
              data && (
                <RadioAmountItem
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  // oneTimeOnly={item.oneTimeOnly || false}
                  handleSelect={handleSelect}
                />
              )
            );
          })}
        </RadioGroup>
      </fieldset>
    </>
  );
}
