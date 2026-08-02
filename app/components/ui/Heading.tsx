import { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
};

export default function Heading({
  children,
}: HeadingProps) {
  return (
    <h2 className="text-5xl font-bold text-white">
      {children}
    </h2>
  );
}