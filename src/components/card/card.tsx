import classNames from "classnames";
import { forwardRef } from "react";
import { CardHeaderProps, CardProps } from "./types";
import { cardHeaderStyles, cardStyles } from "./styles";
import { Cta } from "../cta/cta";

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

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
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
  ({ className, ...rest }, ref) => {
    return (
      <div ref={ref} className={classNames(cardStyles, className)} {...rest} />
    );
  }
);

CardContent.displayName = "CardContent";

const CardButton = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...rest }, ref) => {
    return (
      <Cta>Monitora e gestisci</Cta>
      //   <div ref={ref} className={classNames(cardStyles, className)} {...rest} />
    );
  }
);

CardButton.displayName = "CardButton";

export { Card, CardHeader, CardContent, CardButton };
