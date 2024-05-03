import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { ctaStyles } from "./styles";

export type CtaProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof ctaStyles>;
