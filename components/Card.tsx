interface CardProps {
  badge?: string;
  title: string;
  description: string;
  href?: string;
  meta?: string;
}

function CardInner({ badge, title, description, meta }: Omit<CardProps, "href">) {
  return (
    <>
      <div className="space-y-3">
        {badge && <span className="badge">{badge}</span>}
        <div className="space-y-2">
          <h3 className="heading-3 transition-colors group-hover:text-accent">{title}</h3>
          <p className="muted-text">{description}</p>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
        <span className="text-sm text-muted">{meta ?? "View details"}</span>
        <svg
          className="h-5 w-5 shrink-0 text-muted transition-colors group-hover:text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </>
  );
}

export default function Card({ badge, title, description, href, meta }: CardProps) {
  if (href) {
    const external = href.startsWith("http");

    return (
      <a
        href={href}
        className="card-clickable group block"
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        <CardInner badge={badge} title={title} description={description} meta={meta} />
      </a>
    );
  }

  return (
    <div className="card-isolated group">
      <CardInner badge={badge} title={title} description={description} meta={meta} />
    </div>
  );
}
