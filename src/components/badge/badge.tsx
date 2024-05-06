import classNames from "classnames";
import { forwardRef } from "react";

import { Text } from "../text";
import { badgeStyles } from "./styles";
import { BadgeProps } from "./types";

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ variant, children, className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(badgeStyles({ variant }), className)}
        {...rest}
      >
        {typeof children === "string" ? <Text>{children}</Text> : children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
