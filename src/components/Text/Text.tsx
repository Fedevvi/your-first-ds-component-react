import { forwardRef } from "react";
import { TextProps } from "./types";

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ color, className, ...props }, ref) => {
    return <p className={className} {...props} ref={ref} />;
  }
);

Text.displayName = "Text";
