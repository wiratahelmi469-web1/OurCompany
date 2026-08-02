import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}