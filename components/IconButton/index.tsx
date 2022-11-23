import Link from "next/link";
import { ReactNode } from "react";

interface IIconButtonProps {
  href: string;
  children: ReactNode;
}

export default function IconButton({ href, children }: IIconButtonProps) {
  return (
    <Link
      href={href}
      className="hover:text-accent-blue hover:bg-white bg-accent-blue p-2 rounded-full flex items-center justify-center"
      target="_blank"
    >
      {children}
    </Link>
  );
}
