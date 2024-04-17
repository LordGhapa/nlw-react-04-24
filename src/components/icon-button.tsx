import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export default function IconButton({ transparent, ...props }: IconButtonProps) {
  const transparentBg = transparent ? "bg-transparent" : "bg-white/10";
  return (
    <button
      {...props}
      className={`rounded-md border border-white/10 p-1.5 ${transparentBg} disabled:opacity-40`}
    />
  );
}
