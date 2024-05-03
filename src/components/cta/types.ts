import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { ctaStyles } from "./styles";

export type CtaProps = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof ctaStyles>;
