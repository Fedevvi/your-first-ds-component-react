import classNames from "classnames";
import { forwardRef } from "react";

import { ArrowRight } from "../../../public/icons/arrow-right";
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
        <Text size="sm" weight="medium">
          {children}
        </Text>
        <ArrowRight className="fill-black h-xs w-xs" />
      </button>
    );
  }
);
