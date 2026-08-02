import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
      {children}
    </div>
  );
}