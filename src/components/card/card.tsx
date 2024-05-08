import classNames from "classnames";
import { forwardRef } from "react";
import { CardProps } from "./types";
import {
  cardContentStyles,
  cardFooterStyles,
  cardHeaderStyles,
  cardStyles,
} from "./styles";

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(cardStyles({}), className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

const CardHeader = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(cardHeaderStyles({}), className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

const CardContent = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(cardContentStyles({}), className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

const CardFooter = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={classNames(cardFooterStyles({}), className)}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter };
