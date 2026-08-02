import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const styles = {
    primary:
      "bg-green-600 hover:bg-green-700 text-white",
    outline:
      "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-7 py-3 font-semibold transition duration-300 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}