import { cva } from "class-variance-authority";

export const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-md px-3 py-1.5 ring-indigo-500 ring-offset-2 focus:outline-none focus:ring  text-gray-950  h-8 text-sm font-semibold",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:bg-gray-200",
        plus: "bg-gray-200 hover:bg-gray-300",
      },
    },
  }
);

export const Button = ({ children, variant = "default" }) => {
  return <button className={buttonStyles({ variant })}>{children}</button>;
};
