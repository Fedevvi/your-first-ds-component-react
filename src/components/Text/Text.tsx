import { forwardRef } from "react";
import { TextProps } from "./types";

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ color, className, ...rest }, ref) => {
    return <p ref={ref} className={className} {...rest} />;
  }
);

Text.displayName = "Text";
