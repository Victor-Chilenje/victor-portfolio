import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-slate-700 text-white hover:border-blue-500 hover:text-blue-500",
  };

  return (
    <a
      href={href}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

export default Button;