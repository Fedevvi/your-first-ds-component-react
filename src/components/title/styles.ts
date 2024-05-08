import { cva } from "class-variance-authority";

const titleStyles = cva("font-medium", {
  variants: {
    as: {
      h1: "text-6xl leading-[72px]",
      h2: "text-[50px] leading-[60px]",
      h3: "text-[40px] leading-[48px]",
      h4: "text-[22px] leading-[33px]",
    },
  },
  defaultVariants: {
    as: "h1",
  },
});

export { titleStyles };
