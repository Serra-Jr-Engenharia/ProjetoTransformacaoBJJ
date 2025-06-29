"use client";

import { useId, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PaymentTypeSelector from "@/components/Donation/PaymentTypeSelector";
import RadioAmountItem from "./RadioAmountItem";
import { useDonationContext } from "./DonationContainer";

export default function DonationSelector({paymentType = 'one-time'}: {
  paymentType?: "one-time" | "monthly";
}) {
  const items = [
    { value: "30", label: "R$30", oneTimeOnly: false },
    { value: "45", label: "R$45", oneTimeOnly: false },
    { value: "60", label: "R$60", oneTimeOnly: false },
    // TODO: Add Origin UI "Number input with chevrons" if price is 'Custom'
    { value: "CUSTOM", label: "R$ ?", oneTimeOnly: true },
  ];

  const [selectedFormItem, setSelectedFormItem] = useState("30");
  const { amount, setAmount } = useDonationContext()
  const handleSelect = (value: number | "CUSTOM") => {
    
    if (typeof value === "number") {
      setAmount(value);
      return;
    }
  };

  return (
    <>
      <fieldset className="space-y-4 w-3/4">
        {/* <legend className="text-foreground text-sm leading-none font-medium">
          Choose plan
        </legend> */}
        <RadioGroup
          className="gap-0 -space-y-px rounded-md shadow-xs"
          // defaultValue="30"
          value={selectedFormItem}
          onValueChange={setSelectedFormItem}
        // onChange={(value) => setAmount(Number(value))}
        >
          {items.map((item) => {
            // const data =
            //   item.oneTimeOnly && paymentType === "monthly" ? null : item;

            return (
              item && (
                <RadioAmountItem
                  key={item.label}
                  currentAmount={amount}
                  label={item.label}
                  value={item.value}
                  selectedFormItem={selectedFormItem}
                  // oneTimeOnly={item.oneTimeOnly || false}
                  handleSelect={(val: number | 'CUSTOM') => handleSelect(val)}
                />
              )
            );
          })}
        </RadioGroup>
      </fieldset>
    </>
  );
}
