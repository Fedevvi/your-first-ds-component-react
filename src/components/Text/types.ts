import { VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import { textStyles } from "./styles";

export type TextProps = ComponentPropsWithoutRef<"p"> &
  VariantProps<typeof textStyles>;
