import classNames from "classnames";
import { forwardRef } from "react";

import { ArrowRight } from "../../../public/icons/arrowRight";
import { Text } from "../text";
import { ctaStyles } from "./styles";
import { CtaProps } from "./types";

export const Cta = forwardRef<HTMLButtonElement, CtaProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={classNames(ctaStyles({}), className)}
        {...rest}
      >
        <Text size="sm" weight="medium" className="pt-4">
          {children}
        </Text>
        <ArrowRight className="fill-black h-4 w-4" />
      </button>
    );
  }
);
