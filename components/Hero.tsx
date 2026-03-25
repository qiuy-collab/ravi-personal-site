interface HeroProps {
  name: string;
  title: string;
  intro: string;
  tags?: string[];
  avatarUrl?: string;
  socialLinks?: {
    label: string;
    href: string;
    icon?: string;
  }[];
}

export default function Hero({
  name,
  title,
  intro,
  tags = [],
  avatarUrl,
  socialLinks = []
}: HeroProps) {
  return (
    <div className="card-hero animate-in">
      {avatarUrl && (
        <div className="mb-5 flex justify-center md:mb-6">
          <div className="relative float">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-accent-secondary p-[3px] glow-pulse">
              <div className="h-full w-full rounded-full bg-card" />
            </div>
            <img
              src={avatarUrl}
              alt={name}
              className="relative z-10 h-20 w-20 rounded-full object-cover ring-4 ring-card transition-transform duration-300 hover:scale-[1.03] sm:h-24 sm:w-24 md:h-28 md:w-28"
            />
          </div>
        </div>
      )}

      <h1 className="heading-1 mb-1.5 text-center md:mb-2">{name}</h1>

      <p className="mb-3 text-center text-base md:mb-4 md:text-lg">
        <span className="accent-text font-medium">{title}</span>
      </p>

      <p className="body-text mx-auto mb-5 max-w-2xl text-center md:mb-6">{intro}</p>

      {tags.length > 0 && (
        <div className="mb-5 flex flex-wrap justify-center gap-1.5 stagger-in md:mb-6 md:gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="tag transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/15">
              {tag}
            </span>
          ))}
        </div>
      )}

      {socialLinks.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 stagger-in md:gap-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="btn-outline py-1.5 text-sm"
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
