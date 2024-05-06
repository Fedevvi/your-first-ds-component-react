import classNames from "classnames";

import { forwardRef } from "react";
import { TextProps } from "./types";
import { textStyles } from "./styles";

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ size, weight, className, ...rest }, ref) => {
    return (
      <p
        ref={ref}
        className={classNames(textStyles({ size, weight }), className)}
        {...rest}
      />
    );
  }
);

Text.displayName = "Text";
