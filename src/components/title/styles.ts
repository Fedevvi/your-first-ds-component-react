import { cva } from "class-variance-authority";

const titleStyles = cva("", {
  variants: {
    as: {
      h1: "font-medium text-6xl leading-[72px]",
      h2: "font-medium text-[50px] leading-[60px]",
      h3: "font-medium text-[40px] leading-[48px]",
      h4: "font-light text-[22px] leading-[33px]",
    },
  },
});

export { titleStyles };
