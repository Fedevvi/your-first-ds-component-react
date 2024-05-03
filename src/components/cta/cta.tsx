import classNames from "classnames";

import { forwardRef } from "react";
import { CtaProps } from "./types";
import { ctaStyles } from "./styles";

export const Cta = forwardRef<HTMLButtonElement, CtaProps>(
  ({ className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(ctaStyles({}), className)}
        {...rest}
      />
    );
  }
);
