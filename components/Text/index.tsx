import { ReactNode } from "react";

interface ITextProps {
  children: ReactNode;
  weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black";
  className?: string;
}

export default function Text({ children, weight, className }: ITextProps) {
  const baseClassName = `font-sans ${className}`;

  return <p className={weight ? `${baseClassName} font-${weight}` : baseClassName}>{children}</p>;
}
