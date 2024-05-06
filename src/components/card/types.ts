import { VariantProps } from "class-variance-authority";
import { cardStyles } from "./styles";
import { ComponentPropsWithoutRef } from "react";

export type CardProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof cardStyles>;
