import React, { useId } from "react";
import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";

function RadioAmountItem({
  value,
  label,
  oneTimeOnly = false,
  handleSelect,
}: {
  value: string;
  label: string;
  oneTimeOnly?: boolean;
  handleSelect: any;
}) {
  const id = useId();
  return (
    <div
      key={`${id}-${value}`}
      onClick={() => handleSelect(Number(value))}
      className="border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent relative flex flex-col gap-4 border p-8 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <RadioGroupItem
            id={`${id}-${value}`}
            value={value}
            className="after:absolute after:inset-0"
            aria-describedby={`${`${id}-${value}`}-price`}
          />
          <Label
            className="inline-flex items-start text-3xl italic tracking-wide"
            htmlFor={`${id}-${value}`}
          >
            {label}
            {value === "2" && <Badge className="ms-2 -mt-1">Popular</Badge>}
          </Label>
        </div>
        <div
          id={`${`${id}-${value}`}-price`}
          className="text-muted-foreground text-xs leading-[inherit]"
        >
          {/* TODO: Remover caso escolha pagamento único (PaymentTypeSelector -> "UMA VEZ") */}
          {/* {price} */}
        </div>
      </div>
    </div>
  );
}

export default RadioAmountItem;
