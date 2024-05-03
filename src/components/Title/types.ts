import { VariantProps } from "class-variance-authority";

import type { ComponentPropsWithoutRef, ElementRef } from "react";
import { titleStyles } from "./styles";

type TitleComponent = "h1" | "h2" | "h3" | "h4";
type TitleElement = ElementRef<TitleComponent>;
type TitleProps = ComponentPropsWithoutRef<TitleComponent> & {
  as: TitleComponent | never;
};

export type { TitleProps, TitleElement };
