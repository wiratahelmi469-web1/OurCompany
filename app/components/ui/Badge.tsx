import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white">
      {children}
    </span>
  );
}