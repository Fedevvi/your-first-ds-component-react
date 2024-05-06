import classNames from "classnames";
import { forwardRef } from "react";

import { titleStyles } from "./styles";
import { TitleElement, TitleProps } from "./types";

export const Title = forwardRef<TitleElement, TitleProps>(
  ({ as = "h1", className, ...props }, ref) => {
    const Component = as;
    return (
      <Component
        className={classNames(titleStyles({ as }), className)}
        {...props}
        ref={ref}
      />
    );
  }
);

Title.displayName = "Title";
