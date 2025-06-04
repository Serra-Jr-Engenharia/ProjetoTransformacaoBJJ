import { useId } from "react";

import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import PaymentTypeSelector from "@/components/ui/PaymentTypeSelector";

export default function Component() {
  const id = useId();

  const items = [
    { value: "1", label: "R$30", price: "/mês" },
    { value: "2", label: "R$45", price: "/mês" },
    { value: "3", label: "R$60", price: "/mês" },
    { value: "4", label: "Enterprise", price: "Custom" },
  ];

  return (
    <>
      <PaymentTypeSelector />
      <span  className="w-3/4 text-muted-foreground/50 text-xs mb-4 mt-1 leading-4">
        Ao escolher a opção "Mensal" a renovação do pagamento será automática.
        Podendo ser cancelada a qualquer momento.
      </span>
      <fieldset className="space-y-4 w-3/4">
        <legend className="text-foreground text-sm leading-none font-medium">
          Choose plan
        </legend>
        <RadioGroup
          className="gap-0 -space-y-px rounded-md shadow-xs"
          defaultValue="2"
        >
          {items.map((item) => (
            <div
              key={`${id}-${item.value}`}
              className="border-input has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-accent relative flex flex-col gap-4 border p-4 outline-none first:rounded-t-md last:rounded-b-md has-data-[state=checked]:z-10"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    id={`${id}-${item.value}`}
                    value={item.value}
                    className="after:absolute after:inset-0"
                    aria-describedby={`${`${id}-${item.value}`}-price`}
                  />
                  <Label
                    className="inline-flex items-start text-xl italic font-medium tracking-wide"
                    htmlFor={`${id}-${item.value}`}
                  >
                    {item.label}
                    {item.value === "2" && (
                      <Badge className="ms-2 bg-accent -mt-1">Popular</Badge>
                    )}
                  </Label>
                </div>
                <div
                  id={`${`${id}-${item.value}`}-price`}
                  className="text-muted-foreground text-xs leading-[inherit]"
                >
                  {/* TODO: Remover caso escolha pagamento único (PaymentTypeSelector -> "UMA VEZ") */}
                  {item.price}
                </div>
              </div>
            </div>
          ))}
        </RadioGroup>
      </fieldset>
    </>
  );
}
