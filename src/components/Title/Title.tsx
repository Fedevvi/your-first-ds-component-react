import { forwardRef } from "react";

import type { TitleElement, TitleProps } from "./types";

export const Title = forwardRef<TitleElement, TitleProps>(
  ({ as = "h1", className, color, ...props }, ref) => {
    const Component = as;
    return <Component className={className} {...props} ref={ref} />;
  }
);

Title.displayName = "Title";
