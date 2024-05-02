import { ComponentPropsWithoutRef, ReactNode } from "react";

export type BadgeProps = {
  variant?: "error" | "success" | "black" | "white";
  children: ReactNode;
} & ComponentPropsWithoutRef<"div">;
