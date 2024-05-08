import { cva } from "class-variance-authority";

const badgeStyles = cva(
  "uppercase font-medium text-center inline-flex items-center px-2xs",
  {
    variants: {
      variant: {
        error: "bg-red",
        success: "bg-green",
        black: "bg-black",
        white: "bg-white",
      },
    },

    compoundVariants: [
      {
        variant: "error",
        class: "text-white",
      },
      {
        variant: "success",
        class: "text-white",
      },
      {
        variant: "black",
        class: "text-white",
      },
      {
        variant: "white",
        class: "text-black border border-black",
      },
    ],
  }
);

export { badgeStyles };
