import { VariantProps } from "class-variance-authority";

import { ComponentPropsWithoutRef, ReactNode } from "react";
import { badgeStyles } from "./styles";

export type BadgeProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof badgeStyles>;
