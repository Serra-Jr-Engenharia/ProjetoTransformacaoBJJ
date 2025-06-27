"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import {
  Button,
  Group,
  Input,
  Label,
  NumberField,
} from "react-aria-components";

export default function Component({
  currentAmount,
  handleSelect,
}: {
  currentAmount: number;
  handleSelect: (value: number | "CUSTOM") => void;
}) {
  return (
    <NumberField
      value={currentAmount}
      onChange={(value) => handleSelect(typeof value === "number" ? value : "CUSTOM")}
      className
      formatOptions={{
        style: "currency",
        currency: "BRL",
        currencySign: "accounting",
      }}
    >
      <div className="">
        <Label className="text-foreground text-sm font-medium m-0">
          Valor personalizado
        </Label>
        <Group className="border-input outline-none data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 data-focus-within:has-aria-invalid:border-destructive relative inline-flex w-full items-center overflow-hidden rounded-md border text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] data-disabled:opacity-50 data-focus-within:ring-[3px]">
          <Input
            // value={currentAmount}
            onFocus={() => handleSelect("CUSTOM")}
            className="bg-background text-foreground flex-1 px-3 py-2 tabular-nums"
          />
          <div className="flex h-[calc(100%+2px)] flex-col">
            <Button
              slot="increment"
              className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronUpIcon size={12} aria-hidden="true" />
            </Button>
            <Button
              slot="decrement"
              className="border-input bg-background text-muted-foreground/80 hover:bg-accent hover:text-foreground -me-px -mt-px flex h-1/2 w-6 flex-1 items-center justify-center border text-sm transition-[color,box-shadow] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ChevronDownIcon size={12} aria-hidden="true" />
            </Button>
          </div>
        </Group>
      </div>
    </NumberField>
  );
}
