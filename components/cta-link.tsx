import Link from "next/link";

type CtaLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function CtaLink({ href, children, variant = "primary" }: CtaLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-forest text-paper hover:bg-ink"
      : "border border-ink/20 bg-transparent text-ink hover:border-forest hover:text-forest";

  return (
    <Link
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-center text-sm font-black transition sm:text-base ${classes}`}
      href={href}
    >
      {children}
    </Link>
  );
}
