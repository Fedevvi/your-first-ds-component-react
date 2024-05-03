import classNames from "classnames";

import { forwardRef } from "react";
import { CtaProps } from "./types";
import { ctaStyles } from "./styles";
import { Text } from "../text/text";

import { ArrowRight } from "../../../public/icons/arrowRight";

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
        <ArrowRight className="" />
      </button>
    );
  }
);
