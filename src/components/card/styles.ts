import { cva } from "class-variance-authority";

const cardStyles = cva("w-[280px] h-[280px] pl-xs", {
  variants: {
    supply: {
      gas: "bg-cyan",
      electricity: "bg-yellow",
    },
  },
});
const cardHeaderStyles = cva("border-b b-black pb-base");
const cardContentStyles = cva("pb-2xs");
const cardFooterStyles = cva("border-t b-black pr-xxs");

export { cardStyles, cardHeaderStyles, cardContentStyles, cardFooterStyles };
